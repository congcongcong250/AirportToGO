import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AirportFeedContainer from './components/airport-feed-container';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/feed" exact component={AirportFeedContainer} />
        {/* <Route path="/feed/" component={About} /> */}
      </div>
    </Router>
  );
}
