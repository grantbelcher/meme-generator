import React from 'react'
import styles from './Meme.css'
import piazza from './piazza.jpeg'

const { container, top, bottom } = styles

const Meme = ({ caption, meme } = props) => {

  let { topCaption, bottomCaption  } = caption;

  return (
    <div 
      className={container}
      style={{
        backgroundImage: `url(${meme.url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute'
      }}
    >
      <h2 className={top}>{topCaption}</h2>
      <h2 className={bottom}>{bottomCaption}</h2>
    </div>
  )
}



export default Meme;