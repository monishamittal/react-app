import React, { Component } from 'react'
import './Header.css';
import gym from './images/gym-logo.jpg' 
import { FaHamburger } from 'react-icons/fa';
// import Nav from './nav'

class Header extends Component {
    render() {
        return (
<nav className="main-nav">
    <div className="logo">
        <img src={gym}></img>
    </div>
            <div className="menu-link">
                <ul>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <div className='hamburger-menu'>
<a href="#"><FaHamburger/></a>
                </div>
            </div>
            <div className="register">
                <button>Register Now</button>
            </div>
</nav>
        )
    }

}
export default Header