import React from "react";
import "./PrimaryBtn.css";

function PrimaryBtn({ text, icon }) {
	return (
		<button
			className="capitalize flex text-base items-center gap-2 px-3 pri-btn">
				<div className="text">{text}</div>
				<div className="icon">{icon}</div>
		</button>
	);
}

export default PrimaryBtn;
