import React, { useEffect, useState } from "react";
import "./DropDown.css";
import { ChevronDown, ChevronUp, Rotate3D, Sparkle } from "lucide-react";
import { motion } from "motion/react";
import { useAnimation, AnimatePresence, color } from "framer-motion";
import { style } from "motion/react-client";

const dropdDownMenu = [
	{
		title: "Oriel Advanced",
		icon: <Sparkle size={14} fill="white" />,
	},
	{
		title: "Oriel",
		ver: "v1.0",
	},
	{
		title: "Oriel mini",
		ver: "v1.2",
	},
];

const btnVariants = {
	initial: {
		border: "1px solid transparent",
		backgroundColor: "#0F0F0F",
		width: "100px",
	},
	hover: {
		width: "12rem",
		backgroundColor: "#222222",
		border: "1px solid transparent",
	},
	active: {
		width: "12rem",
		backgroundColor: "#222222",
		border: "1px solid #2B2B2B",
	},
};

function DropDown() {
	const [hover, setHover] = useState(false);
	const [active, setActive] = useState(false);
	const widthAnimation = useAnimation();

	useEffect(() => {
		if (hover) {
			widthAnimation.start("hover");
		} else if (!hover && active) {
			widthAnimation.start("active");
		} else if (hover && active) {
			widthAnimation.start("active");
		} else {
			widthAnimation.stop("hover");
			widthAnimation.start("initial");
		}
	}, [hover]);
	useEffect(() => {
		if (active) {
			widthAnimation.start("active");
		} else if (!hover && active) {
			widthAnimation.start("active");
		} else {
			widthAnimation.stop("hover");
			widthAnimation.start("initial");
		}
	}, [active]);
	return (
		<div className="dropdwon-menu">
			<motion.div
				className="dropdown-head w-48 px-4 pr-2 py-1.5 rounded-xl cursor-pointer flex items-center justify-between"
				animate={widthAnimation}
				variants={btnVariants}
				onClick={() => setActive(!active)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div className="text text-lg mr-6 font-medium">Oriel</div>
				<div className="down">
					{active ? (
						<ChevronUp size={18} strokeWidth={3} />
					) : (
						<ChevronDown size={18} strokeWidth={3} />
					)}
				</div>
			</motion.div>
			<div className="dropdown-body">
				<ul className="drop-items flex flex-col ">
					<AnimatePresence>
						{active &&
							dropdDownMenu.map((item, index) => {
								return (
									<motion.li
										key={index}
										layout
										className="dropDown-item text-base px-4 rounded-xl py-2 flex gap-8 justify-between items-center w-full whitespace-nowrap"
										exit={{ opacity: 0, scale: 1.1 }}
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
									>
										<div className="title">
											{item.title}
										</div>
										{item.icon ? (
											<div className="icon">
												{item.icon}
											</div>
										) : null}
										{item.ver ? (
											<div className="version text-sm">
												{item.ver}
											</div>
										) : null}
									</motion.li>
								);
							})}
					</AnimatePresence>
				</ul>
			</div>
		</div>
	);
}

export default DropDown;
