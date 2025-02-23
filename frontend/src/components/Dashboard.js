import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        const loadProjects = async () => {
            try {
                await fetchProjects();
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
            <h1 className="dashboard-header">Dashboard</h1>
            <div className="dashboard-content">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div key={index} className="dashboard-item">
                            {project.name}
                        </div>
                    ))
                ) : (
                    <div>No projects available</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;