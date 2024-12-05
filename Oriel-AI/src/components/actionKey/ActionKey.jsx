import React from "react";
import "./ActionKey.css";

function ActionKey({text, keyIcon}) {
	return (
		<div className="action-btn flex items-center gap-2 rounded-xl px-2 py-1">
			<div className="action capitalize text-xs py-2 ">{text}</div>
			<div className="key-icon p-1 rounded-md">
				{keyIcon}
			</div>
		</div>
	);
}

export default ActionKey;
