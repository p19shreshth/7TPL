import React, { useState } from 'react';

const SummaryFeedback = ({ summary, citations, onFeedback }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFeedback(feedback);
    };

    return (
        <div className="summary-feedback">
            <h2>Summary</h2>
            <p>{summary}</p>
            <h3>Citations</h3>
            <ul>
                {citations.map((citation, index) => (
                    <li key={index}>{citation}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Provide your feedback..."
                />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default SummaryFeedback;