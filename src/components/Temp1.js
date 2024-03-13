import React from "react";
import TempBox1 from "./TempBox1";
import "./Temp.css";
import one from "../assest/1.jpeg";
import two from "../assest/2.jpeg";
import three from "../assest/3.jpeg";

const Temp1 = (props) => {
  return (
    <center>
      <div>
        <div>
          <h1 className="title1">{props.title}</h1>
          <p className="desc1">{props.desc}</p>
        </div>
        <div class="row justify-content-evenly tempboxm ">
          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={one}
              name="Earn money from your site"
              text="Millions of advertisers compete for your ad space. That means more money, more relevant ads, and more ad spaces filled"
            />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={two}
              name="Ads optimized for mobile"
              text="Adsense can optimize the size of your ad units to automatically fit desktop or mobile, meaning there's more chance they'll be seen and clicked."
            />
          </div>

          <div className=" tempbox col-12 col-xl-4">
            <TempBox1
              img={three}
              name="Save time"
              text="Add one piece of code to your site and Adsense will automatically show ads tailored to your site's layout, saving you time making changes to ad code."
            />
          </div>
        </div>
      </div>
    </center>
  );
};

export default Temp1;
