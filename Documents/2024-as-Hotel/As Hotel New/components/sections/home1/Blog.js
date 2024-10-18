
import Link from "next/link"
export default function Blog() {
    return (
        <>        
            
            <section className="section-padding">
              <div className="auto-container">
                <div className="section_heading text-center mb_60">
                  <span className="section_heading_title_small">Our Article</span>
                  <h2 className="section_heading_title_big">Get More Update For <br /> Royalking</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                      <div className="blog-1-image">
                        <Link href="/blog-details"><img src="assets/images/resource/blog-1.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-1-bottom-content">
                        <div className="blog-1-date">15 APRIL</div>
                        <h4 className="blog-1-title"><Link href="/blog-details">Our New Miami Beach Hotel Is Open!</Link></h4>
                        <ul className="d-flex blog-1-meta-info">
                          <li>Admin</li>
                          <li>0 Comment</li>
                        </ul>
                        <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                      <div className="blog-1-image">
                        <Link href="/blog-details"><img src="assets/images/resource/blog-2.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-1-bottom-content">
                        <div className="blog-1-date">15 APRIL</div>
                        <h4 className="blog-1-title"><Link href="/blog-details">Know the secret of Royalking Resort</Link></h4>
                        <ul className="d-flex blog-1-meta-info">
                          <li>Admin</li>
                          <li>0 Comment</li>
                        </ul>
                        <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                    <div className="blog-1-block">
                      <div className="blog-1-image">
                        <Link href="/blog-details"><img src="assets/images/resource/blog-3.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-1-bottom-content">
                        <div className="blog-1-date">15 APRIL</div>
                        <h4 className="blog-1-title"><Link href="/blog-details">How to book a Resort in the best price on Mountains</Link></h4>
                        <ul className="d-flex blog-1-meta-info">
                          <li>Admin</li>
                          <li>0 Comment</li>
                        </ul>
                        <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                        <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
