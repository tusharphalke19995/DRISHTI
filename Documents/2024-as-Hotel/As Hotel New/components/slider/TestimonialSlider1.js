'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/resource/project-1.jpg)' }}>
                    <div className="project-1-block">
                        <span className="section_heading_title_small">Discover</span>
                        <h2 className="section_heading_title_big fs_50 mb_20">Rooms & Suites</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Adipiscing integer ultrices suspendisse varius etiam est
                        tempus nec vitae orci sodales.</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/resource/project-2.jpg)' }}>
                        <div className="project-1-block">
                            <span className="section_heading_title_small">Discover</span>
                            <h2 className="section_heading_title_big fs_50 mb_20">Rooms & Suites</h2>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Adipiscing integer ultrices suspendisse varius etiam est
                            tempus nec vitae orci sodales.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/resource/project-3.jpg)' }}>
                    <div className="project-1-block">
                        <span className="section_heading_title_small">Discover</span>
                        <h2 className="section_heading_title_big fs_50 mb_20">Rooms & Suites</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Adipiscing integer ultrices suspendisse varius etiam est
                        tempus nec vitae orci sodales.</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                            <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/resource/project-3.jpg)' }}>
                            <div className="project-1-block">
                                <span className="section_heading_title_small">Discover</span>
                                <h2 className="section_heading_title_big fs_50 mb_20">Rooms & Suites</h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                Adipiscing integer ultrices suspendisse varius etiam est
                                tempus nec vitae orci sodales.</p>
                            </div>
                            </div>
                </SwiperSlide>                
            </Swiper>
        </>
    )
}

