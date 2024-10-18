
import Link from "next/link"
export default function Cta() {
    return (
        <>        
            
            <section className="cta-1-section">
              <div className="cta-1-bg" data-parallax='{"y": 30}' style={{ backgroundImage: 'url(assets/images/background/parallax-bg.jpg)' }}></div>
              <div className="auto-container">
                <div className="section_heading text-center mb_40">
                  <span className="section_heading_title_small">Testimonials</span>
                  <h2 className="section_heading_title_big alt">Looking for a Relaxing Country <br /> Vacation Rental?</h2>
                </div>
                <div className="text-center">
                  <div className="cta-1-link-bt">
                    <Link href="/" className="btn-1">Check Availability<span></span></Link>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
