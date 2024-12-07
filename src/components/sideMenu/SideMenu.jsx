import { useState, React } from "react";
import "./SideMenu.css";
import {
    Table2,
    Search,
    SquarePlus,
    History,
    Pin,
    Folder,
    Crown,
    AlignLeft,
} from "lucide-react";
import ChatHeadBtn from "../chatHeadBtn/ChatHeadBtn";
import { AnimatePresence, delay, motion } from "framer-motion";

const sideMenuVariants = {
    open: {
        width: 313,
        height: "auto", 
        transition: {
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    closed: {
        width: 50,
        height: 50,
        x: 3,
        borderRadius: 100,
        transition: {
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

const contentVariants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
        },
    },
};

function SideMenu({ setProfilePopup, sideBarActive }) {
    const [slideActive, setSlideActive] = useState(1);

    const data = {
        recent: [
            "What's the weather like today?",
            "How can I make a homemade pizza?",
            "Any good movies to watch this weekend?",
        ],
        yesterday: [
            "What's the best way to start learning a new language?",
            "Can you recommend a good book on personal finance?",
            "How do I set up a workout routine?",
        ],
        previous7Days: [
            "Tips for improving my sleep quality?",
            "What's the healthiest breakfast I can make?",
            "How to stay productive while working from home?",
            "Where can I find a good vegan restaurant near me?",
            "How do I train my dog to be more obedient?",
            "What are some fun weekend activities for kids?",
            "How can I decorate my living room on a budget?",
        ],
    };

    const trimText = (text, length = 30) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const handleClick = (buttonId) => {
        setSlideActive(buttonId);
    };

    const slideBtns = [
        {
            btn: "Chat history",
            id: 1,
            icon: <History size={16} />,
        },
        {
            btn: "Pinned chats",
            id: 2,
            icon: <Pin size={16} />,
        },
        {
            btn: "Folder",
            id: 3,
            icon: <Folder size={16} />,
        },
    ];

    return (
        <motion.div
            layout
            variants={sideMenuVariants}
            animate={sideBarActive ? "open" : "closed"}
            initial="open"
            style={{ overflow: "hidden" }} // Ensure container collapses
        >
            <AnimatePresence>
                    <motion.div
                        variants={contentVariants}
                        layer
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="menuContent"
                    >
                        <div className="sideMenu py-4 px-6 flex flex-col rounded-2xl ">
                            {/* first row */}
                            <div className="menu-head w-full pb-4 flex justify-between items-center">
                                <div className="options w-full flex justify-end gap-4">
                                    <Search size={20} className="cursor-pointer" />
                                    <SquarePlus size={20} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="seperator"></div>

                            {/* second row */}
                            <div className="profile py-2 justify-around -mx-2 gap-8 items-center flex">
                                <div
                                    className="account p-2 rounded-xl cursor-pointer select-none flex justify-between gap-2 items-center"
                                    onClick={() => setProfilePopup(true)}
                                >
                                    <div className="profie-pic">
                                        <img
                                            src="/assets/profilePic.png"
                                            className="w-11"
                                            alt="naleeka's profile picture"
                                        />
                                    </div>
                                    <div className="details flex flex-col gap-0">
                                        <div className="name font-medium">
                                            Naleeka Kumarasinghe
                                        </div>
                                        <div className="email text-sm">
                                            knaleeka843@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="plan cursor-pointer py-2 px-3 capitalize text-xs font-medium rounded-lg">
                                    free
                                </div>
                            </div>
                            <div className="seperator"></div>
                            {/* third row */}
                            <div className="tabs flex gap-3 py-4 mb-1">
                                {slideBtns.map((btn) => (
                                    <button
                                        key={btn.id}
                                        id={btn.id}
                                        onClick={() => handleClick(btn.id)}
                                        className={
                                            slideActive === btn.id
                                                ? "btn font-medium bg-white text-black text-nowrap py-3 px-4 gap-2 items-center rounded-xl flex"
                                                : "text-white bg-transparent btn font-medium text-nowrap py-3 px-4 gap-2 items-center rounded-xl flex hover:bg-[var(--primary-icon-bg)]"
                                        }
                                    >
                                        {btn.icon}
                                        {btn.btn}
                                    </button>
                                ))}
                                <div className="fade-right"></div>
                            </div>

                            <div className="seperator"></div>
                            {/* fourth row */}
                            <div className="past-chat-container px-3 mt-4 mb-6 overflow-y-auto overflow-x-hidden flex flex-col gap-6 scrollbar-none">
                                {Object.keys(data).map((key) => (
                                    <div key={key}>
                                        <div className="font-bold pb-2 capitalize pt-3">
                                            {key.replace(/([A-Z])/g, " $1").trim()}{" "}
                                            {/* Capitalizes the string */}
                                        </div>
                                        <ol className="grid gap-3">
                                            {data[key].map((item, index) => (
                                                <li
                                                    className="text-[var(--grey-2)] cursor-pointer  hover:text-white"
                                                    key={index}
                                                >
                                                    {trimText(item)}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                ))}
                            </div>
                            <div className="seperator"></div>

                            {/* fifth row */}
                            <div className=" p-2 plan-btn flex justify-around items-center mt-3 rounded-xl">
                                <div className="rounded-full bg-[var(--primary-icon-bg)]">
                                    <Crown />
                                </div>
                                <div className=" flex flex-col items-left">
                                    <div>Upgrade plan</div>
                                    <div className="text-sm text-[var(--grey-2)]">
                                        Take your experience to the next level
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export default SideMenu;