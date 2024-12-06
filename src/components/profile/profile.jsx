import React from "react";
import "./profile.css";
import { Search } from "lucide-react";

function profile() {
  return (
    <div className="text-white ">
      <div className="grid grid-cols-12 px-6 pt-3">
        <div className="col-span-4 flex justify-between ">
          <div className="font-semibold">Settings</div>
          <div className="text-[var(--grey-1)] hover:text-white">
            <Search />
          </div>
        </div>
        <div className="col-span-8 flex justify-end text-[var(--grey-1)] font-bold hover:text-white  ">
          <button>X</button>
        </div>
      </div>
      <hr className="border-t-2 border-[var(--secondary-hr-clr)] my-4" />

      <div className="grid grid-cols-12 h-full ">
        <div className="col-span-4 flex justify-between">
          <div className="flex flex-col mt-6">
            <button className="pt-4 bg-slate-500">1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
          </div>
          <div className="w-0.5 h-full bg-[var(--grey-1)]"></div>
        </div>
        <div className="col-span-8 mt-6">Profile detail section</div>
      </div>
    </div>
  );
}

export default profile;
