import React from "react";
import "./home.css";
import profile from "../../assets/profile.jpg";
import { SocialNetworks } from "./SocialNetworks";
import { Data } from "./Data";

export function Home() {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <SocialNetworks />
          <div className="box">
            <div className="box_content">
              <img src={profile} className="box_content_img"></img>
              <h3 className="box_content_title">Hi! That's me.</h3>
              <a href="#about" className="box_content_link">About Me</a>
            </div>
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
}
