import clsx from "clsx";
import { PacmanLoader } from "react-spinners";

const Button = ({ isLoading = false, disabled: isDisabled = false }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={clsx(
        "text-white bg-blue-700 font-medium rounded-lg text-sm", // button style
        isDisabled ? "bg-gray-600 hover:bg-gray-600" : "",
        "flex ",
        "px-5 py-2.5 me-2 mb-2", // layout
        "hover:bg-blue-800", // hover
        "focus:ring-4 focus:ring-blue-300   focus:outline-none"
      )}
    >
      {isLoading && <PacmanLoader size={8} color={"white"} />}
      {!isLoading && <p>Confirm</p>}
    </button>
  );
};

export default Button;
