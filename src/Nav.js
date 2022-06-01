import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"


function Nav() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img onClick={() => navigate("/")} className='nav__logo' src="/images/logo.png" alt="netflix-logo" />
                <img onClick={() => navigate("/profile")} className='nav__avatar' src="/images/user-default.png" alt="user-image" />
            </div>
        </div>
    )
}

export default Nav