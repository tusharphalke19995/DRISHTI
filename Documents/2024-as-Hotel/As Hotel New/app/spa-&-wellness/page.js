import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Spa & Wellness">
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="row mb_120">
                        <div className="col-lg-6">
                            <div className="section_heading">
                            <span className="section_heading_title_small">from $55.00</span>
                            <h2 className="section_heading_title_big mb_40">Spa & Clinical Treatment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus. Non egestas ultrices magna gravida est sociis non ornare bibendum.</p>
                            <p className="mb_30">At quam ac ipsum volutpat non. Duis sagittis, sollicitudin eget tristique consectetur et facilisi. Viverra sit non sed orci magna venenatis.</p>
                            </div>
                            <ul className="list-2 mb_40">
                            <li><i className="icon-23"></i>7 nights for 2 people in a signature suite</li>
                            <li><i className="icon-23"></i>Pick up in Zurich or Geneva by helicopter</li>
                            <li><i className="icon-23"></i>2 spa treatments per person</li>
                            <li><i className="icon-23"></i>Guests make a DNA test at home 5 weeks prior.</li>
                            <li><i className="icon-23"></i>Aesthetics retreat: Full week of Cryolipolysis for the whole body.</li>
                            </ul>
                            <div className="link-btn mb_30"><Link href="/" className="btn-1">Download Brochure <span></span></Link></div>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <div className="image mb_30"><img src="assets/images/resource/spa.jpg" alt="" /></div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb_30 hvr-img-zoom-1"><img src="assets/images/resource/spa-2.jpg" alt="" /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb_30 hvr-img-zoom-1"><img src="assets/images/resource/spa-3.jpg" alt="" /></div>
                        </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}