import React from "react";
import Letstart from "../components/Letstart";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import "./Guide.css";
import Item from "./Item";
import ReactPlayer from "react-player";
import Carousel from "react-elastic-carousel";
import FaqItem from "../components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 2 },
  { width: 1308, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

const faqsData = [
  {
    id: 0,
    questionText: "What is the StartUP Builder?",
    answerText:
      "The StartUP Builder is a website creation, advertisement & investment platform that allows you to build a business with no coding or technical knowledge. Users are able to visually click, drag and drop content to build a home page and additional pages of their website all while being able to access the full power, flexibility and tools of WordPress.",
  },
  {
    id: 1,
    questionText: "How is the StartUp Builder different from other Builders?",
    answerText:
      "The StartUp Builder allows you the freedom to grow as your business grows. is different because it allows the full flexibility of WordPress to remain available, even though we are providing a simplified building experience.",
  },
  {
    id: 2,
    questionText: "Why is advertising important?",
    answerText:
      "Its important because it can drive business growth. Advertising works to amplify your small business marketing and helps you reach the right audience with positive, targeted messaging that converts potential customers into paying customers.",
  },
  {
    id: 3,
    questionText: "How do I get started with Website Builder?",
    answerText:
      "Website builder makes it easy to get started with our Website Builder. Simply choose the plan that is right for your website needs, and then create or add your existing domain.",
  },
];

const Guide = () => {
  return (
    <>
      <div className="row align-items-center help container-fluid ">
        <div className="container-fluid  ">
          <Flip bottom>
            <Letstart
              title="24/7 Support & Guidance"
              content="Follow the simple steps to create your own online Presence. "
            />
          </Flip>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="h1">Get all this and more.</p>
      <div>
        <Fade bottom>
          <Carousel breakPoints={breakPoints}>
            <Item> Drag-n-Drop Editing</Item>
            <Item>Unlimited Investors</Item>
            <Item>AdSense Monetization</Item>
            <Item>Quick-Start Smart Templates</Item>
            <Item>24/7 Support & GUIDANCE</Item>
            <Item>Faster & Easier</Item>
            <Item>Mobile-Ready Templates</Item>
          </Carousel>
        </Fade>
      </div>
      <p className="info">
        Whether you are starting a blog, promoting your business, or need
        Investor for your business, StartUp Builder helps you create websites
        faster and easier than traditional website tools. Follow the tutorials &
        start building your business.
      </p>

      <div className="row video ">
        <div className="col-12 col-md-6  ">
          <p className="h1">
            Build a website that looks great on every device.{" "}
          </p>

          <p className="vdo">
            <ol type="i">
              <li>Click on website builder page.</li>
              <li>Decide on the purpose of your website</li>
              <li>
                {" "}
                Website builder comes with a single theme with different layout
                options. Choose a custom domain
              </li>
              <li>
                All website builders allow for some type of drag-n-drop design
                capability, and most builders provide templates and layouts to
                choose from.
              </li>
              <li>Edit, add information related to your website.</li>
              <li>Map out your site</li>
            </ol>
          </p>
        </div>
        <div className="col-12 col-md-6" style={{ marginTop: "100px" }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=iM9m-iuesGY" />
        </div>
      </div>
      <div className="row video ">
        <div className="col-12 col-md-6" style={{ marginTop: "100px" }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=mpfyfsVqE80" />
        </div>

        <div className="col-12 col-md-6  ">
          <p className="h1">7 Steps to Add AdSense to Your Website -</p>

          <p className="vdo">
            <ol type="i">
              <li>Set up your site.</li>
              <li> Make sure your site is in compliance</li>
              <li>Apply to AdSense</li>
              <li>Configure your ads</li>
              <li>Copy and paste the AdSense code onto your site.</li>
              <li>Update your privacy policy</li>
              <li>Verify your address</li>
            </ol>
          </p>
        </div>
      </div>
      <div className="row video ">
        <div className="col-12 col-md-6  ">
          <p className="h1">How to Get Investors for a Startup </p>

          <p className="vdo">
            <ol type="i">
              <li>Create a profile on StartUp Builder</li>
              <li>Click on companies banner & fill the form.</li>
              <li>Prepare a record of investors to share your ideas with</li>
              <li>Brush up your networking skills</li>
              <li> Have a classy intro</li>
              <li>Tell them why they should invest in your startup</li>
              <li>Wait for the final result.</li>
            </ol>
          </p>
        </div>
        <div className="col-12 col-md-6" style={{ marginTop: "100px" }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=WqyOvWxhcr0" />
        </div>
      </div>

      <div className="app-container">
        <div className="faqs-card-container">
          <h1 className="heading">FAQ’s</h1>
          <ul className="faqs-list-container">
            {faqsData.map((eachFaq) => (
              <FaqItem key={eachFaq.id} faqData={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Guide;
