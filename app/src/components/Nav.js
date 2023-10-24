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
                <li className='nav--logo' onMouseEnter={mouseLogoOver} onMouseLeave={mouseLogoLeave}>Linus Elvius</li>
                <li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Resume <div className="border"></div></li>
                <li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Skills <div className="border"></div></li>
                <li className='nav--item'onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>Projects <div className="border"></div></li>
            </ul>
        </nav>
    )
}