import React from 'react';

const ReactPopUp = ({ toggleMenu }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            toggleMenu();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <ul className="nav-links popup-nav">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#about" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#cert" onClick={toggleMenu}>Certificates</a></li>
                <li><a href="#exp" onClick={toggleMenu}>Experience</a></li>
                <li><a href="#portfolio" onClick={toggleMenu}>Porojects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    );
};

export default ReactPopUp;
