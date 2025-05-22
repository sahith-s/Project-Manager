import { createContext, useState, useEffect } from "react";
export const ProjectContext = createContext({
  selectedProject: undefined,
  projects: [],
  tasks: [],
  handleClick: () => {},
  saveProject: () => {},
  handleCancel: () => {},
  handleSelect: () => {},
  handleDelete: () => {},
  taskClickHandle: () => {},
  deleteTask: () => {}
});

function ProjectProvider({ children }) {
  // Load from localStorage or use default
  const [projectState, setProjectState] = useState(() => {
    const stored = localStorage.getItem("projectManagerState");
    return stored
      ? JSON.parse(stored)
      : { selectedProject: undefined, projects: [], tasks: [] };
  });

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem("projectManagerState", JSON.stringify(projectState));
  }, [projectState]);

  function handleClick() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProject: null
    }));
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
      tasks: prevState.tasks.filter(task => task.projectId !== prevState.selectedProject),
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

  return (
    <ProjectContext.Provider
      value={{
        projectState,
        selectedProject: projectState.selectedProject,
        projects: projectState.projects,
        tasks: projectState.tasks,
        handleClick,
        saveProject,
        handleCancel,
        handleSelect,
        handleDelete,
        taskClickHandle,
        deleteTask,
      }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;