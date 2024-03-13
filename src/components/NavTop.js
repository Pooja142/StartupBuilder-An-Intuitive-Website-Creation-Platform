import React from 'react'
import './navtop.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LOGO from "../assest/logo.jpg";
import { Link } from '@mui/material';

function NavTop() {
  return (
    <div>
        <div className="top-bar">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                    <div className="logo">
                        <Link to="index.html">
                           <img src={LOGO} width="120px"></img>

                        </Link>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 d-none d-lg-block">
                    <div className="row">
                        <div className="col-4">
                            <div className="top-bar-item">
                                <div className="top-bar-icon">
                                <AddIcCallIcon/>
                                </div>
                                <div className="top-bar-text">
                                    <h3>Call Us</h3>
                                    <p>+91 8594002419</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="top-bar-item">
                                <div className="top-bar-icon">
                                    <AttachEmailIcon/>
                                </div>
                                <div className="top-bar-text">
                                    <h3>Email Us</h3>

                                    <p className="m"> <a className="c" href="mailto:startGrow@gmail.com">startGrow@gmail.com</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="top-bar-item">
                                <div className="social" >
                                    <Link className="btn" to=""> <TwitterIcon /></Link>
                                    <Link className="btn" to=""> <FacebookIcon /></Link>
                                    <Link className="btn" to=""> <InstagramIcon /></Link>
                                    <Link className="btn" to=""> <LinkedInIcon /></Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default NavTop