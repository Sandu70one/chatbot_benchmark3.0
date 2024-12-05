import React from "react";

export const Message = ({ content, isUser, icon, actionIcon }) => {
  return (
    <div
      className="flex gap-3.5 items-start text-base text-black"
      role="article"
    >
      <img
        loading="lazy"
        src={icon}
        alt={isUser ? "User avatar" : "Assistant avatar"}
        className="object-contain shrink-0 w-10 h-10 rounded-full aspect-square bg-[linear-gradient(95deg,#232323_11.34%,#313131_114.28%)] fill-[linear-gradient(95deg,#232323_11.34%,#313131_114.28%)] stroke-[2px]"
      />
      <div
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3 mt-4 rounded bg-neutral-200"
        role="textbox"
        aria-label={isUser ? "User message" : "Assistant message"}
      >
        {content}
      </div>
      {actionIcon && (
        <button
          aria-label="Message action"
          className="focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <img
            loading="lazy"
            src={actionIcon}
            alt="Action icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      )}
    </div>
  );
};
