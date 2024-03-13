import { Button } from "@mui/material";
import React from "react";
import "./Getstart1.css";
const Getstart1 = ({ title, content }) => {
  return (
    <div className="row container-fluid">
      <div className="Conatiner1  col-12 col-6">
        <h1 className="title1">{title}</h1>
        <h3 className="content1">{content}</h3>
      </div>
    </div>
  );
};

export default Getstart1;
