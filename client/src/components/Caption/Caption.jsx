import React from 'react';

const Caption = ({ label, handleChange } = props) => {

  return (
    <label>
      {label}:
      <input type="text" data-label={label} onChange={handleChange}/>
    </label>
  )
}

export default Caption;