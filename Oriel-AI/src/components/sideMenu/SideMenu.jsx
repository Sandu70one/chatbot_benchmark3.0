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
  AlignLeft 
} from "lucide-react";
import ChatHeadBtn from "../chatHeadBtn/ChatHeadBtn";

function SideMenu() {
  const [activeButton, setActiveButton] = useState(null);

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
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="block md:hidden  mt-2 ml-3   hover:bg-[var(--primary-icon-bg)] ">
       <AlignLeft size={20} className="cursor-pointer"/>
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Menu
        </button> */}
      </div>
      <div className="sideMenu hidden md:flex py-4 px-6 flex flex-col rounded-2xl gap-4 h-[calc(100vh-1.5rem)]">
        {/* first row */}
        <div className="menu-head pb-4 flex justify-between items-center">
          <div className="toggle p-2 rounded-full">
            <Table2 size={20} />
          </div>
          <div className="options flex gap-4">
            <Search size={20} className="cursor-pointer" />
            <SquarePlus size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* second row */}
        <div className="profile pb-6 justify-around gap-8 items-center flex">
          <div className="account flex justify-between gap-2 items-center">
            <div className="profie-pic">
              <img
                src="/src/assets/profilePic.png"
                className="w-11"
                alt="naleeka's profile picture"
              />
            </div>
            <div className="details flex flex-col gap-0">
              <div className="name font-medium">Naleeka Kumarasinghe</div>
              <div className="email text-sm">knaleeka843@gmail.com</div>
            </div>
          </div>
          <div className="plan py-2 px-3 capitalize text-xs font-medium rounded-lg">
            free
          </div>
        </div>
        {/* third row */}
        <div className=" mb-3">
          <div className="flex justify-between items-center mb-4">
            <div
              className={`flex justify-center items-center p-2 rounded-xl ${
                activeButton === 1
                  ? "bg-[var(--slide-btn-bg-clicked)] text-black"
                  : "bg-[var(--slide-btn-bg)]"
              }`}
              onClick={() => handleClick(1)}
            >
              <History className="transform scale-50"></History>
              <button>Chat history</button>
            </div>

            <div
              className={`flex justify-center items-center p-2 rounded-xl ${
                activeButton === 2
                  ? "bg-[var(--slide-btn-bg-clicked)] text-black"
                  : "bg-[var(--slide-btn-bg)]"
              }`}
              onClick={() => handleClick(2)}
            >
              <Pin className="transform scale-50"></Pin>
              <button>Pinned chats</button>
            </div>

            {/* <div
            className={`flex justify-center items-center p-2 rounded-xl ${
              activeButton === 3
                ? "bg-[var(--slide-btn-bg-clicked)] text-black"
                : "bg-[var(--slide-btn-bg)]"
            }`}
            onClick={() => handleClick(3)}
          >
            <Folder className="transform scale-50"></Folder>
            <button>Folder</button>
          </div> */}
          </div>
        </div>

        {/* fourth row */}
        <div className="past-chat-container pl-6 overflow-y-auto overflow-x-hidden mb-auto scrollbar-none ">
          {Object.keys(data).map((key) => (
            <div className=" " key={key}>
              <div className="pb-2 capitalize pt-3">
                {key.replace(/([A-Z])/g, " $1").trim()}{" "}
                {/* Capitalizes the string */}
              </div>
              <ol className="grid gap-3 pl-2">
                {data[key].map((item, index) => (
                  <li
                    className="text-[var(--grey-2)] hover:text-white"
                    key={index}
                  >
                    {trimText(item)}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* fifth row */}
        <div className="flex justify-around  items-center mt-auto">
          <div className="rounded-full p-2  bg-[var(--primary-icon-bg)]">
            <Crown></Crown>
          </div>
          <div className="flex flex-col  items-left ">
            <div>Upgrade plan</div>
            <div className="text-sm text-[var(--grey-2)]">
              Take your experience to the next level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
