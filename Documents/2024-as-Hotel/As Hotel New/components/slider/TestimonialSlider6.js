'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider6() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
                                        <div className="testimonial-1-block">
                                            <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                                            <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                                aenean aliquet in. Risus a arcu eget
                                                mi hendrerit gravida elit scelerisque
                                                tempor Pharetra fringilla tellus vivera
                                                eget sapien viverra faucibus facilisis
                                                sed facilisi dictum.”</p>
                                            <h4 className="testimonial-1-name">Jacob Jones</h4>
                                            <p className="testimonial-1-designation">Manager</p>
                                            <div className="testimonial-1-author-thumb">
                                                <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
                                        <div className="testimonial-1-block">
                                            <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                                            <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                                aenean aliquet in. Risus a arcu eget
                                                mi hendrerit gravida elit scelerisque
                                                tempor Pharetra fringilla tellus vivera
                                                eget sapien viverra faucibus facilisis
                                                sed facilisi dictum.”</p>
                                            <h4 className="testimonial-1-name">Ralph Edwards</h4>
                                            <p className="testimonial-1-designation">Manager</p>
                                            <div className="testimonial-1-author-thumb">
                                                <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
                                        <div className="testimonial-1-block">
                                            <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                                            <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                                aenean aliquet in. Risus a arcu eget
                                                mi hendrerit gravida elit scelerisque
                                                tempor Pharetra fringilla tellus vivera
                                                eget sapien viverra faucibus facilisis
                                                sed facilisi dictum.”</p>
                                            <h4 className="testimonial-1-name">Ralph Edwards</h4>
                                            <p className="testimonial-1-designation">Manager</p>
                                            <div className="testimonial-1-author-thumb">
                                                <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
                                        <div className="testimonial-1-block">
                                            <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                                            <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                                                aenean aliquet in. Risus a arcu eget
                                                mi hendrerit gravida elit scelerisque
                                                tempor Pharetra fringilla tellus vivera
                                                eget sapien viverra faucibus facilisis
                                                sed facilisi dictum.”</p>
                                            <h4 className="testimonial-1-name">Ralph Edwards</h4>
                                            <p className="testimonial-1-designation">Manager</p>
                                            <div className="testimonial-1-author-thumb">
                                                <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                </SwiperSlide>

                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev h1p">
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next h1n">
                        <span aria-label="Next">›</span>
                    </button>
                </div>

            </Swiper>

        </>
    )
}
