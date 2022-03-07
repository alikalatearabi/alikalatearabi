import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";

const Header = () => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        console.log('hi');
    }
    return (
        <>
            <div id='header'>
                <div className='main-header'>
                    <div className='header-download'>
                        <div className='header-social'>
                            <a href="https://www.instagram.com/saleminaa/"><FaInstagram /></a>
                        </div>
                        <a href={require("../saleminaa.apk")}><p>دانلود نرم افزار</p></a>
                    </div>
                    <ul className='header-list-wrapper'>
                        <li><Link to="/policy">حریم خصوصی کاربران</Link></li>
                        <li><Link to="/aboutus">درباره ما</Link></li>
                        <li><Link to="/Statement">بیانیه استقلال سالمینا</Link></li>
                        <li><Link to="/blogs">وبلاگ</Link></li>
                        <li><Link to="/grade">رتبه بندی</Link></li>
                        <li><Link to="/">خانه</Link></li>
                    </ul>
                </div>
                <div className={`navbar-toggle-wrapper`} onClick={toggle}>
                    <div className={open ? 'open-navbar-toggle' : 'close-navbar-toggle'}></div>
                    <div className={open ? 'open-navbar-toggle' : 'close-navbar-toggle'}></div>
                    <div className={open ? 'open-navbar-toggle' : 'close-navbar-toggle'}></div>
                </div>
                <div className={`mobile-menu ${open ? 'show' : 'hide'}`} >
                    <ul className='mobile-header-list-wrapper'>
                        <li><Link to="/policy" onClick={toggle}>حریم خصوصی کاربران</Link></li>
                        <li><Link to="/aboutus" onClick={toggle}>درباره ما</Link></li>
                        <li><Link to="/Statement" onClick={toggle}>بیانیه استقلال سالمینا</Link></li>
                        <li><Link to="/blogs" onClick={toggle}>وبلاگ</Link></li>
                        <li><Link to="/grade" onClick={toggle}>رتبه بندی</Link></li>
                        <li><Link to="/" onClick={toggle}>خانه</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;