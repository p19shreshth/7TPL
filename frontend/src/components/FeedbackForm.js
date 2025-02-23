import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/feedback', { feedback });
        setFeedback('');
    };

    return (
        <div className="feedback-form">
            <h2>Provide Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback..."
                />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;