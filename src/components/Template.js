import { Link } from "@mui/material";
import React from "react";
import TempBox from "./TemBox";
import "./Template.css";
import online from "../assest/online.jpg";
import blog from "../assest/Blog-website.png";
import education from "../assest/eduction.jpg";
import protfolio from "../assest/portfolio.jpg";
import business from "../assest/business.jpg";

const Template = (props) => {
  return (
    <center>
      <div>
        <div>
          <h1 className="title1">{props.title}</h1>
          <p className="desc1">{props.desc}</p>
          <h2>
            <a href="#" className="te">
              {" "}
              See All Website Templates &#8594;
            </a>
          </h2>
        </div>
        <div class="row justify-content-evenly tempboxm ">
          <div className=" tempbox col-12 col-xl-4">
            <TempBox img={online} name="Online store " />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox img={business} name="Business" />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox img={blog} name="Blog" />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox img={education} name="Education" />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox img={protfolio} name="Protfolio" />
          </div>
        </div>
      </div>
    </center>
  );
};

export default Template;
