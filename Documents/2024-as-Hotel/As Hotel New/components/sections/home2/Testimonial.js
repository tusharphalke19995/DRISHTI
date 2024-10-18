
import TestimonialSlider7 from '@/components/slider/TestimonialSlider7'

export default function Testimonial() {
    return (
        <>

<section className="section-padding">
      <div className="auto-container">
        <div className="section_heading mb_50 text-center">
          <span className="section_heading_title_small">Testimonials</span>
          <h2 className="section_heading_title_big">
            What They’re Say <br /> About Us?
          </h2>
        </div>
        <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="testimonial-1-block-wrap mx-lg-3">
          <div className="testimonial-2-shape-1">
            <img src="assets/images/shape/pattern-1.png" alt="" />
          </div>
          <div className="testimonial-2-shape-2"></div>
          <div className="content-box">
                {/*Theme Carousel*/}
                <TestimonialSlider7 />                        
            </div>
        </div>
      </div>
    </div>
      </div>
    </section>
        </>
    )
}
