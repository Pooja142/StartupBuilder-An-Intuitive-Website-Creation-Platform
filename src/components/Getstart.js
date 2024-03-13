import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Getstart.css";
const Getstart = ({ title, content }) => {
  return (
    <div className="row container-fluid">
      <div className="conatiner1  col-12 col-md-6">
        <h1 className="title1">{title}</h1>
        <h3 className="content1">{content}</h3>

        <Link style={{ textDecoration: "none" }} to="/create">
          {/* <Button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "210px",
              height: "70px",
              borderRadius: "20px",
              marginTop: "180px",
              marginLeft: "350px",
            }}
          > */}
          <div class="wrap">
            <button
              style={{
                backgroundColor: "black",
                color: "black",
                width: "210px",
                height: "70px",
                borderRadius: "20px",
                marginTop: "180px",
                marginLeft: "350px",
              }}
              class="button1"
            >
              Get Started
            </button>
          </div>
          {/* </Button> */}
        </Link>
      </div>
    </div>
  );
};

export default Getstart;
