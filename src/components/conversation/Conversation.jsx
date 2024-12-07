import React from "react";
import UserChat from "../userChat/UserChat";
import AiChat from "../aiChat/AiChat";
import "./Conversation.css";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";

const testChat = [
  {
      user: "human",
      message: "Tell me a joke",
  },
  {
      user: "ai",
      message: `Why don't skeletons fight each other? Because they don't have the guts!`,
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
      message: "Yeah, I want to hear another one",
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
  {
      user: "human",
      message: "Sure, go ahead!",
  },
  {
      user: "ai",
      message: `Why don't scientists trust atoms? Because they make up everything!`,
  },
  {
      user: "human",
      message: "Haha, that's a good one!",
  },
  {
      user: "ai",
      message: `I'm glad you liked it!`,
  },
  {
      user: "human",
      message: "Tell me another one.",
  },
  {
      user: "ai",
      message: `Why did the scarecrow win an award? Because he was outstanding in his field!`,
  },
  {
      user: "human",
      message: "😂 That's hilarious!",
  },
  {
      user: "ai",
      message: `Do you want to hear more jokes?`,
  },
  {
      user: "human",
      message: "Yes, keep them coming!",
  },
  {
      user: "ai",
      message: `Why don't programmers like nature? It has too many bugs.`,
  },
  {
      user: "human",
      message: "As a programmer, I can relate to that! 😂",
  },
  {
      user: "ai",
      state: "typing",
      message: "typing ..."
  },
];

function Conversation({ title, summary }) {
	return (
		<div className="conversation flex-1 h-full w-full">
			<div className="head flex flex-col">
				<div className="title text-2xl font-bold capitalize">
					{title}
				</div>
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
			</div>
		</div>
	);
}

export default Conversation;
