import React from 'react';
import styles from './Header.module.css';

import Test from '../Test.jsx'

const { header } = styles

const Header = () => {
  return (
    <>
      <h1 className={header}>HEADER</h1>
      <div>Testing global styles level 1</div>
      <Test />
    </>
  )
}

export default Header;