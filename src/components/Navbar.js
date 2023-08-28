import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Modal from "./Modal";
import './Navbar.css';
import './Button.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  function openLoginWindow(){
    setOpenModal(true);
  }

  function closeWindow() {
    closeMobileMenu();
  }

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" onClick={closeMobileMenu}>
                    <img className="logo" src='../../public/images/green-dragon.jpg' alt="logo" />
                </Link>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    The Green Dragon Inn
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quests' className='nav-links' onClick={closeMobileMenu}>
                            Quests
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-links-mobile' onClick={() => {openLoginWindow(); closeWindow();}} >
                            Login
                        </button>
                        {openModal && <Modal closeModal={setOpenModal} />}
                    </li>
                </ul>
                {button && <button className='btn' onClick={() => {openLoginWindow(); closeWindow();}} >Login</button>}
                {openModal && <Modal closeModal={setOpenModal} />}
            </div>
        </nav>
    </>
  )
}

export default Navbar;