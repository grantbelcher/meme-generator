import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
// import piazza from './piazza.jpeg';

import Header from './components/Header/Header.jsx';
import Inputs from './components/Inputs/Inputs.jsx';
import Button from './components/Button/Button.jsx';
import Meme from './components/Meme/Meme.jsx';

const { container } = styles;


function App() {

  let [topCaption, setTopCaption] = useState('')
  let [bottomCaption, setBottomCaption] = useState('')

  const [memeList, setMemeList] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeList(data.data.memes))
  },[])

  console.log(memeList, 'look here')

  const handleChange = (event) => {
    let label = event.target.getAttribute('data-label')
    if (label === 'Top Caption') {
      setTopCaption(event.target.value)
    }
    if (label === 'Bottom Caption') {
      setBottomCaption(event.target.value)
    }
  }
  
  return (
    <div className={container}>
      <Header />
      <Inputs handleChange={handleChange} />
      <Button />
      <Meme caption={{ topCaption, bottomCaption }}/>
      {/* <img src={piazza} alt="" /> */}
    </div>
  );
}

export default App;
