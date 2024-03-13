import React from "react";
import Getstart from "../components/Getstart";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import "./Home.css";
import promote from "../assest/promote.jpg";
import objective from "../assest/objective.jpg";
import Template from "../components/Template";
import adsense from "../assest/adsense.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./create.css";
const Home = () => {
  return (
    <>
      <div className="container-fuild sf1">
        <Flip bottom>
          <div style={{ marginTop: "50px", marginRight: "150px" }}>
            <p>
              <h1 class="title">Grow your startup to unlimited heights</h1>
              <br></br>
              <br></br>

              <h2 class="des">
                Discover the platform that gives you the freedom to create,
                design, manage and develop your web presence exactly the way you
                want.
              </h2>
            </p>
            <Link style={{ textDecoration: "none" }} to="/create">
              {/* <Button
                style={{
                  backgroundColor: "#4666FF",
                  color: "white",
                  width: "200px",
                  height: "60px",
                  borderRadius: "10px",
                  marginLeft: "-70px",
                  marginTop: "100px",
                  marginBottom: "80px",
                }}
              > */}
              <br></br>
              <div class="wrap">
                <button class="button1">Get Started</button>
              </div>
              {/* </Button>{" "} */}
              <br></br>
            </Link>
          </div>
        </Flip>
      </div>

      <div className="row objective1 ">
        <div className="col-12 col-md-6  ">
          <p className="obje1">
            <ol type="i">
              <li>
                To serve for the people who wants to be head in life from ,for
                creators,for creative people for risk factors,for who wish to be
                independent.
              </li>
              <li>
                {" "}
                StartGrow is the paltform who helps the people who want to
                startup or who had startup either by providing
                Investor,Advertiser,or web creation.
              </li>
              <li>
                StartGrow is a platform where people can create thier own
                website according to thier services for free by choosing the
                templates or by creating alone.
              </li>
              <li>
                StartGrow motive is to support startup and grow together to
                serve for the best,
              </li>
            </ol>
          </p>
        </div>
        <div className="col-12 col-md-6" style={{ margin: "auto" }}>
          <img src={objective} style={{ width: "45vw" }}></img>
        </div>
      </div>

      <div className="main1 row align-items-center container-fluid">
        <div className="col-sm-12 col-md-6  ">
          <p className="left11">The Freedom to Create the Websites You Want </p>
        </div>
        <div className=" col-sm-12 col-md-6">
          <p className="right1">
            Design and build your own high-quality websites. Whether you’re
            promoting your business, showcasing your work, opening your store or
            starting a blog—you can do it all with the website builder.
          </p>
        </div>
      </div>
      <div className="temp1 container-fuild">
        <Fade bottom>
          <Template
            title="Professionally Designed Website Templates"
            desc="Choose from 500+ customizable website templates that are built to meet your business needs."
          />
        </Fade>
      </div>

      <div className="row align-items-center ads1 container-fluid ">
        <div className="col-12 col-md-4">
          <p className="leftads1">
            Freedom to find and hires Advertiser for promotions
          </p>
          <center>
            <button className="btn btn-dark">
              <Link to="#" style={{ textDecoration: "none" }}>
                <h6 style={{ color: "white" }}>Get Advertiser</h6>
              </Link>
            </button>
          </center>
        </div>
        <div className="col-12 col-md-4">
          <img
            src={promote}
            height={200}
            width={300}
            alt="image"
            style={{ borderRadius: "20px", padding: "10px" }}
          />
        </div>
        <div className="col-12 col-md-4">
          <p className="rightads11">
            Promote your business and even eran also! Hire Advertiser and which
            with do promotions for you owner and Promote both can earn
          </p>
        </div>
      </div>

      <div className="main1 row align-items-center container-fluid ">
        <div className="col-sm-12 col-md-6  ">
          <p className="left1">
            Welcome to become a Investor Invest in Startup's and grow together
          </p>
        </div>
        <div className=" col-sm-12 col-md-6">
          <p className="right1">
            Be a Investor in startup.&nbsp; Find company according to your{" "}
            <br></br> relevance.&nbsp; Invest your money and let your investment
            be a trustworthy for startup.&nbsp; <br></br>
            <b>"GROW TOGETHER"</b>
          </p>
          <br></br>
          <br></br>
          <center>
            <button className="btn btn-dark btn-lg">Be a Investor</button>
          </center>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Home;
