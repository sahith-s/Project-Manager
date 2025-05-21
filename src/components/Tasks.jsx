import { useRef } from 'react';
import { useContext } from 'react';
import { ProjectContext } from './store/ProjectProvider';

export default function Tasks({ List }) {
  const { taskClickHandle,handleCancel } = useContext(ProjectContext);
  const ref = useRef();

  return (
    <>
      <h2 className="text-lg font-bold text-gray-800 mt-6">Tasks</h2>
      <span className="flex items-center justify-between w-full mt-4">
        <input
          ref={ref}
          type="text"
          placeholder="Add a task"
          className="w-11/12 h-8 border border-gray-300 rounded-md px-2 focus:outline-none"
        />
        <button
          className="p-2 text-white bg-gray-500 hover:bg-gray-900 rounded-md"
          onClick={() => {
            if (ref.current.value === "") {
              return;
            }
            taskClickHandle(ref.current.value);
            ref.current.value = "";
          }}
        >
          Add Task
        </button>
      </span>
      {List.length == 0 ? <span className="text-gray-600 text-sm mt-2">
        No tasks yet? Add one!
      </span> : null }
      <ul className="space-y-2">
        {List.map((task) => (
          <li
            key={task.id}
            className="relative w-[45rem] h-[3.5rem] p-2 pt-4 bg-gray-100 rounded-md shadow-md border border-gray-300 hover:bg-gray-200 transition duration-200"
          >
            {task.text}
            <button
              className="absolute top-2 right-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
              onClick={() => handleCancel(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
