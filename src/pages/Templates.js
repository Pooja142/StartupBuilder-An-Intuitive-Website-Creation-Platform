import React, { useState } from "react";
import "./templates.css";
import Temp from "./temp";
import { Link } from "react-router-dom";

function Templates() {
  const [item, setItem] = useState(Temp);
  const filterItem = (Item) => {
    const updatedItem = Temp.filter((curitem) => {
      return curitem.category === Item;
    });
    setItem(updatedItem);
  };

  console.log(item);
  return (
    <>
      <div className="row conatiner-fluid" style={{ margin: "35px" }}>
        <div className=" col-md-8 offset-md-2 d-flex justify-content-around">
          <button className="btn btn-light btn1" onClick={() => setItem(Temp)}>
            All
          </button>
          <button
            className="btn btn-light btn1"
            onClick={() => filterItem("Online_Store")}
          >
            Online_Store
          </button>
          <button
            className="btn btn-light btn1"
            onClick={() => filterItem("Education")}
          >
            Education
          </button>
          <button
            className="btn btn-light btn1"
            onClick={() => filterItem("Business")}
          >
            Business
          </button>
          <button
            className="btn btn-light btn1"
            onClick={() => filterItem("Portfolio")}
          >
            Portfolio
          </button>
          <button
            className="btn btn-light btn1"
            onClick={() => filterItem("Blog")}
          >
            Blog
          </button>
        </div>
        <div className=" row  col-12 container ">
          {item.map((ele) => {
            const { id, image, category } = ele;

            return (
              <div className="col-sm-6 col-md-4">
                <div
                  className="grid"
                  style={{
                    height: "300px",
                    width: "300px",
                    margin: "50px",
                  }}
                >
                  <center>
                    {" "}
                    <a href={id}>
                      <img
                        className="img_t"
                        src={image}
                        width={322}
                        height={220}
                      />
                    </a>
                  </center>

                  <br></br>
                  <h2> {category}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ fontSize: "25px" }}>
        <p>
          Use this templates for reference to get an idea how to create a
          website using our "Drag and Drop " feature <br></br>
          OR
        </p>
        <p>
          If you want to create a website using automative tool use our
          partner's brand tool- Wix
        </p>
        <div className="btn-group">
          <button className="btn btn-dark lg">Create Now </button>
          &nbsp;
          <button className="btn btn-dark lg">Go to Wix </button>
        </div>
      </div>
    </>
  );
}

export default Templates;
