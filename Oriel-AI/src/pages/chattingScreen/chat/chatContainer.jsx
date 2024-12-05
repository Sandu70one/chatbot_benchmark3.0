import React from "react";
import { ChatInterface } from "./chatInterface";

export const ChatContainer = () => {
  return (
    <div
      className="chat-container p-4 max-h-[600px] overflow-y-auto"
      role="region"
      aria-label="Chat interface"
      style={{ scrollBehavior: "smooth" }}
    >
      <ChatInterface />
    </div>
  );
};
