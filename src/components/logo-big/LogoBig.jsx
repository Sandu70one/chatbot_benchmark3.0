import React from "react";
import "./LogoBig.css";

function LogoBig() {
	return (
		<div className="logo-big">
			<div className="bg-circle"></div>
			<img src="/assets/statue.png" alt="logo" className="face" />
		</div>
	);
}

export default LogoBig;
