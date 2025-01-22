import React from "react";

const ProjectCard = ({ title, image, description, link }) => {
    return (
        <li className="project-item">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
                {title}
                <img src={image} alt={`${title} Project`} className="project-image" />
                <p className="project-describe">{description}</p>
            </a>
        </li>
    );
};

export default ProjectCard;
