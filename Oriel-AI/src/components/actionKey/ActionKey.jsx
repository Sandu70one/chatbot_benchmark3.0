import React from "react";
import "./ActionKey.css";


function ActionKey({text, keyIcon, state}) {
	return (
		<div className="action-btn valid flex items-center gap-2 rounded-xl px-2 py-1">
			<div className={state == "active" ? "action active capitalize text-xs py-2" : "action capitalize text-xs py-2" } >{text}</div>
			<div className={state=="active"? "key-icon active p-1 rounded-md" : "key-icon p-1 rounded-md"}>
				{keyIcon != null ? keyIcon : 
				<div className="esc">
					ESC
				</div>
			}
			</div>
		</div>
	);
}

export default ActionKey;
