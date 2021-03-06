import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.scss"
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import logo from "./logo.png"
import Button from '../Button/Button'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 768) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className='navbarT container-fluid py-3'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img className='' src={logo} alt="logo.png" /><span className='d-none d-sm-block'>KITCHEN</span></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FA icon={click ? 'times': 'bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/product" className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contacts</Link>
                    </li>                  
                </ul>                
                {button && <Button buttonStyle="btn--primary"><FA icon="fa-magnifying-glass" />Search</Button>}
                </div>
            </nav>

        </div>
    )
}

export default Navbar