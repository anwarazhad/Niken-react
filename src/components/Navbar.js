import React, { useState } from "react";
import { Link } from "react-router-dom";
import nikenLogo from "./nikenLogo.png";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        <img src={nikenLogo} />
                    </Link>
                </div>
            </nav>
        </>
    );
}
