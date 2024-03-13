import React, { useState } from "react";
import "./contact.css";
import { useHistory } from "react-router-dom";
import MyMapComponent from "../components/MyMapComponent";
import Zoom from "react-reveal/Zoom";
// import { db } from "../firebase";

function Contact() {
  let history = useHistory();
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { fName, lName, email, mobile, message } = details;

    const res = await fetch(
      "https://startup-builder-835b1-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          mobile,
          message,
        }),
      }
    );
    alert("submitted");
    history.push("/");
  };
  return (
    <>
      <Zoom top>
        <h1 className="con">Contact Us</h1>
      </Zoom>
      <div className="row contact">
        <div className="col-12 col-md-8">
          <div className="container">
            {" "}
            <div className=" text-center mt-5 "></div>
            <div className="row ">
              <div className="col-lg-7 mx-auto">
                <div className="card mt-2 mx-auto p-4 bg-light">
                  <div className="card-body bg-light">
                    <div className="container">
                      <form id="contact-form " role="form">
                        <div className="controls">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                {" "}
                                <label for="form_name ">Firstname *</label>{" "}
                                <input
                                  id="form_name "
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Please enter your firstname *"
                                  required
                                  data-error="Firstname is required."
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      fName: e.target.value,
                                    })
                                  }
                                />{" "}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                {" "}
                                <label for="form_lastname">
                                  Lastname *
                                </label>{" "}
                                <input
                                  id="form_lastname"
                                  type="text"
                                  name="surname"
                                  className="form-control"
                                  placeholder="Please enter your lastname *"
                                  required
                                  data-error="Lastname is required."
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      lName: e.target.value,
                                    })
                                  }
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div
                                className="form-group"
                                style={{ paddingTop: "30px" }}
                              >
                                {" "}
                                <label for="form_email">Email *</label>{" "}
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Please enter your email *"
                                  required
                                  data-error="Valid email is required."
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      email: e.target.value,
                                    })
                                  }
                                />{" "}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div
                                className="form-group"
                                style={{ paddingTop: "30px" }}
                              >
                                {" "}
                                <label for="form_need">Phone No*</label>
                                <input
                                  id="form_need"
                                  type="number"
                                  name="phone"
                                  className="form-control"
                                  placeholder="Please enter your phone no *"
                                  required
                                  data-error="Valid Phone is required."
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      mobile: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="form-group"
                                style={{ paddingTop: "30px" }}
                              >
                                {" "}
                                <label for="form_message">Message *</label>{" "}
                                <textarea
                                  id="form_message"
                                  name="message"
                                  className="form-control"
                                  placeholder="Write your message here."
                                  rows="4"
                                  required
                                  data-error="Please, leave us a message."
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      message: e.target.value,
                                    })
                                  }
                                ></textarea>{" "}
                              </div>
                            </div>
                            <div
                              className="col-md-12"
                              style={{ paddingTop: "30px" }}
                            >
                              {" "}
                              <input
                                type="submit"
                                className="btn btn-success btn-send pt-2 btn-block "
                                value="Submit"
                                onClick={PostData}
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center">
          <div className="map">
            <div className="address"></div>
            <MyMapComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
