import React from 'react';
import styles from './App.module.css';
import piazza from './piazza.jpeg';
import Header from './components/Header/Header.jsx';

const { container } = styles;


function App() {
  return (
    <div className={container}>
      <Header />
      <img src={piazza} alt="" />
    </div>
  );
}

export default App;
