import React from "react";
import "./chat.css";
import LogoBig from "../../components/logo-big/LogoBig";
import PromptField from "../../components/promptField/PromptField";
import DropDown from "../../components/dropDown/DropDown";

function Chat() {
	return (
		<div className="single-page p-3 flex flex-col justify-between items-start">
			<div className="dropdown ml-8">
                <DropDown />
            </div>
			<div className="container flex flex-col gap-y-10 items-center">
				<LogoBig />
				<div className="welcome-text gap-y-2 mt-4 flex flex-col items-center text-center">
					<div className="title text-3xl flex gap-2 font-bold">
						Hello,
						<span className="usrName capitalize">naleeka</span>
					</div>
					<div className="subtitle text-xl">
						Let’s get started, ask me anything
					</div>
					<PromptField />
				</div>
			</div>
				<p className="accuracy-text text-center w-full text-sm mt-32">
					Use Oriel as a guide, but confirm facts independently for
					accuracy.
				</p>
		</div>
	);
}

export default Chat;
