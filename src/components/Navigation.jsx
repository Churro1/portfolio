import { useNavigate } from "react-router-dom";
import React from 'react';
import '../styles/navigation.css';

function Navigation() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav>
            {/* <div  className="nav-title">
                <h1>My Portfolio</h1>
            </div> */}

            <div className="nav-buttons" >
                <button onClick={() => handleNavigation("/")}>Home</button>
                <button onClick={() => handleNavigation("/work")}>Work</button>
                <button onClick={() => handleNavigation("/about")}>About Me</button>
                <button onClick={() => handleNavigation("/contact")}>Contact Me</button>
            </div>

        </nav>
    );
}

export default Navigation;