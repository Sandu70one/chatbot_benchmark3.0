import React from 'react'
import './gradientLabel.css'

function GradientLabel(props) {
  return (
    <div className="btn-container flex normal flex-row gap-2.5 p-3 rounded-xl">
        <div className="icons flex flex-row">
            <div className="circ circ-1"></div>
            <div className="circ circ-2"></div>
            <div className="circ circ-3"></div>
        </div>
        <div className="text text-xs">{props.children}</div>
    </div>
  )
}

export default GradientLabel