import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-md-3 col-6 mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/enjoytv.png`}
            alt="Enjoy TV"
            className="img-fluid"
            style={{ height: "300px", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/download.png`}
            alt="Download"
            className="img-fluid"
            style={{ height: "300px", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/watch.png`}
            alt="Watch"
            className="img-fluid"
            style={{ height: "300px", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-3 col-6 mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/createprofiles.png`}
            alt="Create Profiles"
            className="img-fluid"
            style={{ height: "300px", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
