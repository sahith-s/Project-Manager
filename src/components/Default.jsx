import noProjects from "../assets/no-projects.png";
import Button from "./Button";

export default function Default({onClick}){
    return (
        <div className="flex flex-col items-center justify-center w-5/6 p-4 relative space-y-5">
            <img src={noProjects} alt="No Projects" className="w-1/12 mx-auto mb-4" />
            <p className="text-gray-700 text-center text-xl font-bold">            
                No Projects Selected
            </p>
            <p className="text-gray-700 text-center text-base mt-2">
                Select a project from the sidebar or create a new one.
            </p>
            <Button onClick={onClick}>Create One </Button>
        </div>
    )
}