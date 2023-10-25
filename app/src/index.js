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
import './css/StackIcon.css';
// Components
import Nav from './components/Nav';
import Card from './components/Card';
import Summary from './components/Summary';
import Profile from './components/Profile'
import StackIcon from './components/StackIcon';
// Tech stack Images
import bootstrap from './images/techstack/bootstrap.png';
import css from './images/techstack/css.png';
import django from './images/techstack/django.png';
import github from './images/techstack/github.png';
import html from './images/techstack/html.png';
import js from './images/techstack/js.png';
import photoshop from './images/techstack/photoshop.png';
import python from './images/techstack/python.png';
import tensorflow from './images/techstack/tensorflow.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <main>
        <div className="placeholder scroll-point" id="1"></div>
        <div className="container--main">
          <Summary />
          <Profile />
        </div>
        <div className="container--tech-stack scroll-point" id="2">
          <div className="tech-stack--header">
            <h2 className="tech-stack--title">My Tech Stack</h2>
            <h3 className="tech-stack--sub-header">Languages</h3>
            <div className="tech-stack--icons">
              <StackIcon image={html} />
              <StackIcon image={css} />
              <StackIcon image={js} />
              <StackIcon image={python} />
            </div>
            <h3 className="tech-stack--sub-header">Frameworks</h3>
            <div className="tech-stack--icons">
              <StackIcon image={bootstrap} />
              <StackIcon image={django} />
              <StackIcon image={tensorflow} />
            </div>
            <h3 className="tech-stack--sub-header">Tools</h3>
            <div className="tech-stack--icons">
              <StackIcon image={github} />
              <StackIcon image={photoshop} />
            </div>
          </div>
        </div>
        <div className="container--recent-work scroll-point" id="3">
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
