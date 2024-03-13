import React from "react";
import "./Box.css";

const TempBox = ({ img, name }) => {
  return (
    <div className="box">
      <a href="#">
        {" "}
        <img src={img} className="img_box" />
      </a>
      <h3 style={{ marginTop: "20px" }}>{name}</h3>
    </div>
  );
};

export default TempBox;
