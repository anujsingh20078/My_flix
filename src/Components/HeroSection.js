import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="overlay" />
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.png`} // ✅ Correct path for public folder image
          alt="Netflix Logo"
          className="logo"
        />
        <div>
          <select className="lang">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <button className="signin">Sign In</button>
        </div>
      </nav>
      <div className="content mb-5">
        <h1>Unlimited movies, TV<br />shows and more</h1>
        <h2>Starts at ₹149. Cancel at any time.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="email-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
