import React from 'react'
import './button.css'

const Button = ({value, onClick, color }) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} >
        {value}
      </button>
    </div>
  )
}

export default Button
