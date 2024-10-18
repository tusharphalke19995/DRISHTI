import TestimonialSlider2 from '@/components/slider/TestimonialSlider2'






export default function Testimonial() {
    return (
        <>
       <section className="section-padding">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section_heading mb_20">
              <span className="section_heading_title_small">Testimonials</span>
              <h2 className="section_heading_title_big">What <br /> They’re Say <br /> About Us?</h2>
            </div>
            <p className="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br /> tincidunt facilisis pretium. Porttitor mi <br /> nisi, non vitae tempus.</p>
          </div>
          <div className="col-lg-8">
            <div className="testimonial-1-block-wrap">
              <div className="testimonial-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
              <div className="content-box">
                {/*Theme Carousel*/}
                <TestimonialSlider2 />                        
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </>
    )
}
