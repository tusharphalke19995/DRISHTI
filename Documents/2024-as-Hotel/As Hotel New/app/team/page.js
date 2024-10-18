
import Layout from "@/components/layout/Layout"
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Chef">
                <div>
                
                <section className="section-padding">
            <div className="auto-container">
                <div className="section_heading text-center mb_70">
                    <span className="section_heading_title_small">Dedicated Team</span>
                    <h2 className="section_heading_title_big">We Have A Professional <br /> Hotel Staff</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-1.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Wade Warren</h4>
                            <p className="team-1-designaiton">Main Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-2.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Guy Hawkins</h4>
                            <p className="team-1-designaiton">Sr. Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-3.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Bessie Cooper</h4>
                            <p className="team-1-designaiton">Jr. Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-4.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Esther Howard</h4>
                            <p className="team-1-designaiton">Sr. Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-5.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Leslie Alexander</h4>
                            <p className="team-1-designaiton">Jr. Chef</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-1-block">
                            <div className="team-1-image">
                                <div className="team-1-image-wrap"><img src="assets/images/resource/team-6.jpg" alt="" /></div>
                                <div className="team-1-share-icon-area">
                                    <ul className="team-1-social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <h4 className="team-1-title">Robert Fox</h4>
                            <p className="team-1-designaiton">Jr. Chef</p>
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