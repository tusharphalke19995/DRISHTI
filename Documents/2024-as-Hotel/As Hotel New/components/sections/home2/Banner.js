'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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



}

export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                    <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/banner-1.jpg)'}}>
      <div className="content-outer">
        <div className="content-box justify-content-center text-center">
          <div className="inner">
            <h4>Summer Vacations</h4>
            <h1>Luxury Hotel For <br /> Vacation.</h1>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis ridiculus tellus.</div>
            <div className="link-box">
              <Link href="/room-1" className="btn-1">Book Room <span></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/banner-2.jpg)'}}>
      <div className="content-outer">
        <div className="content-box justify-content-center text-center">
          <div className="inner">
            <h4>Summer Vacations</h4>
            <h1>Your Home For <br /> Vacation.</h1>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis ridiculus tellus.</div>
            <div className="link-box">
              <Link href="/room-1" className="btn-1">Book Room <span></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                        
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}