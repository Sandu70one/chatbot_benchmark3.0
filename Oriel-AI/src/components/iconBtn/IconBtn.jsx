import React from "react";
import "./IconBtn.css";

function IconBtn({icon}) {
	return (
		<div className="act-btn p-2 rounded-lg cursor-pointer flex items-center justify-center">
			{icon}
		</div>
	);
}

export default IconBtn;
