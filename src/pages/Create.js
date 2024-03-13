import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./create.css";
function Create() {
  return (
    <div className="row" style={{ padding: "26px", marginTop: "20px" }}>
      <div className="col-12 col-md-6">
        <h2 style={{ color: "#ff4d4d" }}>
          <b>Use Our Drop-down tool to create a website</b>
        </h2>
        <center>
          <h5
            className="obje  justify-content-center"
            style={{ color: "darkblue" }}
          >
            <br></br>
            <p class="d-flex justify-self-start">- create your own website</p>
            <p class="d-flex justify-self-start">
              - Save the work when you left{" "}
            </p>
            <p class="d-flex justify-self-start">- Resume where you left </p>
          </h5>
        </center>
        {/* <Button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "210px",
            height: "70px",
            borderRadius: "20px",
            marginTop: "100px",
          }}
        > */}
        <Link style={{ textDecoration: "none", color: "white" }} to="/lets">
          <div class="wrap">
            <button class="button1">Create Now</button>
          </div>
        </Link>
        {/* </Button> */}
      </div>
      {/* <div class="vl col-md-1 offset-md-1"></div> */}
      <div className="col-12 col-md-6">
        <h2 style={{ color: "#ff4d4d" }}>
          Use Our Partner <br></br>Wix For automatic Website building
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="wrap">
          <button class="button1">Use Now</button>
        </div>
      </div>

      <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>
          Have a doubt see step by step guide <br></br>
          <Link to="/Guide">Clear here </Link>
        </h2>
      </center>
    </div>
  );
}

export default Create;
