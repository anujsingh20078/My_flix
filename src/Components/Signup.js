import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="email-signup-container">
      <p className="email-signup-text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="email-form">
        <input
          type="email"
          placeholder="Email address"
          className="email-input"
        />
        <button className="get-started-button">
          Get Started <span className="arrow">➤</span>
        </button>
      </div>
    </div>
  );
}

export default Signup;
