import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Card from './Card'

export default function Summary() {

    useEffect(() => {
        gsap.from('.summary--description', {
            duration: 1,
            ease: 'ease-out',
            opacity: 0,
            y: 15,
        });

        gsap.from('.summary--contact', {
            duration: 2,
            ease: 'ease-out',
            opacity: 0,
        });

        gsap.from('.summary--cv', {
            duration: 2,
            ease: 'ease-out',
            opacity: 0,
        });

    }, []);

    function mouseOverContact(event) {
        gsap.to('.summary--contact', {
            duration: 0.4,
            ease: 'ease-in-out',
            backgroundColor: 'white',
            color: 'black'
        })
        
        const profile = document.querySelector('.profile')
        profile.classList.remove('smile')
        profile.classList.add('normal')
    }

    function mouseLeaveContact(event) {
        gsap.to('.summary--contact', {
            duration: 0.4,
            ease: 'ease-in-out',
            backgroundColor: 'black',
            color: 'white'
        })

        const profile = document.querySelector('.profile')
        profile.classList.remove('smile')
        profile.classList.add('normal')
    }

    function mouseOverCV(event) {
        gsap.to('.summary--cv', {
            duration: 0.4,
            ease: 'ease-in-out',
            color: 'white',
            backgroundColor: 'black'
        })
    }

    function mouseLeaveCV(event) {
        gsap.to('.summary--cv', {
            duration: 0.4,
            ease: 'ease-in-out',
            backgroundColor: 'white',
            color: 'black',
        })
    }

    return (
        <div className='summary'>
            <div className="summary--container">
                <svg viewBox="0 0 1320 150">
                    <text dy="1em" textAnchor="left">
                        Linus Elvius
                    </text>
                </svg>
                <h2 className="summary--title">Digital Craftsman</h2>
                <p className="summary--description">Hello! I'm Linus, a passionate Software Developer with a broad skill set spanning both front-end and back-end technologies. Proficient in creating user-centric solutions, I leverage my versatile expertise to bring ideas to life. Let's connect and explore how my skills can contribute to your next endeavor.</p>
                <div className="summary--cta">
                    <a href="#contact-me" className="summary--contact" onMouseEnter={mouseOverContact} onMouseLeave={mouseLeaveContact}>Contact Me <i className="fa-regular fa-envelope"></i></a>
                    <a target="_blank" href="/CV.pdf" className="summary--cv" onMouseEnter={mouseOverCV} onMouseLeave={mouseLeaveCV}>Download CV <i className="fa-solid fa-file-pdf"></i></a>
                </div>
                <h2 className="summary--projects-title">Top Projects</h2>
                <div className='summary--cards'>
                    <Card image={'/images/projects/project_hub.png'} title="Project Hub" description="Project Hub is a sharing platform mainly aimed at students of Code Institute looking to share their school projects and check out other students projects, but is open to everyone and all users are welcome." link="https://project-hub-0ecc1af6b9be.herokuapp.com/"/>
                    <Card image={'images/projects/gender_predictor.png'} title="Gender predictor" description="An image classifier machine learning project for gender prediction utilizing convolutional neural networks (CNN)." link="https://gender-predictor-88b0cafee78b.herokuapp.com/"/>
                </div>
            </div>
        </div>
    )
}