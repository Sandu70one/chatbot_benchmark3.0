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
];

function Conversation({ title, summary }) {
  return (
    <div className="conversation">
      <div className="head flex flex-col">
        <div className="title text-2xl font-bold capitalize">{title}</div>
        <div className="summary text-base">{summary}</div>
      </div>

      <div className="body pt-20 flex flex-col w-full items-start mx-0">
        <UserChat content={testChat[0].message} />
        <AiChat content={testChat[1].message} />
        <UserChat content={testChat[2].message} />
        <AiChat content={testChat[3].message} />
        <UserChat content={testChat[4].message} />
        <AiChat content={testChat[5].message} />
      </div>
    </div>
  );
}

export default Conversation;
