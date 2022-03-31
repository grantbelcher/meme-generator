import React from 'react';
import styles from './App.module.css';
import piazza from './piazza.jpeg';
import Header from './components/Header/Header.jsx';



function App() {
  return (
    <div>
      <Header />
      <img src={piazza} alt="" />
    </div>
  );
}

export default App;
