import React from "react";
import UserChat from "../userChat/UserChat";
import AiChat from "../aiChat/AiChat";
import "./Conversation.css";

const testChat = [
  {
    user: "human",
    message: "Tell me a joke",
  },
  {
    user: "ai",
    message: `Why don't skelleton fight each other?
         Because they don't have the guts!`,
  },
  {
    user: "human",
    message: "🤣😂",
  },
  {
    user: "ai",
    message: `Do you want to hear another one?`,
  },
  {
    user: "human",
    message: "Yeah i want to hear another one",
  },
  {
    user: "ai",
    state: "typing",
    message: `Do you want to hear another one?`,
  },
  {
    user: "ai",
    state: "typing",
  },
];

function Conversation({ title, summary }) {
  return (
    <div className="conversation flex-1 h-full w-full">
      <div className="head flex flex-col">
        <div className="title text-2xl font-bold capitalize">{title}</div>
        <div className="summary text-base">{summary}</div>
      </div>

      <div className="body pt-20 flex gap-4 flex-col w-full">
        {testChat.map((chat, index) => {
          if (chat.user === "human") {
            return <UserChat key={index} content={chat.message} />;
          } else {
            return <AiChat key={index} content={chat.message} />;
          }
        })}
        {testChat.map((chat, index) => {
          if (chat.user === "human") {
            return <UserChat key={index} content={chat.message} />;
          } else {
            return <AiChat key={index} content={chat.message} />;
          }
        })}
      </div>
    </div>
  );
}

export default Conversation;
