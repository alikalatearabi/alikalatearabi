import React, { Component } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class Contact extends Component {
    render() {
        return (
            <div id='contact-us'>
            <img src={require('../image/contact-us.png')} alt="" />
            <div className='contact-us-text'>
                <h2>تماس با ما</h2>
                <div className='contact-us-list'>
                    <FaMapMarkedAlt />
                    <p>تهران خیابان ونک جنب پارک آرارات پلاک 49 واحد 3</p>
                </div>
                <div className='contact-us-list'>
                    <FaPhoneAlt />
                    <p>09121234567</p>
                </div>
                <div className='contact-us-list'>
                    <FaInstagram />
                    <p>saleminaa</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;