import React from "react";
import TempBox1 from "./TempBox1";
import "./Template.css";
import account from "../assest/account.jpg";
import Connect from "../assest/connect.jpg";
import mobile from "../assest/mobile.jpg";

const Template1 = (props) => {
  return (
    <center>
      <div>
        <div>
          <h1 className="title1">{props.title}</h1>
          <p className="desc1">{props.desc}</p>
          <h2>
            <a href="#" className="te">
              {" "}
              Here's what you have to do &#8594;
            </a>
          </h2>
        </div>
        <div class="row justify-content-evenly tempboxm ">
          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={account}
              name="Create An Account"
              text="If you’re using Gmail or any other Google service, you already have one. If not, just click to sign up and we’ll help you create your new account. It gets you into AdSense and everything Online."
            />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={mobile}
              name="Phone number and postal address"
              text="Your phone number and the mailing address associated with your bank account so you can get paid."
            />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={Connect}
              name="Connect your site to AdSense"
              text="Add one piece of code to your site and adsense will take care of the rest, allowing you to grow your business."
            />
          </div>
        </div>
      </div>
    </center>
  );
};

export default Template1;
