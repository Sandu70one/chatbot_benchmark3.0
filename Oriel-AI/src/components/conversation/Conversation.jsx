import React from "react";
import UserChat from "../userChat/UserChat";
import AiChat from "../aiChat/AiChat";

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
            <div className="head">
                <div className="title">{title}</div>
                <div className="summary">{summary}</div>
            </div>

            <div className="body flex flex-col">
                {testChat.map((chat, index) => {
                        {chat.user == "human" ? <UserChat content="hi" /> : <AiChat content="hi" />}
                })}
            </div>
        </div>
    );
}

export default Conversation;
