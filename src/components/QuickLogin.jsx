import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function QuickLogin() {
  const navigate = useNavigate();
  const scriptId = "quicklogin-sdk"; // Consistent script ID
  const buttonContainerId = "quicklogin-container"; // Consistent container ID

  useEffect(() => {
    const loadQuickLoginSDK = () => {
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.1.1/dist/quicklogin.js";
        script.onload = initializeQuickLogin;
        document.body.appendChild(script);
      } else {
        // If script exists, just initialize QuickLogin directly
        initializeQuickLogin();
      }
    };

    const initializeQuickLogin = () => {
      // Remove any existing QuickLogin buttons
      const existingButtons = document.querySelectorAll("div[data-quicklogin]");
      existingButtons.forEach((button) => {
        if (button.parentNode) {
          button.parentNode.removeChild(button);
        }
      });

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
      buttonContainer.style.width = "100%";
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "center";
      buttonContainer.style.alignItems = "center";

      if (window.QuickLogin) {
        window.QuickLogin.createQuickLogin({
          container: buttonContainer,
          apiKey: process.env.REACT_APP_HEIRLOOM_API_KEY,
          onQuickLoginSuccess: (authToken) => {
            console.log("Authentication successful.", authToken);
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
  }, [navigate]);

  return null; // No need to return a container from the component
}

export default QuickLogin;
