import Default from "./components/Default";
import NewProject from "./components/NewProject";
import ShowProject from "./components/ShowProject";
import SideBar from "./components/SideBar";
import ProjectProvider,  { ProjectContext } from "./components/store/ProjectProvider";
import { useContext } from "react";

function AppContent() {
  const { selectedProject, tasks, projects } = useContext(ProjectContext);
  let content;

  if (selectedProject === null) {
    content = <NewProject />;
  } else if (selectedProject === undefined) {
    content = <Default />;
  } else {
    const filteredTasks = tasks.filter(
      task => task.projectId === selectedProject
    );
    content = (
      <ShowProject
        tasks={filteredTasks}
      />
    );
  }

  return (
    <main className="my-24 mx-auto flex">
      <SideBar tasks={projects} />
      {content}
    </main>
  );
}

function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

export default App;
