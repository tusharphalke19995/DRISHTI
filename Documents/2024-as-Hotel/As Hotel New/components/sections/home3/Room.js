import TestimonialSlider5 from '@/components/slider/TestimonialSlider5'
export default function Room() {
    return (
        <>
           <section className="section-padding gray-bg">
              <div className="container-fluid">
                <div className="section_heading text-center mb_50">
                  <span className="section_heading_title_small">Discover</span>
                  <h2 className="section_heading_title_big">Rooms & Suites</h2>
                </div>
                <div className="content-box">
                    <TestimonialSlider5 />                        
                </div>
              </div>
          </section> 
        </>
    )
}
