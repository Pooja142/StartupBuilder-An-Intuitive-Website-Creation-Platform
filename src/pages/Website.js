import React from "react";
import Getstart from "../components/Getstart";
import Flip from "react-reveal/Flip";
import web from "../assest/web_build_intro.jpg";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import manage_p from "../assest/manage_product.png";
import bk from "../assest/dropdown.jpeg";
import "./website.css";
function Website() {
  return (
    <>
      <div className="row container-fluid">
        <div className=" col-12 col-md-6 get">
          <Flip bottom>
            <Getstart
              title="StartGrow Website Builder"
              content="Your free website is just the beginning create your modern,mobile-friendly website for free"
            />
          </Flip>
        </div>
        <div className=" col-12 col-md-6 ">
          <Flip bottom>
            <img
              src={web}
              style={{
                marginTop: "10px",
                height: "100%",
                width: "100%",
                alt: "web",
              }}
              alt="web"
            />
          </Flip>
        </div>
      </div>
      <br></br>
      <br></br>
      <Carousel />
      <br></br>
      <br></br>
      <Flip bottom>
        {" "}
        <div className="website_main row align-items-center container-fluid">
          <div className="col-sm-12 col-md-6  ">
            <p className="left_web">
              <b>Manage your own Product on your own</b>
            </p>
            <br></br>
            <center>
              {" "}
              <button
                className="btn btn-dark  btn-lg"
                style={{ padding: "10px" }}
              >
                <Link to="#" style={{ textDecoration: "none" }}>
                  <h6 style={{ color: "white" }}>Start Now</h6>
                </Link>
              </button>
            </center>
          </div>
          <div className=" col-sm-12 col-md-6">
            <img className="" src={manage_p} height={400} alt="manage_p" />
          </div>
        </div>
      </Flip>

      <Flip bottom>
        <div className="website_main row align-items-center container-fluid">
          <div className="col-sm-12 col-md-6  ">
            <p className="left_web">
              <b>Manage your own Product on your own by just dropping down</b>
              <br></br>
              <br></br>
              <h5>
                {" "}
                <li>
                  {" "}
                  Use the online editor for creating save in between there and
                  resume where u left
                </li>
              </h5>
            </p>
            <br></br>
            <center>
              {" "}
              <button
                className="btn btn-dark btn-lg "
                style={{ padding: "10px" }}
              >
                <Link to="#" style={{ textDecoration: "none" }}>
                  <h6 style={{ color: "white" }}>Start Now</h6>
                </Link>
              </button>
            </center>
            <br></br>
          </div>
          <div className=" col-sm-12 col-md-6">
            <img className="left_img" src={bk} alt="bk" />
          </div>
        </div>
      </Flip>
      <br></br>
      <center>
        <h2 style={{ margin: "20px", fontSize: "50px", padding: "25px" }}>
          <b>Lets bring a life to your creative idea's</b>
        </h2>
      </center>
    </>
  );
}

export default Website;
