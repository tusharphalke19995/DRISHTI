import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"


export default function Cases() {
    return (
        <>
            
            
            <section className="section-padding p-0">
                <div className="gray-bg p_absolute l_0 b_0 r_0 h_140"></div>
                <div className="auto-container">
                    <div className="project-1-wrapper">
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider1 />                        
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
