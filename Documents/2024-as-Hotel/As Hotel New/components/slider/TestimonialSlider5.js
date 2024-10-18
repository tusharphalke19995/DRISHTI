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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                          <div className="swiper-slide">
                              <div
                                className="room-2-block alt wow fadeInUp"
                                data-wow-delay=".2s"
                                data-wow-duration=".8s"
                                style={{
                                  backgroundImage: 'url(assets/images/resource/room-8.jpg)',
                                }}
                              >
                                <div className="room-2-content">
                                  <h4 className="room-2-title">
                                    <Link href="/room-details">Delux Room</Link>
                                  </h4>
                                </div>
                                <div className="room-2-content2">
                                  <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                  </div>
                                  <h4 className="room-2-title">
                                    <Link href="/room-details">Luxury Room</Link>
                                  </h4>
                                  <p className="room-2-meta-info">
                                    Start from <span className="theme-color">$55.0</span>/night
                                  </p>
                                  <p className="room-2-text mb_20">
                                    Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.
                                  </p>
                                  <div className="link-btn">
                                    <Link href="/" className="btn-1 btn-small">
                                      Book Now <span></span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="swiper-slide">
      <div
        className="room-2-block alt wow fadeInUp"
        data-wow-delay=".2s"
        data-wow-duration=".8s"
        style={{
          backgroundImage: 'url(assets/images/resource/room-9.jpg)',
        }}
      >
        <div className="room-2-content">
          <h4 className="room-2-title">
            <Link href="/room-details">Queen Room</Link>
          </h4>
        </div>
        <div className="room-2-content2">
          <div className="room-2-rating">
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-7"></i>
          </div>
          <h4 className="room-2-title">
            <Link href="/room-details">Classic Room</Link>
          </h4>
          <p className="room-2-meta-info">
            Start from <span className="theme-color">$55.0</span>/night
          </p>
          <p className="room-2-text mb_20">
            Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.
          </p>
          <div className="link-btn">
            <Link href="/" className="btn-1 btn-small">
              Book Now <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="swiper-slide">
          <div className="room-2-block alt wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-10.jpg)" }}>
            <div className="room-2-content">
              <h4 className="room-2-title"><Link href="/room-details">Luxury Room</Link></h4>
            </div>
            <div className="room-2-content2">
              <div className="room-2-rating">
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-7"></i>
              </div>
              <h4 className="room-2-title"><Link href="/room-details">Queen Room</Link></h4>
              <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
              <p className="room-2-text mb_20">Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.</p>
              <div className="link-btn"><Link href="/" className="btn-1 btn-small">Book Now <span></span></Link></div>
            </div>
          </div>
        </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="swiper-slide">
          <div className="room-2-block alt wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/resource/room-11.jpg)" }}>
            <div className="room-2-content">
              <h4 className="room-2-title"><Link href="/room-details">Queen Room</Link></h4>
            </div>
            <div className="room-2-content2">
              <div className="room-2-rating">
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-6"></i>
                <i className="icon-7"></i>
              </div>
              <h4 className="room-2-title"><Link href="/room-details">Luxury Room</Link></h4>
              <p className="room-2-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
              <p className="room-2-text mb_20">Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.</p>
              <div className="link-btn"><Link href="/" className="btn-1 btn-small">Book Now <span></span></Link></div>
            </div>
          </div>
        </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="swiper-slide">
      <div
        className="room-2-block alt wow fadeInUp"
        data-wow-delay=".2s"
        data-wow-duration=".8s"
        style={{
          backgroundImage: 'url(assets/images/resource/room-12.jpg)',
        }}
      >
        <div className="room-2-content">
          <h4 className="room-2-title">
            <Link href="/room-details">Delux Room</Link>
          </h4>
        </div>
        <div className="room-2-content2">
          <div className="room-2-rating">
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-7"></i>
          </div>
          <h4 className="room-2-title">
            <Link href="/room-details">Queen Room</Link>
          </h4>
          <p className="room-2-meta-info">
            Start from <span className="theme-color">$55.0</span>/night
          </p>
          <p className="room-2-text mb_20">
            Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.
          </p>
          <div className="link-btn">
            <Link href="/" className="btn-1 btn-small">
              Book Now <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div> 
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="swiper-slide">
      <div
        className="room-2-block alt wow fadeInUp"
        data-wow-delay=".2s"
        data-wow-duration=".8s"
        style={{
          backgroundImage: 'url(assets/images/resource/room-13.jpg)',
        }}
      >
        <div className="room-2-content">
          <h4 className="room-2-title">
            <Link href="/room-details">Delux Room</Link>
          </h4>
        </div>
        <div className="room-2-content2">
          <div className="room-2-rating">
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-6"></i>
            <i className="icon-7"></i>
          </div>
          <h4 className="room-2-title">
            <Link href="/room-details">Classic Room</Link>
          </h4>
          <p className="room-2-meta-info">
            Start from <span className="theme-color">$55.0</span>/night
          </p>
          <p className="room-2-text mb_20">
            Mattis cras magna morb punar <br /> aliquet in. Risus a arcu eget.
          </p>
          <div className="link-btn">
            <Link href="/" className="btn-1 btn-small">
              Book Now <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
