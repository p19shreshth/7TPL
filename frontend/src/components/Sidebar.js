import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ projects, onSelectProject }) => {
    return (
        <div className="sidebar">
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`} onClick={() => onSelectProject(project)}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;