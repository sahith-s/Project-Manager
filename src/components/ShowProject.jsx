import Tasks from "./Tasks";
import { ProjectContext } from "./store/ProjectProvider";
import { useContext } from "react";

export default function ShowProject({tasks}) {
  const {
    projects,
    selectedProject,
    handleDelete
  } = useContext(ProjectContext);

  const project = projects.find(p => p.id === selectedProject);

  if (!project) return null;

  const date = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <div className="relative flex flex-col items-start justify-start w-5/6 p-6 bg-white shadow-lg rounded-lg border border-gray-200 space-y-4">
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
      <h1 className="text-xl font-bold text-gray-800">{project.title}</h1>
      <p className="text-gray-400">{date}</p>
      <p className="text-gray-600">{project.description}</p>

      <hr className="w-full border-t-2 border-gray-300 my-4" />

      <Tasks List={tasks}/>
    </div>
  );
}
