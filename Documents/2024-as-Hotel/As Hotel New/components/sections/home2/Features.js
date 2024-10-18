import Link from "next/link"


export default function Features() {
    return (
        <>
           
           <section className="section-padding gray-bg">
                <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: "url(assets/images/shape/pattern-2.png) no-repeat left bottom" }}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">Exclusive Offers</span>
                    <h2 className="section_heading_title_big">Featured Special <br /> Offers</h2>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-1.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Kick off Summer <br /> in NYC</h4>
                            <p className="feature-2-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Free Breakfast <br /> Packages</h4>
                            <p className="feature-2-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">The Signature <br /> Collection</h4>
                            <p className="feature-2-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}
