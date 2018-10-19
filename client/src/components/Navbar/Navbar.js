import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => 
<div className="sticky headerContainer">
    <nav className="navbar">
        <div className="navbar-header">
            <div className='navbarLeft'>
                {/* <Link to="/"><img src={whiteLogo} alt="Minnesota Valley Transport" className="navbarLogo"></img></Link> */}
            </div>
            <div className="navbarCenter">
                <Link to="/" className="navbar-brand">Home</Link>
                {/* <Link to="/Community" className="navbar-brand">Community</Link> */}
                {/* <Link to="/About" className="navbar-brand">About</Link> */}
                {/* <Link to="/Gallery" className="navbar-brand">Gallery</Link> */}
                {/* <Link to="/DriversApplication" className="navbar-brand">Become a Driver</Link> */}
                {/* <Link to='/ContactUsPage' className="navbar-brand">Contact Us</Link> */}
                {/* <a className="navbarRight socialItems fb-ic ml-0" rel="noopener noreferrer" href="https://www.facebook.com/mnvalleytransport/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a> */}
                
                {/* From the Reach Project */}

                {/* <div class="nav-wrapper purple darken-3">
                    <div class="container">
                        <a href="/" class="brand-logo">REACH</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-bars"></i></a>
                        <ul class="right hide-on-med-and-down">
                        <li><a href="/">Compose Message</a></li>
                        <li><a href="/outbox">Pending Outbox</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div> */}
                {/* <ul class="sidenav" id="mobile-demo">
                    <li><a href="/">Compose Message</a></li>
                    <li><a href="/outbox">Pending Outbox</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Logout</a></li>
                </ul> */}
            </div>
        </div>
    </nav>
</div>

export default Navbar;