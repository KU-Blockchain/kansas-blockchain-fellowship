import React, { useEffect } from "react";

function QuickLogin() {
  useEffect(() => {
    console.log("apiKey", process.env.REACT_APP_HEIRLOOM_API_KEY);
    const loadQuickLoginSDK = () => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.1.1/dist/quicklogin.js";
      script.onload = () => initializeQuickLogin();
      document.body.appendChild(script);
    };

    // Function to initialize QuickLogin
    const initializeQuickLogin = () => {
      if (window.QuickLogin) {
        window.QuickLogin.createQuickLogin({
          apiKey: process.env.REACT_APP_HEIRLOOM_API_KEY,
          onQuickLoginSuccess: (authToken) => console.log(authToken),
        });
      }
    };

    loadQuickLoginSDK();
  }, []);

  return <div data-quicklogin></div>;
}

export default QuickLogin;
