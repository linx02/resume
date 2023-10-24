// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// CSS
import './css/styles.css';
import './index.css';
import './css/Card.css';
import './css/Nav.css';
import './css/Summary.css';
import './css/Profile.css';
// Components
import Nav from './components/Nav';
import Card from './components/Card';
import Summary from './components/Summary';
import Profile from './components/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <main>
        <div className="container--main">
          <Summary />
          <Profile />
        </div>
        <div className="container--tech-stack scroll-point">
          <div className="tech-stack--header">
            <h2 className="tech-stack--title">My Tech Stack</h2>

          </div>
        </div>
        <div className="container--recent-work scroll-point">
          <div className="recent-work--header">
            <h2 className="recent-work--title">Recent Work</h2>
          </div>
        </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
