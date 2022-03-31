import React from 'react';
import Caption from '../Caption/Caption.jsx'

const Inputs = ({ handleChange } = props) => {

  return (
    <form>
      <Caption label="Top Caption" handleChange={handleChange} />
      <Caption label="Bottom Caption" handleChange={handleChange} />
    </form>
  )
}


export default Inputs