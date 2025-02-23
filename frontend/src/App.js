import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

const App = () => {
  const items = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Landing Page', link: '/' },
  ];

  return (
    <Router>
      <div className="app">
        <Sidebar items={items} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;