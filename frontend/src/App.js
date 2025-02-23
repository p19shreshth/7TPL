import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App = () => {
  const items = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Landing Page', link: '/' },
  ];

  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar items={items} />
        <SearchBar onSearch={handleSearch} />
        <SearchResults query={query} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;