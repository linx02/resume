import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

export default function StackIcon(props) {
    // const iconRef = useRef(null);

    // useEffect(() => {
    //     gsap.from('.stack-icon', {
    //         duration: 0.9,
    //         ease: 'ease-out',
    //         y: 15,
    //         opacity: 0,
    //         stagger: 0.1,
    //         scrollTrigger: {
    //             trigger: '.stack-icon',
    //             start: 'top bottom-=100',
    //             toggleActions: 'play none none none',
    //             markers: true,
    //         }
    //     });
    // }, []);
    

    return (
        <div className="stack-icon">
            <img src={props.image} alt="Icon" />
        </div>
    )
}