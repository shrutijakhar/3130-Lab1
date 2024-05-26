import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Route, Switch} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import './style.css';
const App = () => {
  const [visits, setVisits] = useState(0);

  const incrementVisits = useCallback(() => {
    setVisits(visit => visit + 1);
  }, []);

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home visits={visits} incrementVisits={incrementVisits} />
          </Route>
          <Route path="/about">
            <About visits={visits} />
          </Route>
          <Route path="/contact">
            <Contact visits={visits} />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
