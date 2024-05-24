import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function QuickLogin() {
  const navigate = useNavigate();
  const scriptId = "quicklogin-sdk";
  const buttonContainerId = "quicklogin-container";
  const { verifyUser } = useAuth();

  useEffect(() => {
    const loadQuickLoginSDK = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.2.0/dist/quicklogin.js";
      script.onload = () => setTimeout(initializeQuickLogin(verifyUser), 100);
      document.body.appendChild(script);
    };

    const initializeQuickLogin = (verifyUser) => {
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
      buttonContainer.style.padding = "40px"; // Increased padding
      buttonContainer.style.backgroundColor = "white"; // Temporarily set a semi-transparent white background

      const apiKey = process.env.REACT_APP_HEIRLOOM_API_KEY;
      const lockId = process.env.REACT_APP_HEIRLOOM_LOCK_ID;

      if (window.QuickLogin) {
        window.QuickLogin.createQuickLogin({
          container: buttonContainer,
          apiKey: apiKey,
          lockId: lockId,
          onQuickLoginSuccess: (authToken) => {
            console.log("Authentication successful.", authToken);
            verifyUser(authToken);
            navigate("/dashboard");
          },
        });
      } else {
        console.error("QuickLogin is not available on window.");
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
  }, [navigate, verifyUser]);

  return null;
}

export default QuickLogin;
