import React from "react";

export default function Plus({ isOpen, handleClick }) {
  return (
    <div
      className={`w-[20px] h-[20px] bg-green-400 flex justify-center items-center rounded-lg transition-all duration-500 cursor-pointer ${
        isOpen ? "rotate-45 " : ""
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`M12 ${isOpen ? "12m0 0h-7.5m7.5 7.5v-15m7.5 7.5h-15" : "4.5v15m7.5-7.5h-15"}`}
        />
      </svg>
    </div>
  );
}
