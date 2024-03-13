import React from "react";
import "./about.css";
import Azad from "../assest/coder4.jpeg";
import Harish from "../assest/coder3.jpeg";
import zahra from "../assest/zahra.jpeg";
import pooja from "../assest/pooja.jpeg";
import Zoom from "react-reveal/Zoom";
import imgbg from "../assest/startup.jpg";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function About() {
  return (
    <>
      <div className=" container about">
        <div className="col-12  titleabout">
          <Zoom top>
            <p>ABOUT</p>
          </Zoom>
        </div>

        <div className=" row pbox">
          <div className="col-12 col-md-6  pabout">
            <p>
              <b>OUR Team</b>
              <ul>
                <li>
                  We are a group of Engineer student implementing this as a Mini
                  Project and also a project which a new feture and also
                  implementing same flow in the existing market system
                </li>
                <li>Our team detail is given below you can read out </li>
                <li>
                  Hod some quries you can reach it us by given contact detail
                </li>
              </ul>
              <b>The Project (StartGrow)</b>
              <ul>
                <li>
                  The Main matter of this project is to provide a better system
                  for the betterment of this society{" "}
                </li>
                <li>
                  This Project is a combined platform which provide various
                  feature like(Website builder,Promotion,Investment) which all
                  are releted to startup business{" "}
                </li>
                <li>
                  This project is basically for the people who are thinking to
                  do startup or who already had ore so by using system startup
                  business will definetly get a bost and become succesfull
                </li>
              </ul>
            </p>
          </div>
          <div className=" col-12  col-md-6 pimg">
            <img src={imgbg} className="imgbg" />
          </div>
        </div>
      </div>
      <div class="team">
        <div class="container">
          <div class="section-header text-center">
            <p style={{ fontWeight: "bolder" }}>Meet Our Team</p>
            <h2 style={{ margin: "40px" }}>Our Engineers & Workers</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={Azad} alt="Team Image" height="270px" />
                </div>
                <div class="team-text">
                  <h2>Azad Ansari</h2>
                  <p>Engineer</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={Harish} alt="Team Image" height="270px" />
                </div>
                <div class="team-text">
                  <h2>Harish Khan</h2>
                  <p>Engineer</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={zahra} alt="Team Image" height="270px" />
                </div>
                <div class="team-text">
                  <h2>Zahra Sayed</h2>
                  <p>Engineer</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="team-img">
                  <img src={pooja} alt="Team Image" height="270px" />
                </div>
                <div class="team-text">
                  <h2>Pooja Rathod</h2>
                  <p>Engineer</p>
                  <div class="team-social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
