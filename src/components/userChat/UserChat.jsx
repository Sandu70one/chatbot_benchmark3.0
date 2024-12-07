import React from "react";
import "./UserChat.css";
function UserChat({ content }) {
	return (
		<div className="userMsg  text-right w-full flex justify-end">
			<div className="msg px-4 w-full py-3 text-black w-full">{content}</div>
		</div>
	);
}

export default UserChat;
