import Input from "./Input";
import { useRef,useContext } from "react";
import { ProjectContext } from "./store/ProjectProvider";
import Modal from "./Modal";
export default function NewProject() {
    const modal=useRef();

    const {saveProject,handleCancel} = useContext(ProjectContext);

    const title= useRef(null);
    const description= useRef(null);
    const dueDate= useRef(null);

    function SaveHandler(){

        const projectData = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
        };
        if(projectData.title === "" || projectData.description === "" || projectData.dueDate === "") {
            showError();
            return;
        }
        saveProject(projectData);

    }
    function showError(){
        modal.current.showModal();
    }

    return (<>
            <div className="flex flex-col w-11/12 p-7">
        <Modal ref={modal} />
                <div className="flex justify-end space-x-4 mb-4">
                    <button onClick={handleCancel} className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400">
                        Cancel
                    </button>
                    <button onClick={SaveHandler} className="bg-zinc-800 text-white py-2 px-4 rounded hover:bg-black">
                        Save
                    </button>
                </div>
                <div className="space-y-4">
                    <Input ref={title} label="Title" type="text" placeholder="Project Name" />
                    <Input ref = { description }label="Description" textregion='true' type="text" placeholder="Project Description" />
                    <Input ref={dueDate} label="Due Date" type="date" />
                </div>
            </div>
        </>
    );
}