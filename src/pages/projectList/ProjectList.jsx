import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./projectList.css";

const date = new Date();

const mockData = [
  {
    projectId: 1,
    title: "Angular Web Application",
    date,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae soluta voluptas quas nulla facere repellat velit molestiae fuga similique!",
    status: "In Progress",
    progress: 70,
    updates: [
      {
        projectId: 1,
        id: 1.1,
        title: "Endpoint Issues",
        description: "Test description",
        date,
      },
      {
        projectId: 1,
        id: 1.2,
        title: "Rate limiting finished",
        description: "Another test description",
        date,
      },
      {
        projectId: 1,
        id: 1.3,
        title: "Project Completed",
        description: "Another test description",
        date,
      },
    ],
  },
  {
    projectId: 2,
    title: "DRF Rest API",
    date,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae soluta voluptas quas nulla facere repellat velit molestiae fuga similique!",
    status: "Completed",
    progress: 100,
    updates: [
      { projectId: 2, id: 2.1, title: "Endpoint Issues", description: "Test description", date },
      {
        projectId: 2,
        id: 2.2,
        title: "Rate limiting finished",
        description: "Another test description",
        date,
      },
      {
        projectId: 2,
        id: 2.3,
        title: "Project Completed",
        description: "Another test description",
        date,
      },
    ],
  },
  {
    projectId: 3,
    title: "ASP.NET CORE WEB API",
    date,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae soluta voluptas quas nulla facere repellat velit molestiae fuga similique!",
    status: "Not Started",
    progress: 0,
    updates: [
      { projectId: 3, id: 3.1, title: "Endpoint Issues", description: "Test description", date },
      {
        projectId: 3,
        id: 3.2,
        title: "Rate limiting finished",
        description: "Another test description",
        date,
      },
      {
        projectId: 3,
        id: 3.3,
        title: "Project Completed",
        description: "Another test description",
        date,
      },
    ],
  },
];

const ProjectList = () => {
  return (
    <div className="projectList">
      <div className="projectList__title-container">
        <h2>Projects</h2>
        <NavLink
          title="Add Project"
          aria-label="Button to add project"
          className="projectList__add-btn"
          to="/dashboard/projects/add-project"
        >
          <FaPlus />
        </NavLink>
      </div>
      <div className="projectList__container">
        {mockData?.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export { ProjectList, mockData };
