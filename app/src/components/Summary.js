import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Card from './Card'

// Images
import projectHub from '../images/project_hub.png'
import genderPredictor from '../images/gender_predictor.png'
import profile from '../images/profile.png'
import profileSmile from '../images/profile_smile.png'

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
                    <text dy="1em" text-anchor="left">
                        Linus Elvius
                    </text>
                </svg>
                <h2 className="summary--title">Digital Craftsman</h2>
                <p className="summary--description">Hello there! I'm Linus, a passionate Full-Stack Web Developer dedicated to creating elegant and functional web solutions. Freshly graduated from Code Institute, I'm wholeheartedly committed to delivering exceptional digital experiences that not only meet but surpass the expectations of clients and end-users.</p>
                <div className="summary--cta">
                    <a href="#4" className="summary--contact" onMouseEnter={mouseOverContact} onMouseLeave={mouseLeaveContact}>Contact me</a>
                    <a href="#" className="summary--cv" onMouseEnter={mouseOverCV} onMouseLeave={mouseLeaveCV}>Download CV</a>
                </div>
                <h2 className="summary--projects-title">Top Projects</h2>
                <div className='summary--cards'>
                    <Card image={projectHub} title="Project Hub" description="Project Hub is a sharing platform mainly aimed at students of Code Institute looking to share their school projects and check out other students projects, but is open to everyone and all users are welcome." link="https://project-hub-0ecc1af6b9be.herokuapp.com/"/>
                    <Card image={genderPredictor} title="Gender predictor" description="An image classifier machine learning project for gender prediction utilizing convolutional neural networks (CNN)." link="https://gender-predictor-88b0cafee78b.herokuapp.com/"/>
                </div>
            </div>
        </div>
    )
}