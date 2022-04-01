import React from 'react';

const Button = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler}>Get a new meme image</button>
  )
}

export default Button;