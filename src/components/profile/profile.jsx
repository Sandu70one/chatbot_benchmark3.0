import React from "react";
import "./profile.css";
import { CircleX, Search } from "lucide-react";
import { User, MessageCircle, Voicemail, Settings2, Bell } from "lucide-react";
import profileImg from "../../assets/profilePic.png";

function Profile({ setProfilePopup }) {
  const [activeSection, setActiveSection] = React.useState(0);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="profilePop rounded-2xl text-white absolute left-1/2 top-1/2 ">
      <div className="grid grid-cols-12 px-6 pt-3">
        <div className="col-span-4 flex justify-between pr-5 pt-1 ">
          <div className="font-semibold text-xl">Settings</div>
          <div className="text-[var(--grey-1)] hover:text-white">
            <Search />
          </div>
        </div>
        <div className="col-span-8 flex justify-end text-[var(--grey-1)] font-bold hover:text-white  ">
          <button onClick={() => setProfilePopup(false)}>
            <CircleX />
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-[var(--secondary-hr-clr)] mt-4" />

      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-4 flex justify-between">
          <div className="flex flex-col my-6 w-full">
            {[
              { icon: <User fill="#fff" />, label: "Profile" },
              { icon: <MessageCircle fill="#fff" />, label: "Chat" },
              { icon: <Voicemail fill="#fff" />, label: "Voice Settings" },
              { icon: <Settings2 fill="#fff" />, label: "Customize" },
              { icon: <Bell fill="#fff" />, label: "Notification" },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-4 flex justify-start pl-8 items-center w-full gap-4 cursor-pointer ${
                  activeSection === index
                    ? "bg-[var(--profile-btn-bg)] button-selected-color"
                    : "hover:bg-[var(--profile-btn-bg)] text-[var(--grey-1)]"
                }`}
                onClick={() => handleSectionClick(index)}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
          <div className="w-0.5 h-auto bg-[var(--secondary-hr-clr)]"></div>
        </div>
        <div className="col-span-8 mt-6 h-100 ">
          <div className="flex flex-col ml-9 m-6 gap-4 ">
            <div>Profile Picture</div>
            <div>
              <img
                src={profileImg}
                alt="profile image "
                className="hover:opacity-30 "
              />
            </div>
            <div className="pt-10 text-[var(--grey-4)]">Profile name</div>
            <input
              type="text"
              placeholder="Naleeka Kumarasinghe"
              id="exampleInput"
              className="w-96 p-4 border border-[var(--secondary-hr-clr)] rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-white focus:border-white placeholder-white"
            />
            <div className="text-[var(--grey-4)]">Email address</div>
            <input
              type="email"
              placeholder="naleeka123@gmail.com"
              id="exampleInput"
              className="w-96 p-4 border border-[var(--secondary-hr-clr)] text-[var(--grey-4)]  rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--secondary-hr-clr)] focus:border-[var(--secondary-hr-clr)]"
              disabled
            />
            <div className="w-full max-w-sm mx-start">
              <label
                for="dropdown"
                className="block text-sm font-medium text-[var(--grey-4)] mb-2"
              >
                Language preference
              </label>
              <select
                id="dropdown"
                className="w-full p-3  border border-[var(--secondary-hr-clr)] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--secondary-hr-clr)] focus:border-[var(--secondary-hr-clr)] "
              >
                <option value="" disabled selected>
                  Auto detect
                </option>
                <option value="option1 bg-black">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-[var(--text-field-bg-blocked)] rounded-lg py-2 px-4 mr-2"
                onClick={() => setProfilePopup(false)}
              >
                Cancel
              </button>
              <button className="text-white button-bg-color rounded-lg py-2 px-4 ">
                Save
              </button>
            </div>
          </div>
          {/* <div className="w-0.5 h-full bg-[var(--grey-1)]"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;