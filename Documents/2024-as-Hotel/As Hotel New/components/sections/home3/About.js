import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="section-padding">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="mb-30 t__15 p_relative"            >
                            <img src="assets/images/resource/about-4.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-30 t_15 p_relative" data-parallax='{"y": -30}'>
                            <img src="assets/images/resource/about-5.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About Royalking</span>
                        <h2 className="section_heading_title_big">Luxury Hotel in The <br /> Heart of Mexico.</h2>
                        </div>
                        <p className="aboout-1-desc mb_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
                        ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
                        Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
                        amet odio est. Sit semper et velit fusce.</p>
                        <ul className="list-1 mb_30">
                        <li><i className="icon-20"></i>Powerful Admin Panel</li>
                        <li><i className="icon-20"></i>Multi-Language Support</li>
                        </ul>
                        <div className="about-1-btn mb_30">
                        <Link href="/about" className="btn-1">Discover More<span></span></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
