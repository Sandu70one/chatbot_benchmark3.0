import React from "react";
import "./launchingScreen.css";
import GradientLabel from "../../components/gradient-btn-1/gradientLabel";
import SecondaryBtn from "../../components/secondaryBtn/SecondaryBtn";
import { Download } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";

function LaunchingScreen() {
	return (
		<div className="launch-container single-page flex flex-col items-center justify-center">
			<div className="bg-circle-top"></div>
			<div className="content gap-y-6 flex flex-col items-center pb-24">
				<GradientLabel>Trusted by 200,000+ people</GradientLabel>
				<img
					className="logo mt-2"
					src="src/assets/logo-black-bg.svg"
					alt="Oriel logo"
				/>
				<div className="title text-4xl mt-9">
					Your Reliable Partner for Intelligent Assistance
				</div>
				<div className="sub-title text-base">
					Oriel offers reliable, efficient support for your
					professional needs, delivering intelligent solutions and
					real-time insights to boost productivity
				</div>
				<div className="ctas flex font-medium gap-4 mt-2">
					<div className="sec-btn">
						<SecondaryBtn
							text="Download desktop app"
							icon={<Download size={16} />}
						/>
					</div>
					<div className="pri-btn">
						<PrimaryBtn
							text="get started"
							icon={<MoveUpRight size={16} />}
						/>
					</div>
				</div>
			</div>
      <div className="bg-circle-bottom">
        <img src="src/assets/circ-bg-bottom.png" alt="" />
      </div>
		</div>
	);
}

export default LaunchingScreen;
