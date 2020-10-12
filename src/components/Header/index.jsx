import React from 'react';
import logo from '../../assets/pic.JPG';

function Header() {
  return (
    <header>
      <nav>
        <h2>
          <a href="http://www.facebook.com" target="blank">
            facebook
          </a>
        </h2>
        <div className="user">
          <span>Meu Perfil</span>
          <img src={logo} className="avatar" alt="Profile" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
