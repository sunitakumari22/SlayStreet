import React, { useState } from 'react';

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const openNav = () => setNavOpen(true);
    const closeNav = () => setNavOpen(false);

    return (
        <div>
            <div className="header_section haeder_main">
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <div id="mySidenav" className={`sidenav ${navOpen ? 'open' : ''}`} style={{ width: navOpen ? '250px' : '0' }}>
                            <button className="closebtn" onClick={closeNav}>&times;</button>
                            <a href="/home">Home</a>
                            <a href="/computers">Computers</a>
                            <a href="/mans-clothes">Men's Clothes</a>
                            <a href="/womans-clothes">Women's Clothes</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <span 
                            style={{ fontSize: '30px', cursor: 'pointer', color: '#fff' }}
                            onClick={openNav}
                        >
                            <img src="images/toggle-icon.png" alt="Menu" />
                        </span>
                        <a className="navbar-brand" href="/home">
                            <img src="images/logo.png" alt="Logo" />
                        </a>
                        <form className="form-inline">
                            <div className="login_text">
                                <ul>
                                    <li><a href="#"><img src="images/user-icon.png" alt="Icon1" /></a></li>
                                    <li><a href="#"><img src="images/trolly-icon.png" alt="Icon2" /></a></li>
                                    <li><a href="#"><img src="images/search-icon.png" alt="Icon3" /></a></li>
                                </ul>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>

            {/* Optional: Add some CSS in your CSS file to show/hide side nav */}
          
        </div>
    );
}
