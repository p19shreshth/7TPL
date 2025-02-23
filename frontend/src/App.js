import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import OnboardingForm from './components/OnboardingForm';
import ProjectForm from './components/ProjectForm';
import Sidebar from './components/Sidebar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/onboarding" component={OnboardingForm} />
          <Route path="/project" component={ProjectForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;