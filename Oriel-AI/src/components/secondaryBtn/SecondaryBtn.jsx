import React from 'react'
import './SecondaryBtn.css'

function SecondaryBtn({text, icon}) {
  return (
    <button className="sec-btn capitalize flex text-base items-center gap-2 py-2 px-3">
        <div className="text">{text}</div>
        <div className="icon">{icon}</div>
    </button>
  )
}

export default SecondaryBtn