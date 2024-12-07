import React from "react";
import "./chattingScreen.css";
import { useState } from "react";
import Profile from "../../components/profile/profile.jsx";
function chattingScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3" style={{ backgroundColor: "#171717" }}>
      <div className="grid grid-cols-12 gap-4 ">
        {/* side bar */}
        <div
          className="col-span-3 text-white rounded-md side-bar-container"
          style={{ backgroundColor: "#2B2B2B" }}
        >
          3 Columns
        </div>

        {/* chatting section */}
        <div className="col-span-9  ">
          {/* <div class="flex flex-row justify-start">
            <div className="relative">
              <button
                style={{ backgroundColor: "#0F0F0F" }}
                onClick={toggleMenu}
                className="  text-white px-4 py-2 rounded-md   focus:outline-none"
              >
                Oriel
              </button>

              {isOpen && (
                <div
                  className="absolute right-0 mt-2 w-48  shadow-lg rounded-md"
                  style={{ backgroundColor: "#2B2B2B", color: "#B2B2B2" }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 oriel-dropdown hover:text-white"
                  >
                    Oriel Advanced
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 oriel-dropdown hover:text-white"
                  >
                    Oriel
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 oriel-dropdown hover:text-white"
                  >
                    Oriel mini
                  </a>
                </div>
              )}
            </div>
          </div> */}
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default chattingScreen;
