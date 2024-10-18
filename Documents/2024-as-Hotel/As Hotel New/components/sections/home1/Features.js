import Link from "next/link"


export default function Features() {
    return (
        <>
        
        <section className="section-padding">
      <div className="gray-bg p_absolute l_0 b_0 r_0 h_340"></div>
      <div className="auto-container">
        <div className="section_heading text-center mb_60">
          <span className="section_heading_title_small">Exclusive Offers</span>
          <h2 className="section_heading_title_big">Featured Special <br /> Offers</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-1.jpg" alt="" /></div>
              <h4 className="feature-1-title">Kick off Summer <br /> in NYC</h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-5"></i></Link></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt="" /></div>
              <h4 className="feature-1-title">Free Breakfast <br /> Packages</h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-5"></i></Link></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt="" /></div>
              <h4 className="feature-1-title">The Signature <br /> Collection</h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="/service-details"><i className="icon-5"></i></Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
