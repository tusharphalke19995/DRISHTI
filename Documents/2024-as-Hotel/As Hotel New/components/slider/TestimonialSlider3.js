'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
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
            slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-4.jpg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                <p className="room-2-text mb_30">Mattis cras magna morb punar aene <br /> aliquet in. Risus a arcu eget.</p>
                                <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-5.jpg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                <p className="room-2-text mb_30">Mattis cras magna morb punar aene <br /> aliquet in. Risus a arcu eget.</p>
                                <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-6.jpg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                <p className="room-2-text mb_30">Mattis cras magna morb punar aene <br /> aliquet in. Risus a arcu eget.</p>
                                <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-7.jpg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                <p className="room-2-text mb_30">Mattis cras magna morb punar aene <br /> aliquet in. Risus a arcu eget.</p>
                                <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-8.jpg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details">Luxury Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                                <p className="room-2-text mb_30">Mattis cras magna morb punar aene <br /> aliquet in. Risus a arcu eget.</p>
                                <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                
            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>
        </>
    )
}
