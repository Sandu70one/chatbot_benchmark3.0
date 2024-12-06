import React from 'react'
import "./ChatHeadBtn.css"

function ChatHeadBtn({text, icon}) {
  return (
    <div className="headBtn flex gap-2">
        <div className="icon">{icon}</div>
        <div className="text capitalize">{text}</div>
    </div>
  )
}

export default ChatHeadBtn