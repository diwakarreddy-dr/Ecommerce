import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from '../Login/Login';
import UserSidebar from '../UserSidebar/UserSidebar';
import CartSidebar from '../CartSidebar/CartSidebar';

const Header = ({ cartItems, updateQuantity, removeFromCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSidebar(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>WysCom</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <button className="icon-button cart-button" onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span className="cart-count">{cartItems.length}</span>
          </button>
          <button className="icon-button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          </button>
          <div className="menu-container">
            <button className="menu-button" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
            {isMenuOpen && (
              <nav className="dropdown-menu">
                <ul>
                  <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                  <li><Link to="/men" onClick={handleLinkClick}>Men</Link></li>
                  <li><Link to="/women" onClick={handleLinkClick}>Women</Link></li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
      {showSidebar && (
        <UserSidebar 
          onClose={toggleSidebar} 
          onLoginClick={toggleLogin}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      )}
      {showLogin && <Login onClose={toggleLogin} onLoginSuccess={handleLoginSuccess} />}
      {showCart && (
        <CartSidebar 
          onClose={toggleCart} 
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}
    </header>
  );
};

export default Header; 