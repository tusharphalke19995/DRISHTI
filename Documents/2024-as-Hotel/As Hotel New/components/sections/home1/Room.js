
import Link from "next/link"
export default function Room() {
    return (
        <>        
            
            <section className="section-padding">
                <div className="auto-container">
                    <div className="section_heading text-center mb_55">
                    <span className="section_heading_title_small">Discover</span>
                    <h2 className="section_heading_title_big">Rooms & Suites</h2>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="room-1-image hvr-img-zoom-1">
                            <img src="assets/images/resource/room-1.jpg" alt="" />
                        </div>
                        <div className="room-1-content">
                            <p className="room-1-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                            <div className="room-1-rating">
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-7"></i>
                            </div>
                            <h4 className="room-1-title mb_20"><Link href="/room-details">Luxury Room</Link></h4>
                            <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                            <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.2s">
                        <div className="room-1-image hvr-img-zoom-1">
                            <img src="assets/images/resource/room-2.jpg" alt="" />
                        </div>
                        <div className="room-1-content">
                            <p className="room-1-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                            <div className="room-1-rating">
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-7"></i>
                            </div>
                            <h4 className="room-1-title mb_20"><Link href="/room-details">Deluxe Room</Link></h4>
                            <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                            <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                        <div className="room-1-image hvr-img-zoom-1">
                            <img src="assets/images/resource/room-3.jpg" alt="" />
                        </div>
                        <div className="room-1-content">
                            <p className="room-1-meta-info">Start from <span className="theme-color">$55.0</span>/night</p>
                            <div className="room-1-rating">
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-6"></i>
                            <i className="icon-7"></i>
                            </div>
                            <h4 className="room-1-title mb_20"><Link href="/room-details">Luxury Room</Link></h4>
                            <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                            <div className="link-btn"><Link href="/room-details" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
