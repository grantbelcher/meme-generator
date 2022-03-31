import React from 'react'
import styles from './Meme.css'
import piazza from './piazza.jpeg'

const { container } = styles

const Meme = ({ caption } = props) => {
  let { topCaption, bottomCaption  } = caption;
  return (
    <div 
      className={container}
      style={{
        backgroundImage: `url(${piazza})`,
        // objectFit: 'fill',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute'
      }}
    >
      <div>{topCaption}</div>
      <div>{bottomCaption}</div>
    </div>
  )
}



export default Meme;