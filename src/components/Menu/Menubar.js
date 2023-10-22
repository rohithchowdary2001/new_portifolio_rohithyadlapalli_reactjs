import React, { useState, useEffect } from 'react';
import './Menubarr.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Menubar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check on mount
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="app">
            <header>
                {isMobile ? (
                    <MobileMenu />
                ) : (
                    <div className='menucontainer'>
                        <Link to="/" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Home</div>
                        </Link>
                        <Link to="/education" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Education</div>
                        </Link>
                        <Link to="/job-experience" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Job Experience</div>
                        </Link>
                        <Link to="/certification" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Certifications</div>
                        </Link>
                        <Link to="/social-media" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Achievements</div>
                        </Link>
                        <Link to="/skills" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Skills</div>
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mobile-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            {isOpen && (
                <div className="overlay" onClick={toggleMenu}>
                    <div className='menucontainer' >
                        <Link to="/" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Home</div>
                        </Link>
                        <Link to="/education" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Education</div>
                        </Link>
                        <Link to="/job-experience" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Job Experience</div>
                        </Link>
                        <Link to="/certification" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Certifications</div>
                        </Link>
                        <Link to="/social-media" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Achievements</div>
                        </Link>
                        <Link to="/skills" style={{ textDecoration: "none", color: 'black' }}>
                            <div className='menu-items'>Skills</div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menubar;
