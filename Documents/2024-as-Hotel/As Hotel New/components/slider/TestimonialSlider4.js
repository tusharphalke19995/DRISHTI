'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                
                
                  
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                    {/* Slide Item */}
                  
                    <div className="swiper-slide">
                    <div className="testimonial-1-block">
                      <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                      <p className="testimonial-1-review-desc">Pretium nibh justo. Pulvinar rhoncus nullam porta netus in blandit maecenas Pulvinar interdum lacus nula nunc pelentesque neque fusce nibh ornare eget risus eget ipsum lacinia. Nunc netus ultrices sagittis
                                            diam vivera bibendum cras magna.</p>
                      <h4 className="testimonial-1-name">Ralph Edwards</h4>
                      <p className="testimonial-1-designation">Manager</p>
                      <div className="testimonial-1-author-thumb">
                        <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                 
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
      <div className="testimonial-1-block">
        <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
        <p className="testimonial-1-review-desc">
          Pretium nibh justo. Pulvinar rhoncus nullam porta netus in blandit maecenas Pulvinar interdum lacus nula nunc pelentesque neque fusce nibh ornare eget risus eget ipsum lacinia. Nunc netus ultrices sagittis
          diam vivera bibendum cras magna.
        </p>
        <h4 className="testimonial-1-name">Jacob Jones</h4>
        <p className="testimonial-1-designation">Manager</p>
        <div className="testimonial-1-author-thumb">
          <img src="assets/images/resource/testimonial-1.jpg" alt="" />
        </div>
      </div>
    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="swiper-slide">
                    <div className="testimonial-1-block">
                      <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                      <p className="testimonial-1-review-desc">Pretium nibh justo. Pulvinar rhoncus nullam porta netus in blandit maecenas Pulvinar interdum lacus nula nunc pelentesque neque fusce nibh ornare eget risus eget ipsum lacinia. Nunc netus ultrices sagittis
                                            diam vivera bibendum cras magna.</p>
                      <h4 className="testimonial-1-name">Ralph Edwards</h4>
                      <p className="testimonial-1-designation">Manager</p>
                      <div className="testimonial-1-author-thumb">
                        <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/*End single review box*/}
            </Swiper>

        </>
    )
}
