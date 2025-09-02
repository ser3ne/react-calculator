import './style/display.css'
import { useState } from 'react'

function Display({ value }) {


  return (
    <div className="display-container">
      {value}
    </div>
  )

}

export default Display