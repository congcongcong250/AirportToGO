import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AirportFeedContainer from './components/airport-feed-container';
import AirportDetailContainer from './components/airport-detail-container';
import Button from './components/button';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <nav>
          <Button>
            <Link to="/feed">Airports</Link>
          </Button>
        </nav>
        <Route path="/" exact component={AirportFeedContainer} />
        <Route path="/feed" exact component={AirportFeedContainer} />
        <Route path="/feed/:airportCode" exact component={AirportDetailContainer} />
      </div>
    </div>
  );
};

export default App;
