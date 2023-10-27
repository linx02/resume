import { gsap } from 'gsap';

export default function Card(props) {

    function mouseOver(event) {
        gsap.to(event.currentTarget, {
            duration: 0.4,
            ease: 'ease-in-out',
            scale: 1.03,
        })
    }

    function mouseLeave(event) {
        gsap.to(event.currentTarget, {
            duration: 0.4,
            ease: 'ease-in-out',
            scale: 1,
        })
    }

    return (
        <a href={props.link} className="card--link" target="_blank">
            <div className='card' onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                <img src={props.image} alt="Card" className="card--img" />
                <div className="card--content">
                    <h3 className="card--title">{props.title}</h3>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
        </a>
    )
}