import { useNavigate } from "react-router-dom";
import React from 'react';

function Navigation() {
    const navigate = useNavigate();
    
    const handleNavigation = (path) => {
        navigate(path);
    };
    
    return (
        <nav className="navigation">
            <button onClick={() => handleNavigation("/")}>Home</button>
            <button onClick={() => handleNavigation("/contact")}>Contact Me</button>
        </nav>
    );
    }

export default Navigation;