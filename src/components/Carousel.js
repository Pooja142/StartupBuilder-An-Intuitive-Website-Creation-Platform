import React from "react";
import "./Carosel.css";
import { Link } from "react-router-dom";
import online from "../assest/online.jpg";
import blog from "../assest/Blog-website.png";
import education from "../assest/eduction.jpg";
import protfolio from "../assest/portfolio.jpg";
import business from "../assest/business.jpg";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={50}
        totalSlides={6}
        visibleSlides={1}
        currentSlide={1}
        interval={1000}
        style={{ margin: "20px" }}
      >
        <h1 style={{ padding: "25px" }}>
          <b>Implement your Creative Idea's</b>
        </h1>
        <Slider>
          <Slide index={0} style={{ margin: "20px" }}>
            <img src={online} className="c_img" />
          </Slide>

          <Slide index={1} style={{ margin: "20px" }}>
            <img src={blog} className="c_img" />
          </Slide>
          <Slide index={2} style={{ margin: "20px" }}>
            <img src={protfolio} className="c_img" />
          </Slide>
          <Slide index={3} style={{ margin: "20px" }}>
            <img src={education} className="c_img" />
          </Slide>
          <Slide index={4} style={{ margin: "20px" }}>
            <img src={business} className="c_img" />
          </Slide>
        </Slider>
        <center>
          {" "}
          <Link to="/templates" style={{ textDecoration: "none" }}>
            <div class="wrap">
              <button class="button1">Browse All templates</button>
            </div>
          </Link>
        </center>
        <div style={{ marginLeft: "60vw" }}>
          <ButtonBack
            style={{
              borderRadius: "50%",
              // background: "blue",
              borderStyle: "none",
              Color: "black",
              fontSize: "20px",
            }}
          >
            &lt;
          </ButtonBack>
          &nbsp; &nbsp;
          <ButtonNext
            style={{
              borderRadius: "50%",
              // background: "blue",
              borderStyle: "none",
              Color: "black",
              fontSize: "20px",
            }}
          >
            &gt;
          </ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}
