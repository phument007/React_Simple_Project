import React from "react";
import './index.css'

const Navbar:React.FC = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">React Foot</a>
            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;