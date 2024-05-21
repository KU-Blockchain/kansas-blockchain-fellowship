import React, { useEffect } from "react";

function QuickLoginTest() {
  useEffect(() => {
    const loadQuickLoginSDK = () => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.2.0/dist/quicklogin.js";
      script.onload = () => initializeQuickLogin();
      document.body.appendChild(script);
    };

    const initializeQuickLogin = () => {
      if (window.QuickLogin) {
        window.QuickLogin.createQuickLogin({
          apiKey: process.env.REACT_APP_HEIRLOOM_API_KEY,
          lockId: process.env.REACT_APP_HEIRLOOM_LOCK_ID,
          onQuickLoginSuccess: (authToken) => console.log(authToken),
        });
      } else {
        console.error("QuickLogin is not available on window.");
      }
    };

    loadQuickLoginSDK();

    return () => {
      const script = document.querySelector(
        'script[src="https://cdn.jsdelivr.net/gh/heirloom-io/quicklogin-js@0.2.0/dist/quicklogin.js"]'
      );
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="app">
      <div id="login">
        <h1 id="welcome">Welcome</h1>
        <div data-quicklogin></div>
      </div>
    </div>
  );
}

export default QuickLoginTest;
