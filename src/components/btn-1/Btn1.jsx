import React from 'react'
import './Btn1.css'
function Btn1({text, icon}) {
  return (
    <div className="btn-container p-2 rounded-lg flex gap-2 items-center cursor-pointer">
      {icon ?
        <div className="icon">{icon}</div>
      : null  
      }
      <div className="text font-light"> {text} </div>
    </div>
  )
}

export default Btn1