import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
export default function About() {
    return (
        <> 

            <section className="section-padding">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About Royalking</span>
                        <h2 className="section_heading_title_big">Luxury <br /> Hotel in The Heart of <br /> San Francisco.</h2>
                        </div>
                        <p className="aboout-1-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
                        ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
                        Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
                        amet odio est. Sit semper et velit fusce.</p>
                        <div className="about-1-btn mb_30">
                        <Link href="/about" className="btn-1">Discover More<span></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="about-2-image-wrap mb_30 p_relative">
                        <div className="about-2-shape-1"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                        <div className="about-2-image-1" data-parallax='{"y": -20}'><img src="assets/images/resource/about-2.jpg" alt="" /></div>
                        <div className="about-2-image-2" data-parallax='{"y": 20}'><img src="assets/images/resource/about-3.jpg" alt="" /></div>
                        <div className="about-2-video-area">
                            <div className="about-2-video-btn">
                                <div className="video-btn">
                                        <VideoPopup />
                                </div>
                            </div>
                            <p className="about-2-video-title">Watch Exclusive <br /> Video</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}
