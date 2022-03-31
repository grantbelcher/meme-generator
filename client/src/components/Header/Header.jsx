import React from 'react';
import styles from './Header.module.css';
import logo from './MJ.jpeg';

const { left, icon } = styles;

const Header = () => {
  return (
    <>
      <header>
        <div className={left}>
          <img className={icon} src={logo} alt="logo" />
          <h2>Meme Generator</h2>
        </div>
          <h4>Generate Dankness</h4>
      </header>
    </>
  )
}

export default Header;