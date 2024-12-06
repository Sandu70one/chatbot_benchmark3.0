import React from "react";
import "./AiChat.css";

function AiChat({ content }) {
  return (
    <div className="ai-msg w-full gap-3 flex justify-start">
      <div className="oriel-pp flex items-center justify-center p-0.5 rounded-full">
        <img src="assets/logo-mini.svg" className="" />
      </div>
      <div className="msg items-start px-4 py-3 text-black">{content}</div>
    </div>
  );
}

export default AiChat;
