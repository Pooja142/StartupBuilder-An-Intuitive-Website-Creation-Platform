import React from "react";
import "./Letstart.css";
const Letstart = ({ title, content }) => {
  return (
    <div className="row container-fluid">
      <div className="Conatiner  col-12 col-6">
        <h1 className="title">{title}</h1>
        <h3 className="content">{content}</h3>
      </div>
    </div>
  );
};

export default Letstart;
