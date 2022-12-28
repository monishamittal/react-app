import React, { Component } from 'react'
import { FaFacebook, FaEnvelope, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <FaFacebook size="2em" />&nbsp;&nbsp;
                <FaLinkedin size="2em" />&nbsp;&nbsp;
                <FaTwitter size="2em" />&nbsp;&nbsp;
                <FaYoutube size="2em" />&nbsp;&nbsp;
                <FaEnvelope size="2em" />
            </div>
        )
    }
}
export default Footer