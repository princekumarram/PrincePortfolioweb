import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img 
          src={"https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"}
           alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>      
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {/* {projects.map((projects,index) => ( */}
          <ProjectCard
          url="http://127.0.0.1:5500/SnakeGame/index.html"
             projectImage="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"
             projectTitle=" Sample Project"
             description="This is sample project jdshfoisd dsfjdijfos "
             technologies="Mongodb, React,Express,Nodejs"
          />
          
          <ProjectCard
          url="https://github.com/princekumarram/Tic_Cross_Game_in_cpp"
             projectImage="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"
             projectTitle=" This c++ project"
             description="This is sample project "
             technologies="c++"
          />

<ProjectCard
          url="https://github.com/princekumarram/Tic_Cross_Game_in_cpp"
             projectImage="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"
             projectTitle=" This c++ project"
             description="This is sample project "
             technologies="c++"
          />

<ProjectCard
          url="https://github.com/princekumarram/Tic_Cross_Game_in_cpp"
             projectImage="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU"
             projectTitle=" This c++ project"
             description="This is sample project "
             technologies="c++"
          />
        {/* ))} */}
      </div>

      

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
