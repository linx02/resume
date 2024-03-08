import { gsap } from 'gsap';
import React, { useEffect } from 'react';

export default function Nav() {

    useEffect(() => {
        gsap.from('.nav--item', {
            duration: 0.9,
            ease: 'ease-out',
            y: -150,
        });

        gsap.from('.nav--logo', {
            duration: 0.9,
            ease: 'ease-out',
            scale: 0,
            opacity: 0,
        });
    }, []);

    function mouseLogoOver() {
         gsap.to('.nav--logo', {
             duration: .5,
             ease: 'ease-in-out',
             color: 'white',
             backgroundColor: 'black'
         })
    }

    function mouseLogoLeave() {
        gsap.to('.nav--logo', {
            duration: .5,
            ease: 'ease-in-out',
            color: 'black',
            backgroundColor: 'white'
        })
    }

    function mouseOver(event) {
        gsap.to(event.currentTarget.querySelector('.border'), {
            duration: 0.4,
            ease: 'power2.inOut',
            transformOrigin: 'left',
            scaleX: 1,
        })
    }

   function mouseLeave(event) {
       gsap.to(event.currentTarget.querySelector('.border'), {
           duration: 0.4,
           ease: 'power2.inOut',
           transformOrigin: 'right',
           scaleX: 0,
       })
    }

    return (
        <nav>
            <ul>
                <a href="#landing-page"><li className='nav--logo' onMouseEnter={mouseLogoOver} onMouseLeave={mouseLogoLeave}>Linus</li></a>
                <a href="#recent-work"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Recent Work <i className="fa-solid fa-laptop-code fa-sm"></i><div className="border"></div></li></a>
                <a href="#merits"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Merits <i className="fa-solid fa-award fa-sm"></i><div className="border"></div></li></a>
                <a href="#contact-me"><li className='nav--item contact-nav'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Contact Me <i className="fa-regular fa-envelope fa-sm"></i><div className="border"></div></li></a>
            </ul>
        </nav>
    )
}