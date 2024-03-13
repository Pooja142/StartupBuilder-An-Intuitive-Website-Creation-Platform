import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import Website from "./pages/Website";
import Ads from "./pages/Ads";
import Business from "./pages/Business";
import Home from "./pages/Home";
import Foter from "./components/Foter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavTop from "./components/NavTop";
import Authen from "./pages/Authen";
import Create from "./pages/Create";
import Guide from "./pages/Guide";
import Templates from "./pages/Templates";
import FormComponent from "./components/steps/FormComponent";
import ImageRender from "./pages/Images/ImageRender";
import ImageRender2 from "./pages/Images/ImageRander2";
import ImageRender3 from "./pages/Images/ImageRander3";
import ImageRender4 from "./pages/Images/ImageRander4";
import ImageRender5 from "./pages/Images/ImageRender5";
import ImageRender6 from "./pages/Images/ImageRander6";
import ImageRender7 from "./pages/Images/ImageRander7";
import ImageRender8 from "./pages/Images/ImageRander8";
import ImageRender9 from "./pages/Images/ImageRender9";
import ImageRander10 from "./pages/Images/ImageRander10";
import ImageRander11 from "./pages/Images/ImageRander11";
import ImageRander12 from "./pages/Images/ImageRander12";
import ImageRender13 from "./pages/Images/ImageRender13";
import ImageRender14 from "./pages/Images/ImageRender14";
import ImageRender15 from "./pages/Images/ImageRender15";
import ImageRander16 from "./pages/Images/ImageRander16";
import ImageRender17 from "./pages/Images/ImageRander17";
import ImageRender18 from "./pages/Images/ImageRander18";
import ImageRender19 from "./pages/Images/ImageRander19";
import ImageRender20 from "./pages/Images/ImageRander20";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Home1 from "./Home1";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <NavTop />
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/Website" component={Website} />
          <Route exact path="/Ads" component={Ads} />
          <Route exact path="/Business" component={Business} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/" component={Authen} />
          <Route exact path="/templates" component={Templates} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/form" component={FormComponent} />
          <Route exact path="/5" component={ImageRender} />
          <Route exact path="/10" component={ImageRender2} />
          <Route exact path="/15" component={ImageRender3} />
          <Route exact path="/20" component={ImageRender4} />
          <Route exact path="/3" component={ImageRender5} />
          <Route exact path="/8" component={ImageRender6} />
          <Route exact path="/13" component={ImageRender7} />
          <Route exact path="/18" component={ImageRender8} />
          <Route exact path="/4" component={ImageRender9} />
          <Route exact path="/9" component={ImageRander10} />
          <Route exact path="/14" component={ImageRander11} />
          <Route exact path="/19" component={ImageRander12} />
          <Route exact path="/1" component={ImageRender13} />
          <Route exact path="/6" component={ImageRender14} />
          <Route exact path="/11" component={ImageRender15} />
          <Route exact path="/16" component={ImageRander16} />
          <Route exact path="/2" component={ImageRender17} />
          <Route exact path="/7" component={ImageRender18} />
          <Route exact path="/12" component={ImageRender19} />
          <Route exact path="/17" component={ImageRender20} />
          <Route exact path="/lets" component={Home1}></Route>
          <Route exact path="/editor/:pageId" component={Editor}></Route>
          <Route exact path="/Guide" component={Guide}></Route>
          <Route component={NotFound} />
        </Switch>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Foter />
      </div>
    </Router>
  );
}

export default App;
