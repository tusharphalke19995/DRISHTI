import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Testimonials">
            <section className="section-padding testimonial-page">
      <div className="auto-container">
        <div className="section_heading text-center mb_50">
          <span className="section_heading_title_small">Testimonials</span>
          <h2 className="section_heading_title_big">What They’re Say <br /> About Us?</h2>
        </div>
        <div className="row">
          {/* First Testimonial */}
          <div className="col-lg-4 col-md-6">
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

          {/* Second Testimonial */}
          <div className="col-lg-4 col-md-6">
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

          {/* Third Testimonial */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-1-block">
              <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
              <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                aenean aliquet in. Risus a arcu eget
                mi hendrerit gravida elit scelerisque
                tempor Pharetra fringilla tellus vivera
                eget sapien viverra faucibus facilisis
                sed facilisi dictum.”</p>
              <h4 className="testimonial-1-name">Philip Joseph</h4>
              <p className="testimonial-1-designation">Manager</p>
              <div className="testimonial-1-author-thumb">
                <img src="assets/images/resource/testimonial-3.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* Repeat the structure for the rest of the testimonials */}
          {/* First Testimonial */}
          <div className="col-lg-4 col-md-6">
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

          {/* Second Testimonial */}
          <div className="col-lg-4 col-md-6">
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

          {/* Third Testimonial */}
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-1-block">
              <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
              <p className="testimonial-1-review-desc">“Mattis cras magna morb nula punar
                aenean aliquet in. Risus a arcu eget
                mi hendrerit gravida elit scelerisque
                tempor Pharetra fringilla tellus vivera
                eget sapien viverra faucibus facilisis
                sed facilisi dictum.”</p>
              <h4 className="testimonial-1-name">Philip Joseph</h4>
              <p className="testimonial-1-designation">Manager</p>
              <div className="testimonial-1-author-thumb">
                <img src="assets/images/resource/testimonial-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

            </Layout>
        </>
    )
}
