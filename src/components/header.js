import React from "react";
import logo from '../assets/images/logo.svg'

const Header = ()=>{

    return(
        <header>
            <img className="logo" src={logo} alt="Logo"/>
        </header>
    )
}

export default Header