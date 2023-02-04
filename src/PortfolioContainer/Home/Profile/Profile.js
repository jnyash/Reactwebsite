import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/yash-jain-7304b397" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/yash30sept" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/mr.yash.jn/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006115696489" target="_blank">
              <i className="fa fa-facebook-square" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Yash</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="YashResume.pdf" download="Yash Jain.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
