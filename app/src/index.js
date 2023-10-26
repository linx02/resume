// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// CSS
import './css/styles.css';
import './index.css';
import './css/Card.css';
import './css/Nav.css';
import './css/Summary.css';
import './css/Profile.css';
import './css/StackIcon.css';
import './css/Slider.css';
// Components
import Nav from './components/Nav';
import Card from './components/Card';
import Summary from './components/Summary';
import Profile from './components/Profile'
import StackIcon from './components/StackIcon';
import Slider from './components/Slider';
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
import react from './images/techstack/react.png';
import vscode from './images/techstack/vscode.png';
// Slider data
import sliderData from './slider_data.json';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.stack-icon', {
    duration: 0.9,
    ease: 'ease-out',
    y: 15,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.stack-icon',
        start: 'top bottom-=100',
        toggleActions: 'play reset play reset',
    }});
    gsap.from('#container--svg', {
      duration: 2,
      ease: 'ease-out',
      y: 15,
      opacity: 0,
      scrollTrigger: {
          trigger: '.stack-icon',
          start: 'top bottom-=100',
          toggleActions: 'play reset play reset',
      }});
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
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
            <StackIcon image={react} />
              <StackIcon image={bootstrap} />
              <StackIcon image={django} />
              <StackIcon image={tensorflow} />
            </div>
            <h3 className="tech-stack--sub-header">Tools</h3>
            <div className="tech-stack--icons">
              <StackIcon image={github} />
              <StackIcon image={photoshop} />
              <StackIcon image={vscode} />
            </div>
          </div>
          <div id="container--svg">
              <dotlottie-player id="tech-stack--svg1" src="https://lottie.host/483654f2-3b9a-4f0b-809c-8afb6406a3d7/7awoLguslk.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              <dotlottie-player id="tech-stack--svg2" src="https://lottie.host/d3d23b3e-dd79-4b0b-b20e-8644c9f0cba4/vkFHlX4B29.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
            </div>
        </div>
        <div className="container--recent-work scroll-point" id="3">
          <div className="recent-work--header">
            <h2 className="recent-work--title">Recent Work</h2>
          </div>
          <Slider data={sliderData} />
        </div>
        <div className="container--contact scroll-point">
          <div className="contact--header" id="4">
            <h2 className="contact--title">Contact me</h2>
          </div>
        </div>
    </main>
  </div>
);
console.log(<Slider data={sliderData}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
