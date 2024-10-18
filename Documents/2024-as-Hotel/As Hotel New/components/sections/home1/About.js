import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="section-padding gray-bg pt-0">
                <div className="auto-container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="about-1-image-wrap mb_30 p_relative">
                        <div className="about-1-shape-1" data-parallax='{"y": -50}'></div>
                        <div className="about-1-image-1 hvr-img-zoom-1">
                          <img src="assets/images/resource/about.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                      <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About Royalking</span>
                        <h2 className="section_heading_title_big">
                          Luxury <br /> Hotel in The Heart of <br /> San Francisco.
                        </h2>
                      </div>
                      <p className="aboout-1-desc mb_30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius
                        etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum
                        ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.
                      </p>
                      <div className="about-1-btn mb_30">
                        <Link href="/about" className="btn-1">
                          Discover More<span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}
