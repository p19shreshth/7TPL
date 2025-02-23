import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to 7TPL</h1>
                <p>Your AI-driven research companion.</p>
            </header>
            <main className="landing-content">
                <section>
                    <h2>About 7TPL</h2>
                    <p>
                        7TPL helps academic researchers and professionals perform high-quality research with automated summarization, citation generation, and integrated analysis.
                    </p>
                </section>
                <section>
                    <h2>Features</h2>
                    <ul>
                        <li>Automated Summarization</li>
                        <li>Citation Generation</li>
                        <li>Project Management</li>
                        <li>User-Friendly Interface</li>
                    </ul>
                </section>
            </main>
            <footer className="landing-footer">
                <p>Get started with your research today!</p>
            </footer>
        </div>
    );
};

export default LandingPage;