import React from "react";
import "./profile.css";
import {
  Search,
  User,
  MessageCircle,
  Voicemail,
  Settings2,
  Bell,
} from "lucide-react";
import profileImg from "../../assets/profilePic.png";

function profile() {
  const [activeSection, setActiveSection] = React.useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="text-white w-full h-full border border-[var(--secondary-hr-clr)] rounded-lg">
      <div className="grid grid-cols-12 px-6 pt-3">
        <div className="col-span-4 flex justify-between my-3">
          <div className="font-semibold">Settings</div>
          <div className="text-[var(--grey-1)] hover:text-white mr-4">
            <Search />
          </div>
        </div>
        <div className="col-span-8 flex justify-end text-[var(--grey-1)] font-bold hover:text-white">
          <button>X</button>
        </div>
      </div>
      <hr className="border-t-2 border-[var(--secondary-hr-clr)]" />

      <div className="grid grid-cols-12  w-full">
        <div className="col-span-4 flex justify-between">
          <div className="flex flex-col my-6 w-full">
            {[
              { icon: <User />, label: "Profile" },
              { icon: <MessageCircle />, label: "Chat" },
              { icon: <Voicemail />, label: "Voice Settings" },
              { icon: <Settings2 />, label: "Customize" },
              { icon: <Bell />, label: "Notification" },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-4 flex justify-center items-center w-full gap-4 cursor-pointer ${
                  activeSection === index
                    ? "bg-[var(--profile-btn-bg)]"
                    : "hover:bg-[var(--profile-btn-bg)]"
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
        <div className="col-span-8 mt-6">
          <div className="flex flex-col ml-9">
            <div>Profile Picture</div>
            <div>
              <img src={profileImg} alt="profile image" />
            </div>
            <div>
              Profile name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
