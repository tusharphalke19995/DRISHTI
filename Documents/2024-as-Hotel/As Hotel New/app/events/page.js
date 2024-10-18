import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Events">
                <div>
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="row">
                        {/* Repeat this block for each event */}
                        <div className="col-lg-12">
                            <div
                            className="event-1-block align-items-center d-flex wow fadeInLeft"
                            data-wow-delay=".2s"
                            data-wow-duration=".8s"
                            >
                            <div className="event-1-image">
                                <Link href="/event-details">
                                <img src="assets/images/resource/event-1.jpg" alt="" />
                                </Link>
                            </div>
                            <div className="event-1-bottom-content">
                                <h4 className="event-1-title mb_5">
                                <Link href="/event-details">3 Days Wedding Party</Link>
                                </h4>
                                <p className="event-1-meta-info mb_15">
                                17 - 20 Oct, 2022 / 11:00AM - 04:00PM / 340 w 50th st, New York.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae.
                                Curabitur at amet, enim sit <br />
                                commodo semper lectus phasellus.
                                </p>
                                <div className="link-btn">
                                <Link href="/event-details" className="btn-1 btn-alt">
                                    More Details<span></span>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End of event block */}
                        <div className="col-lg-12">
                            <div
                            className="event-1-block align-items-center d-flex wow fadeInLeft"
                            data-wow-delay=".2s"
                            data-wow-duration=".8s"
                            >
                            <div className="event-1-image">
                                <Link href="/event-details">
                                <img src="assets/images/resource/event-2.jpg" alt="" />
                                </Link>
                            </div>
                            <div className="event-1-bottom-content">
                                <h4 className="event-1-title mb_5">
                                <Link href="/event-details">San Francisco Pool Party</Link>
                                </h4>
                                <p className="event-1-meta-info mb_15">
                                17 - 20 Oct, 2022 / 11:00AM - 04:00PM / 340 w 50th st, New York.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae.
                                Curabitur at amet, enim sit <br />
                                commodo semper lectus phasellus.
                                </p>
                                <div className="link-btn">
                                <Link href="/event-details" className="btn-1 btn-alt">
                                    More Details<span></span>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div
                            className="event-1-block align-items-center d-flex wow fadeInLeft"
                            data-wow-delay=".2s"
                            data-wow-duration=".8s"
                            >
                            <div className="event-1-image">
                                <Link href="/event-details">
                                <img src="assets/images/resource/event-3.jpg" alt="" />
                                </Link>
                            </div>
                            <div className="event-1-bottom-content">
                                <h4 className="event-1-title mb_5">
                                <Link href="/event-details">Sunday Lunch Party</Link>
                                </h4>
                                <p className="event-1-meta-info mb_15">
                                17 - 20 Oct, 2022 / 11:00AM - 04:00PM / 340 w 50th st, New York.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae.
                                Curabitur at amet, enim sit <br />
                                commodo semper lectus phasellus.
                                </p>
                                <div className="link-btn">
                                <Link href="/event-details" className="btn-1 btn-alt">
                                    More Details<span></span>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div
                            className="event-1-block align-items-center d-flex wow fadeInLeft"
                            data-wow-delay=".2s"
                            data-wow-duration=".8s"
                            >
                            <div className="event-1-image">
                                <Link href="/event-details">
                                <img src="assets/images/resource/event-4.jpg" alt="" />
                                </Link>
                            </div>
                            <div className="event-1-bottom-content">
                                <h4 className="event-1-title mb_5">
                                <Link href="/event-details">Musical Festival Party</Link>
                                </h4>
                                <p className="event-1-meta-info mb_15">
                                17 - 20 Oct, 2022 / 11:00AM - 04:00PM / 340 w 50th st, New York.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae.
                                Curabitur at amet, enim sit <br />
                                commodo semper lectus phasellus.
                                </p>
                                <div className="link-btn">
                                <Link href="/event-details" className="btn-1 btn-alt">
                                    More Details<span></span>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                            <div className="col-lg-12">
                                <div
                                className="event-1-block align-items-center d-flex wow fadeInLeft"
                                data-wow-delay=".2s"
                                data-wow-duration=".8s"
                                >
                                <div className="event-1-image">
                                    <Link href="/event-details">
                                    <img src="assets/images/resource/event-5.jpg" alt="" />
                                    </Link>
                                </div>
                                    <div className="event-1-bottom-content">
                                            <h4 className="event-1-title mb_5">
                                                <Link href="/event-details">DJ Party Night</Link>
                                            </h4>
                                            <p className="event-1-meta-info mb_15">
                                                17 - 20 Oct, 2022 / 11:00AM - 04:00PM / 340 w 50th st, New York.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae.
                                                Curabitur at amet, enim sit <br />
                                                commodo semper lectus phasellus.
                                            </p>
                                        <div className="link-btn">
                                            <Link href="/event-details" className="btn-1 btn-alt">
                                            More Details<span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </div>
        </Layout>
        </>
    )
}