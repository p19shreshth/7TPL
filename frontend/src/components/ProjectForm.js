import React, { useState } from 'react';

const ProjectForm = ({ onCreateProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [researchTopics, setResearchTopics] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            title,
            description,
            researchTopics: researchTopics.split(',').map(topic => topic.trim()),
        };
        onCreateProject(newProject);
        setTitle('');
        setDescription('');
        setResearchTopics('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Project</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="researchTopics">Research Topics (comma-separated):</label>
                <input
                    type="text"
                    id="researchTopics"
                    value={researchTopics}
                    onChange={(e) => setResearchTopics(e.target.value)}
                />
            </div>
            <button type="submit">Create Project</button>
        </form>
    );
};

export default ProjectForm;