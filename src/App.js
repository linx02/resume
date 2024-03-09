// React
import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// CSS
import './css/styles.css';
import './css/LoadingScreen.css';
import './css/Card.css';
import './css/Nav.css';
import './css/Summary.css';
import './css/Profile.css';
import './css/StackIcon.css';
import './css/Slider.css';
import './css/ContactForm.css';
import './index.css';
// Components
import Nav from './components/Nav';
import Summary from './components/Summary';
import Profile from './components/Profile'
import StackIcon from './components/StackIcon';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
// Slider data
import sliderData from './slider_data.json';

gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {

  // implement loading screen
});


export default function App() {

    useEffect(() => {
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
    }, [])

    return (
    <div>
        <Nav />
        <main>
            <div className="placeholder scroll-point" id="landing-page"></div>
            <div className="container--main">
            <Summary />
            <Profile />
            </div>
            <div className="container--tech-stack scroll-point">
            <div className="tech-stack--header">
                <h2 className="tech-stack--title">My Tech Stack</h2>
                <h3 className="tech-stack--sub-header">Languages</h3>
                <div className="tech-stack--icons">
                <StackIcon image={'/images/techstack/html.png'} />
                <StackIcon image={'/images/techstack/css.png'} />
                <StackIcon image={'/images/techstack/js.png'} />
                <StackIcon image={'/images/techstack/python.png'} />
                </div>
                <h3 className="tech-stack--sub-header">Frameworks</h3>
                <div className="tech-stack--icons">
                <StackIcon image={'/images/techstack/react.png'} />
                <StackIcon image={'/images/techstack/next.png'} />
                <StackIcon image={'/images/techstack/tailwind.png'} />
                <StackIcon image={'/images/techstack/django.png'} />
                <StackIcon image={'/images/techstack/flask.png'} />
                <StackIcon image={'/images/techstack/tensorflow.png'} />
                </div>
                <h3 className="tech-stack--sub-header">Tools</h3>
                <div className="tech-stack--icons">
                <StackIcon image={'/images/techstack/github.png'} />
                <StackIcon image={'/images/techstack/photoshop.png'} />
                <StackIcon image={'/images/techstack/vscode.png'} />
                <StackIcon image={'/images/techstack/figma.png'} />
                <StackIcon image={'/images/techstack/atlassian.png'} />
                </div>
            </div>
            <div id="container--svg">
                <dotlottie-player id="tech-stack--svg1" src="https://lottie.host/27071cbc-0405-43ea-851b-9cdd5d2c93a3/a29IR4WVvB.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                <dotlottie-player id="tech-stack--svg2" src="https://lottie.host/bf1fd2d5-9d1b-4369-bddb-e3676ba8ef63/XVEYjz8peV.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                </div>
            </div>
            <div className="container--recent-work scroll-point" id="recent-work">
            <div className="recent-work--header">
                <h2 className="recent-work--title">Recent Work</h2>
            </div>
            <Slider data={sliderData} />
            </div>
            <div className="container--merits scroll-point" id="merits">
            <div className="merits--header">
                <h2 className="merits--title">Merits & Certifications</h2>
            </div>
            <div className="merits--container">
                <div className="merits--micro">
                <a target="_blank" href="https://www.freecodecamp.org/certification/linx02/foundational-c-sharp-with-microsoft">
                    <div className="merit">
                    <h3 className="merits--sub-header">Foundational C# - Microsoft <i className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <img src={'/images/other/foundationalcsharp.png'} alt="Thumbnail" />
                    </div>
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=5NgNicANyqM">
                    <div className="merit">
                    <h3 className="merits--sub-header">Harvard CS50's AI with Python <i className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <img src={'/images/other/harvardai.png'} alt="Thumbnail" />
                    </div>
                </a>
                <a target="_blank" href="https://github.com/linx02/leetcode-solutions">
                    <div className="merit">
                    <h3 className="merits--sub-header">My LeetCode Solutions <i className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <img src={'/images/other/leetcode.png'} alt="Thumbnail" />
                    </div>
                </a>
                <a target="_blank" href="https://eu.badgr.com/public/assertions/WA-0oTSnR_-G1KqhU98zjw?identity__email=elvius.linus@gmail.com">
                    <div className="merit">
                    <h3 className="merits--sub-header">CI Hackathon Participation <i className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <img src={'/images/other/hackathon.png'} alt="Thumbnail" />
                    </div>
                </a>
                </div>
                <img className="diploma" src={'/images/other/diploma.png'} alt="Code Institute - Full stack software development diploma" />
            </div>
            </div>
            <div className="container--contact scroll-point">
            <div className="contact--header" id="contact-me">
                <h2 className="contact--title">Contact me</h2>
            </div>
            <div className="contactform--container">
                <ContactForm />
            </div>
            <div className="container--thanks">
                <h2>Thank you for reaching out</h2>
                <h3>Here's a digital bottle of wine to get us off on a positive note:</h3>
                <img src={'/images/other/wine.png'} alt="Bottle of wine" id="wine"/>
            </div>
            <div className="socials">
                <a target="_blank" href="https://github.com/linx02"><i className="fa-brands fa-github fa-2xl"></i></a>
                <a target="_blank" href="https://linkedin.com/in/linus-elvius-52b098266/"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
            </div>
        </main>
    </div>
    );
}