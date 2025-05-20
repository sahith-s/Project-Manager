import Default from "./components/Default";
import NewProject from "./components/NewProject";
import ShowProject from "./components/ShowProject";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleClick() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: null
    }));
    console.log(projectState);
  }

  function saveProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: crypto.randomUUID()
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProject: undefined
      };
    });
    console.log(projectState);
  }

  function handleCancel() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: undefined
    }));
  }

  function handleSelect(project) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: project
    }));
  }

  function handleDelete() {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProject),
      selectedProject: undefined
    }));
  }

  function taskClickHandle(text) {
    setProjectState(prevState => {
      const newTask = {
        id: crypto.randomUUID(),
        projectId: prevState.selectedProject,
        text: text
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function deleteTask(taskId) {
    setProjectState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  }

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={saveProject} state={handleCancel} />;
  } else if (projectState.selectedProject === undefined) {
    content = <Default onClick={handleClick} />;
  } else {
    const filteredTasks = projectState.tasks.filter(
      task => task.projectId === projectState.selectedProject
    );
    content = (
      <ShowProject
        onDelete={handleDelete}
        projectId={projectState.selectedProject}
        data={projectState}
        taskClick={taskClickHandle}
        taskDelete={deleteTask}
        tasks={filteredTasks}
      />
    );
  }

  return (
    <main className="my-24 mx-auto flex">
      <SideBar
        onSelect={handleSelect}
        onClick={handleClick}
        tasks={projectState.projects}
        selected={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
