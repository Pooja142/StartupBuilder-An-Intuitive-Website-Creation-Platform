import React from "react";
import "./Box.css";

const TempBox1 = ({ img, name, text }) => {
  return (
    <div className="box">
      <a href="#">
        {" "}
        <img src={img} className="img_box" />
      </a>
      <h3 style={{ marginTop: "25px", fontWeight: "550" }}>{name}</h3>
      <p style={{ marginTop: "20px", marginBottom: "20px", fontSize: "19px" }}>
        {text}
      </p>
    </div>
  );
};

export default TempBox1;
