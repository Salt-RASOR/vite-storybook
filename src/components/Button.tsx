import React from "react";
import clsx from "clsx";

const Button = () => {

  return (
    <button
      type="button"
      className={clsx("text-white bg-blue-700 font-medium rounded-lg text-sm", // button style
      "px-5 py-2.5 me-2 mb-2", // layout
      "hover:bg-blue-800", // hover
      "focus:ring-4 focus:ring-blue-300   focus:outline-none")}>
      Confirm
    </button>
  );
};

export default Button;
