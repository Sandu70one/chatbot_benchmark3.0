import React, { useContext, createContext, useState } from "react";
import "./PromptField.css";
import { AudioLines, CornerDownLeft, Paperclip } from "lucide-react";
import IconBtn from "../iconBtn/IconBtn";
import ActionKey from "../actionKey/ActionKey";

export const PopupsContext = createContext();

function PromptField() {
  const { popActive, setPopActive } = useContext(PopupsContext);

  return (
    <div className="inp-field px-3 rounded-xl my-5">
      <div className="TA-field flex gap-2 items-center pt-4 pb-3">
        <div className="rec" onClick={() => setPopActive(true)}>
          <IconBtn icon={<AudioLines size={18} />} />
        </div>
        <div className="input flex-1 flex items-start">
          <input
            className="py-2 pb-3 px-3 mr-2"
            placeholder="Ask anything from Oriel"
            type="text"
            autoComplete="off"
            name="prompt-field"
            id="prompt-field"
          />
        </div>
        <ActionKey
          text="ask"
          keyIcon={<CornerDownLeft size={12} strokeWidth={4} />}
        />
        <div className="seperator-line -mx-3"></div>
      </div>
      <div className="att-field flex justify-between items-center py-2">
        <button className="att-btn">
          <IconBtn icon={<Paperclip size={14} />} />
        </button>
        <div className="words text-xs flex gap-1 mr-1">
          <span className="curr">0</span>/<span className="limit">2000</span>
        </div>
      </div>
    </div>
  );
}

export default PromptField;
