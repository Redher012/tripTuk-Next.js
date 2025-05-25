import React from "react";

const MainButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-500 hover:bg-purple-900 text-neutral-050 py-2 px-4 rounded-full text-2xl cursor-pointer w-full"
    >
      {children}
    </button>
  );
};

export default MainButton;
