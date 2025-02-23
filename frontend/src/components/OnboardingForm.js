import React, { useState } from 'react';

const OnboardingForm = ({ onSubmit }) => {
    const [citationStyle, setCitationStyle] = useState('');
    const [researchTopics, setResearchTopics] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ citationStyle, researchTopics });
    };

    return (
        <div className="onboarding-form">
            <h2>Onboarding Questionnaire</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="citationStyle">Preferred Citation Style:</label>
                    <input
                        type="text"
                        id="citationStyle"
                        value={citationStyle}
                        onChange={(e) => setCitationStyle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="researchTopics">Research Topics of Interest:</label>
                    <input
                        type="text"
                        id="researchTopics"
                        value={researchTopics}
                        onChange={(e) => setResearchTopics(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OnboardingForm;