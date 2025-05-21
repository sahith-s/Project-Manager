import { useContext } from "react"
import { ProjectContext } from "./store/ProjectProvider";
export default function Button({children ,...props }) {
    const {handleClick} = useContext(ProjectContext);
    return (
        <button onClick={handleClick} {...props} className="bg-gradient-to-r from-gray-800 to-black text-white py-2 px-4 rounded hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            {children}
        </button>
    )
}