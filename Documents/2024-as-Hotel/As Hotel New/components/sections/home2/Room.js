import Link from "next/link"
import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'


export default function Room() {
    return (
        <>            
            <section className="section-padding">
                <div className="d-flex flex-wrap">
                    <div className="room-2-left-column">
                    <div className="room-2-container">
                        <div className="section_heading mb_25">
                        <span className="section_heading_title_small">Discover</span>
                        <h2 className="section_heading_title_big">Our Rooms <br /> & Suites</h2>
                        </div>
                        <p className="mb_30">Amet dui scelerisque vel habitant eget <br /> tincidunt facilisis pretium. Porttitor mi nisi, <br /> non vitae tempus.</p>
                        
                    </div>
                    </div>
                    <div className="room-2-right-column">
                    <div className="room-2-container2">
                        <div className="swiper-container two-item-carousel">
                        <div className="swiper-wrapper">
                            {/* Repeat the following block for each room */}
                            <div className="swiper-slide">
                            <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider3 />                        
                    </div>
                            </div>
                            {/* End of room block */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 

        </>
    )
}
