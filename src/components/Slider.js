import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider(props) {

    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
            {props.data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="slide--container">
                        <div className="slide--info">
                            <h2 className="slide--title">{item.title}</h2>
                            <p className="slide--description">{item.description}</p>
                            <div className="slide--cta">
                                <a href={item.github} className="slide--github" target="_blank">View on <i className="fa-brands fa-github fa-xl"></i></a>
                                {
                                item.live ?
                                <a href={item.live} className="slide--live" target="_blank">View live <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                                : <a href={item.live} className="slide--liv link-inactive" target="_blank">View live <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>}
                            </div>
                        </div>
                        <div className="slide--preview">
                            <img src={process.env.PUBLIC_URL + '/images/projects/' + item.image} alt="Slide preview" className="slide--img" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};