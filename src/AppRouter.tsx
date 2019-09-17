import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AirportFeedContainer from './components/airport-feed-container';
import AirportDetailContainer from './components/airport-detail-container';

export default function AppRouter() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/feed" exact component={AirportFeedContainer} />
        <Route path="/feed/:airportCode" exact component={AirportDetailContainer} />
      </div>
    </div>
  );
}
