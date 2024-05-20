import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QuickLogin() {
  const navigate = useNavigate();
  const scriptId = "quicklogin-sdk";
  const buttonContainerId = "quicklogin-container";

  useEffect(() => {
    const loadQuickLoginSDK = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.1.1/dist/quicklogin.js";
      script.onload = () => setTimeout(initializeQuickLogin, 100);
      document.body.appendChild(script);
    };

    const initializeQuickLogin = async () => {
      const existingButtons = document.querySelectorAll("div[data-quicklogin]");
      existingButtons.forEach((button) =>
        button.parentNode.removeChild(button)
      );

      let buttonContainer = document.getElementById(buttonContainerId);
      if (!buttonContainer) {
        buttonContainer = document.createElement("div");
        buttonContainer.id = buttonContainerId;
        document.body.appendChild(buttonContainer);
      }
      buttonContainer.setAttribute("data-quicklogin", "");
      buttonContainer.style.position = "absolute";
      buttonContainer.style.left = "50%";
      buttonContainer.style.transform = "translateX(-50%)";
      buttonContainer.style.width = "50%";
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "center";
      buttonContainer.style.alignItems = "center";
      buttonContainer.style.padding = "40px";
      buttonContainer.style.backgroundColor = "white";

      const apiKey = process.env.REACT_APP_HEIRLOOM_API_KEY;
      const lockId = process.env.REACT_APP_HEIRLOOM_LOCK_ID;

      if (!apiKey || !lockId) {
        console.error("API Key or Lock ID is missing.");
        return;
      }

      try {
        const response = await axios.get(
          "https://api.heirloom.io/auth/sessions/challenges",
          {
            headers: {
              "X-Heirloom-API-Version": "1",
              "X-Heirloom-API-Key": apiKey,
              "X-Heirloom-Lock-ID": lockId,
            },
          }
        );

        const loginChallenge = response.data.loginChallenge;

        if (window.QuickLogin) {
          window.QuickLogin.createQuickLogin({
            container: buttonContainer,
            apiKey,
            lock: {
              lockId,
              loginChallenge,
            },
            onQuickLoginSuccess: (authToken) => {
              console.log("Authentication successful.", authToken);
              navigate("/dashboard");
            },
            onQuickLoginError: (error) => {
              console.error("Authentication failed.", error);
            },
          });

          const socket = new WebSocket(
            `wss://api.heirloom.io?apiKey=${apiKey}&lockId=${lockId}&jwtChallenge=${loginChallenge}`
          );

          socket.onopen = () => {
            console.log("WebSocket connection established.");

            // Subscribe to the topic
            const topic = `tokens:${apiKey}:${lockId}:${loginChallenge}`;
            socket.send(
              JSON.stringify({
                action: "subscribe",
                topic: topic,
              })
            );
          };

          socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.authToken) {
              console.log("Authentication successful.", data.authToken);
              navigate("/dashboard");
            } else {
              console.error("Unexpected WebSocket message:", data);
            }
          };

          socket.onerror = (event) => {
            console.error("WebSocket error:", event);
            // More detailed error handling
            if (event.target instanceof WebSocket) {
              const ws = event.target;
              console.error(`WebSocket URL: ${ws.url}`);
              console.error(`WebSocket readyState: ${ws.readyState}`);
            }
            if (event.message) {
              console.error(`Error message: ${event.message}`);
            }
            if (event.type) {
              console.error(`Error type: ${event.type}`);
            }
          };

          socket.onclose = (event) => {
            if (event.wasClean) {
              console.log(
                `WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`
              );
            } else {
              console.error("WebSocket connection closed unexpectedly.", event);
              console.error(`Close code: ${event.code}`);
              console.error(`Close reason: ${event.reason}`);
            }
          };
        } else {
          console.error("QuickLogin is not available on window.");
        }
      } catch (error) {
        console.error("Failed to get login challenge:", error);
      }
    };

    loadQuickLoginSDK();

    return () => {
      const script = document.getElementById(scriptId);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      const buttonContainer = document.getElementById(buttonContainerId);
      if (buttonContainer && buttonContainer.parentNode) {
        buttonContainer.parentNode.removeChild(buttonContainer);
      }
    };
  }, [navigate]);

  return null;
}

export default QuickLogin;
