import { gsap } from 'gsap';

export default function Nav() {
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
                <a href="#1"><li className='nav--logo' onMouseEnter={mouseLogoOver} onMouseLeave={mouseLogoLeave}>Linus</li></a>
                <a href="#"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Resume<div className="border"></div></li></a>
                <a href="#2"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Tech Stack<div className="border"></div></li></a>
                <a href="#3"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Recent Work<div className="border"></div></li></a>
                <a href="#4"><li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Contact Me<div className="border"></div></li></a>
            </ul>
        </nav>
    )
}