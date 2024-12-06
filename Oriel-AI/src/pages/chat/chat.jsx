import React, { useState } from "react";
import "./chat.css";
import LogoBig from "../../components/logo-big/LogoBig";
import PromptField, {
  PopupsContext,
} from "../../components/promptField/PromptField";
import DropDown from "../../components/dropDown/DropDown";
import ActionKey from "../../components/actionKey/ActionKey";
import {
  ChartLine,
  ChartLineIcon,
  Code,
  Code2,
  CornerDownLeft,
  Image,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SideMenu from "../../components/sideMenu/SideMenu";
import Btn1 from "../../components/btn-1/Btn1";
import Conversation from "../../components/conversation/Conversation";
import Profile from "../../components/profile/profile";
import { div } from "motion/react-client";

const voiceVariants = {
  open: {
    width: 480.6,
    height: 257.4,
    bottom: "15px",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    width: 10,
    height: 2,
    bottom: "-30px",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.25,
    },
  },
};

const voiceContentVariants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.35,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  },
};

const bgVariant = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.25,
      delay: 0.5,
    },
  },
};

function Chat() {
  const [popActive, setPopActive] = useState(false);
  const [chatStarted, setChatStarted] = useState(true);
  const [profilePopup, setProfilePopup] = useState(false);

  return (
    <PopupsContext.Provider value={{ popActive, setPopActive }}>
      <div className="single-page overflow-y-clip py-3 flex ">
        <div className="ml-2 side-menu-container">
          <SideMenu setProfilePopup={setProfilePopup} />
        </div>
        <div className="body flex-1 flex flex-col items-start">
          <div className="dropdown ml-4">
            <DropDown />
          </div>
          <AnimatePresence>
            {popActive && (
              <motion.div
                layout
                variants={bgVariant}
                animate={popActive ? "open" : "close"}
                initial="close"
                exit="close"
                className="bg"
              ></motion.div>
            )}
            {profilePopup && (
              <motion.div
                layout
                variants={bgVariant}
                animate={profilePopup ? "open" : "close"}
                initial="close"
                exit="close"
                className="bg"
              ></motion.div>
            )}
          </AnimatePresence>
          <div
            className={
              chatStarted
                ? "container flex flex-col gap-y-10 justify-between items-start"
                : "container flex flex-col gap-y-10 items-center"
            }
          >
            {profilePopup ? (
              <div>
                <button
                  className="tog z-30 left-1/2 top-1/2 fixed p-2 rounded-lg capitalize text-xl font-bold bg-white text-black  "
                  onClick={() => setProfilePopup(false)}
                >
                  close profile
                </button>{" "}
                  
              </div>
            ) : null}
            <AnimatePresence>
              {!chatStarted && <LogoBig />}
              {!chatStarted && (
                <div className="welcome-text gap-y-2 mt-4 -mb-8 flex flex-col items-center text-center">
                  <div className="title text-3xl flex gap-2 font-bold">
                    Hello,
                    <span className="usrName capitalize">naleeka</span>
                  </div>
                  <div className="subtitle text-xl">
                    Let’s get started, ask me anything
                  </div>
                </div>
              )}
              {chatStarted && (
                <div className="conv">
                  <Conversation
                    title="random joke"
                    summary="The user asked for a joke, and the bot replied with a skeleton-themed pun"
                  />
                </div>
              )}
              <div className={chatStarted ? "mx-auto" : ""}>
                <PromptField />
              </div>
              {!chatStarted && (
                <div className="quick-btns flex justify-between -mt-6 gap-5">
                  <Btn1 text="Create image" icon={<Image size={15} />} />
                  <Btn1 text="Code generation" icon={<Code2 size={15} />} />
                  <Btn1
                    text="Data analysis & insights"
                    icon={<ChartLine size={15} />}
                  />
                  <Btn1 text="More" />
                </div>
              )}
            </AnimatePresence>
          </div>
          <p className="accuracy-text text-center w-full text-sm">
            Use Oriel as a guide, but confirm facts independently for accuracy.
          </p>
          <motion.div
            layout
            variants={voiceVariants}
            animate={popActive ? "open" : "close"}
            initial="close"
            className="voice-recognition-container text-xl p-6 py-4 text-center rounded-2xl"
          >
            <AnimatePresence>
              {popActive && (
                <motion.div
                  layout
                  variants={voiceContentVariants}
                  animate={popActive ? "open" : "close"}
                  exit="close"
                  initial="initial"
                  className="content gap-4 flex flex-col items-center "
                >
                  <div className="voice-to-text self-center">
                    Generate a simple funny story <span>based on</span>
                  </div>
                  <div className="voice-wave">
                    <div className="left-fade"></div>
                    <img
                      src="/assets/Mic input.png"
                      className="mx-auto"
                      alt=""
                    />
                    <div className="right-fade"></div>
                  </div>
                  <div className="btns self-end items-center mt-2 gap-3 flex">
                    <div className="cancel" onClick={() => setPopActive(false)}>
                      <ActionKey text="Cancel" />
                    </div>
                    <div className="enter">
                      <ActionKey
                        text="Enter"
                        keyIcon={<CornerDownLeft size={12} strokeWidth={4} />}
                        state={"active"}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PopupsContext.Provider>
  );
}

export default Chat;
