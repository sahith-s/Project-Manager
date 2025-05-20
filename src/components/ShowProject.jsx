import Tasks from "./Tasks";

export default function ShowProject({
  projectId,
  data,
  onDelete,
  tasks,
  taskClick,
  taskDelete
}) {
  for (let i = 0; i < data.projects.length; i++) {
    if (data.projects[i].id === projectId) {
      const date = new Date(data.projects[i].dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      return (
        <div className="relative flex flex-col items-start justify-start w-5/6 p-6 bg-white shadow-lg rounded-lg border border-gray-200 space-y-4">
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
            onClick={() => onDelete()}
          >
            Delete
          </button>
          <h1 className="text-xl font-bold text-gray-800">{data.projects[i].title}</h1>
          <p className="text-gray-400">{date}</p>
          <p className="text-gray-600">{data.projects[i].description}</p>

          <hr className="w-full border-t-2 border-gray-300 my-4" />

          <Tasks onClick={taskClick} List={tasks} onDelete={taskDelete} />
        </div>
      );
    }
  }
}
