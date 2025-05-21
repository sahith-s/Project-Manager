import { createContext , useState } from "react";
export const ProjectContext = createContext({
  selectedProject: undefined,
  projects: [],
  tasks: [],
  handleClick: () => {},
  saveProject: () => {},
  handleCancel: () => {},
  handleSelect: () => {},
  handleDelete: () => {},
  taskClickHandle: () => {}
});

function ProjectProvider({ children }) {
    
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
    // console.log(projectState);
  }

  function saveProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: crypto.randomUUID()
      }
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
            deleteTask
          }}>
            {children}
          </ProjectContext.Provider>
    );
  }

export default ProjectProvider;