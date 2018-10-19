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
            </div>
        </div>
    </nav>
</div>

export default Navbar;