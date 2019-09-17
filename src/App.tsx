import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AirportFeedContainer from './components/airport-feed-container';
import AirportDetailContainer from './components/airport-detail-container';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Airports</Link>
            </li>
          </ul>
        </nav>

        <Route path="/feed" exact component={AirportFeedContainer} />
        <Route path="/feed/:airportCode" exact component={AirportDetailContainer} />
      </div>
    </div>
  );
};

export default App;
