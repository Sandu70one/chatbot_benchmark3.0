import React from "react";

export const ActionButtons = ({ buttons }) => {
  return (
    <div 
      className="flex gap-px items-center self-end mt-4 mr-5 max-md:mr-2.5"
      role="toolbar"
      aria-label="Message actions"
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          className="focus:outline-none focus:ring-2 focus:ring-violet-500"
          aria-label={`Action button ${index + 1}`}
        >
          <img
            loading="lazy"
            src={button.src}
            alt={button.alt || `Action ${index + 1}`}
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.8] w-[61px]"
          />
        </button>
      ))}
    </div>
  );
};