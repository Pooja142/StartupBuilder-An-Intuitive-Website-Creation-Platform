import React from 'react'
import "./foter.css"
import LOGO from "../assest/logo.jpg";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';


function Foter() {
    return (
        <>

            <div className='container-fluid foter row'>
                <div className='col-12 col-md-2 '>

                    <div className='ml'>
                    <Link className='text-white-nav' to="/"> <img src={LOGO} height="150px" width="250px" style={{ paddingTop: "5px" }} /></Link>
                    
                    </div>

                </div>
                <div className='col-12 col-md-2 '>
                    <table>
                        <tr align="left">
                            <th style={{ paddingBottom: "10px", borderBottom: "2px solid green" }}>PRODUCTS</th>
                        </tr>
                        <tr >
                            <td align='left' style={{ paddingTop: "10px" }}>Web format</td>
                        </tr>
                        <tr >
                            <td align='left'>Invest</td>
                        </tr >
                        <tr >

                            <td align='left'>Get  Advertiser</td>
                        </tr >

                    </table>
                </div>
                <div className='col-12 col-md-2'>
                    <table>
                        <tr align="left">
                            <th style={{ paddingBottom: "10px", borderBottom: "2px solid green" }}>USEFUL-LINK</th>
                        </tr>
                        <tr>
                            <td align='left' style={{ paddingTop: "10px" }} >Become a Advertiser</td>
                        </tr>
                        <tr>
                            <td align='left'>FAQ</td>
                        </tr>
                    </table>
                </div>
                <div className='col-12 col-md-2 fl' >
                    <table>
                        <tr align="left">
                            <th style={{ paddingBottom: "10px", borderBottom: "2px solid green" }}>CONTACT US</th>
                        </tr>
                        <tr>
                            <td align='left' style={{ paddingTop: "10px" }}><MailOutlineIcon /> : startGrow@gmail.com</td>
                        </tr>
                        <tr>
                            <td align='left'><LocalPhoneSharpIcon /> : xxxx xxxx</td>
                        </tr>
                    </table>
                </div>
                <div className='col-12 col-md-2  fl'  >
                    <table>
                        <tr align="left">
                            <th style={{ paddingBottom: "10px", borderBottom: "2px solid green" }}>ABOUT US </th>
                        </tr>
                        <tr>
                            <td align='left' style={{ paddingTop: "10px" }}>About us </td>
                        </tr>
                        <td align='left'>Our team</td>

                    </table>
                </div>
                <div className='social-media col-12 col-md-6 ' >
                    <FacebookIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                    <PinterestIcon />

                </div>
                <p style={{ paddingTop: "10px" }}>@2022 copyright :-Group 3</p>
            </div>

        </>
    )
}

export default Foter