import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Header.css'
import logo from "../assets/images/logo.png"

const Header = () =>  {

    const unchecked = () => {
        // When click on links's menue menue closed
        document.querySelector("#menue-checkbox").checked = false;
    }
    
    return (
            <nav id="nav">
                <div>
                    {/* Start Mobile Menue */}
                    <input type="checkbox" className="checkbox" id="menue-checkbox" hidden/>
                    <label className="hamburger-menue" htmlFor="menue-checkbox">
                        <label className="menue" htmlFor="menue-checkbox">
                            <div className="menue-line menue-line-1"></div>
                            <div className="menue-line menue-line-2"></div>
                            <div className="menue-line menue-line-3"></div>
                        </label>
                        <label className="menue-name" htmlFor="menue-checkbox">منو</label>
                    </label>
                    {/* End Mobile Menue */}

                    {/* Start Desktop Menue */}
                    <ul id="desktop-nav">
                        <li className="logo">
                            <img src={logo}/>
                        </li>
                        <li className="nav-item" onClick={unchecked}>
                            <Link to="/">خانه</Link>
                        </li >
                        <li className="nav-item" onClick={unchecked}>
                            <Link to="/menue/all">منوی کافه دورهمی</Link>
                        </li>
                        <li className="nav-item" onClick={unchecked}>
                            <Link to="/contact-us">ارتباط با کافه دورهمی</Link>
                        </li>
                        <li className="nav-item" onClick={unchecked}>
                            <Link to="/gallery">تصاویر کافه دورهمی</Link>
                        </li>
                    </ul>
                    {/* End Desktop Menue */}
                </div>
            </nav>
    )
}

export default Header