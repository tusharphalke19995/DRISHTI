import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Amenities">
                <div>
                    <section className="section-padding pb-5">
                        <div className="auto-container">
                            <div className="section_heading text-center">
                            <span className="section_heading_title_small">Amenities</span>
                            <h2 className="section_heading_title_big mb_20">Enjoy Generous Amenities <br /> at The Hotel</h2>
                            <p className="mb_60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, <br /> felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor <br /> sagittis amet odio est. Sit semper et velit fusce.</p>
                            </div>
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-1.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">BREAKFAST</p>
                                    <h4 className="mb_10">Continental Breakfast</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-2.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">WATER FUN</p>
                                    <h4 className="mb_10">Swimming Pool</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-3.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">HILLSIDE RIDE</p>
                                    <h4 className="mb_10">Cycling Experience</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-4.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">FITNESS</p>
                                    <h4 className="mb_10">Yoga & Fitness</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
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