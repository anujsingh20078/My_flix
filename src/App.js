import React from "react";
import HeroSection from "./Components/HeroSection";
import FooterSection from "./Components/FooterSection";
import TrendingNow from "./Components/TrendingNow";
import MoreReason from "./Components/MoreReason";
import FaqSection from "./Components/FaqSection";
import Signup from "./Components/Signup";




import "./App.css";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <TrendingNow/>
      <MoreReason/>
      <FaqSection/>
      <Signup/>
      <FooterSection/>
    </div>
  );
}

export default App;
