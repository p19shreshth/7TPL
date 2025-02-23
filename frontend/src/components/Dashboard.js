import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Your Projects</h1>
            {projects.length === 0 ? (
                <p>No active projects found. Create a new project to get started!</p>
            ) : (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;