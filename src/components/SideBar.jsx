// import { tasks } from "../utils/Tasks";
import { useState } from "react";
import Button from "./Button";
export default function SideBar({ onClick, tasks, onSelect, selected }) {
    return (
        <div
            className="h-[550px] w-1/6 bg-gray-900 text-white p-4 shadow-lg z-50 rounded-tr-xl rounded-br-xl"
        >
            <h2 className="text-xl font-bold mb-4 mt-6 uppercase pb-4">Your Projects</h2>
            <ul className="space-y-2">
                <Button onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>{" "}
                    Add a Project
                </Button>

                <div className="flex-col items-center space-y-2">
                    <li className="p-2 space-y-2 flex flex-col">
                        {tasks.map((task) => {
                            let className = "text-white rounded-md hover:bg-gray-800 border border-gray-700 px-4 py-2 shadow-md transition-all duration-200 ease-in-out";
                            if (task.id === selected) {
                                className += " bg-gray-700";
                            }else {
                                className += " bg-gray-900";
                            }
                            return (<button
                                onClick={() => onSelect(task.id)}
                                key={task.id}
                                className={className}>
                                {task.title}
                            </button>
                            );})}
                    </li>
                </div>
            </ul>
        </div>
    );
}