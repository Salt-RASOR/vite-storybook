import clsx from "clsx";
import {PacmanLoader} from 'react-spinners'
 


const Button = () => {
const isLoading = true
  return (
    <button
      type="button"
      className={clsx("text-white bg-blue-700 font-medium rounded-lg text-sm", // button style
      "flex ", 
      "px-5 py-2.5 me-2 mb-2", // layout
      "hover:bg-blue-800", // hover
      "focus:ring-4 focus:ring-blue-300   focus:outline-none")}>
        {isLoading && <p className="mr-8"><PacmanLoader size={8} color={"white"}/></p>}
      <p>Confirm</p>
    </button>
  );
};

export default Button;
