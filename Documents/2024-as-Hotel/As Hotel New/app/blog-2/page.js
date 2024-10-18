
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="row">
                        {/* Repeat the following block for each blog item */}
                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-1.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Our New Miami Beach Hotel Is Open!</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-2.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Know the secreat of
                                Royalking Resort!</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-3.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">How to book a Resort in best price on </Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-4.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Know the secreat of
                                Royalking Resort</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-5.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">How to book a Resort in best price on </Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-6.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Know the secreat of
                                Royalking Resort</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-7.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">How to book a Resort in best price on</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-8.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Our New Miami Beach Hotel Is Open!</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb_40">
                            <div className="blog-1-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="blog-1-image">
                                <Link href="/blog-details"><img src="assets/images/resource/blog-9.jpg" alt="" /></Link>
                            </div>
                            <div className="blog-1-bottom-content">
                                <div className="blog-1-date">15 APRIL</div>
                                <h4 className="blog-1-title"><Link href="/blog-details">Know the secreat of
                                Royalking Resort</Link></h4>
                                <ul className="d-flex blog-1-meta-info">
                                <li>Admin</li>
                                <li>0 Comment</li>
                                </ul>
                                <p className="blog-1-excerpt">Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="blog-1-link-btn"><Link href="/blog-details" className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"><i className="icon-5"></i></Link></div>
                            </div>
                            </div>
                        </div>
                        {/* End of repeated block */}
                        </div>
                        <ul className="styled-pagination text-center">
                        <li><Link href="#" className="active">1</Link></li>
                        <li><Link href="#">2</Link></li>
                        <li><Link href="#"><span className="fa fa-angle-right"></span></Link></li>
                        </ul>
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}
