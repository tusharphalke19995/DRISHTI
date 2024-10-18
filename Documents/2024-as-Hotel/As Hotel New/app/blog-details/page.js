
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details">
            
            <section className="section-padding">
                <div className="auto-container">
                    <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="blog-1-image mb_30">
                            <img src="assets/images/resource/blog-10.jpg" alt="" />
                        </div>
                        <div className="blog-2-bottom-content mb_80">
                            <div className="blog-1-date">15 APRIL</div>
                            <h2 className="mb_10">Our New Miami Beach <br />Hotel Is Open!</h2>
                            <ul className="d-flex blog-2-meta-info mb_30">
                            <li>Admin</li>
                            <li>0 Comment</li>
                            </ul>
                            <p className="blog-1-excerpt">
                            Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam
                            sagittis nunc neque sit nec lorem tincidunt arcu nunc accumsan risus felis in ornare Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. cursus ornare non non massa elit rutrum. eros proin nibh neque
                            interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec.
                            Orc velit posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat maecenas viverra consequat condimentum diam donec aliquet. Natoque quam vitae leo risus. Eget
                            neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus
                            varius tristique. <br /> <br />

                            Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper nunc scelerisque turpis
                            facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio
                            cursus in diam eget tincidunt mauris.
                            </p>
                            <blockquote className="mt_40 mb_40 gray-bg p_50 fs_18 fw_medium">
                            <div className="quote-icon theme-color mb_15"><i className="icon-26"></i></div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui consequat nibh elit urna interdum.
                            <cite>Darlene Robertson</cite>
                            </blockquote>
                            <p className="mb_40">Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet
                            Lectus lacus lectus habitasse amet quam libero lorem Volutpat maecenas viverra consequat proin
                            condimentum diam donec aliquet natoque quam vitae leo risus. Eget neque proin in dolor cursus
                            bibendum urna dictum.</p>
                            <ul className="tag-cloud-widget-list alt d-flex flex-wrap">
                            <li><Link href="/blog">Hotel</Link></li>
                            <li><Link href="/blog">Resort</Link></li>
                            <li><Link href="/blog">Tips</Link></li>
                            </ul>
                        </div>
                        <div className="author gray-bg p_50 mb_70 pt_45 pb_45 d-flex align-items-center">
                            <div className="blog-single-author-image mr_30 mb_20"><img className="rounded-circle" src="assets/images/resource/author.jpg" alt="" /></div>
                            <div className="content">
                            <h4>Sandra Bullock</h4>
                            <p className="mb_10">About Author</p>
                            <p className="mb_0">Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor <br /> dui pharetra consequat nibh elit urna interdum viera quam.</p>
                            </div>
                        </div>
                        <div className="comments-area">
                            <h3 className="mb_30">2 Comments</h3>
                            <div className="comment-box">
                            <div className="comment">
                                <div className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></div>
                                <div className="comment-inner">
                                <h5 className="fs_30 mb_10">Mike Hardson</h5>
                                <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                <Link className="reply-comment-btn" href="#"> Reply</Link>
                                </div>
                            </div>
                            </div>
                            <div className="comment-box">
                            <div className="comment">
                                <div className="author-thumb"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></div>
                                <div className="comment-inner">
                                <h5 className="fs_30 mb_10">John Albert</h5>
                                <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                <Link className="reply-comment-btn" href="#"> Reply</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="comment-form form-alt-2">
                            <h3 className="mb_30">Leave a Comments</h3>
                            <form method="post">
                            <div className="row row-10">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input type="text" name="username" placeholder="Name*" required="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input type="email" name="email" placeholder="Email*" required="" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <textarea name="message" placeholder="Write Message"></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <button className="btn-1" type="submit" name="submit-form">Post Comment<span style={{ top: '-6.67188px', left: '182.5px' }}></span></button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-lg-55">
                        <div className="tp-default-widget gray-bg">
                        <h4 className="mb_30">Search</h4>
                        <div className="search-widget">
                            <form>
                            <input type="search" placeholder="Search..." />
                            <button type="submit"><i className="icon-24"></i></button>
                            </form>
                        </div>
                        </div>
                        <div className="tp-default-widget gray-bg">
                        <h4 className="mb_30">Categories</h4>
                        <ul className="category-widget-list">
                            <li><Link href="/blog">City Guide <i className="icon-25"></i></Link></li>
                            <li className="active"><Link href="/blog">Digital Nomad <i className="icon-25"></i></Link></li>
                            <li><Link href="/blog">Spa & Wellness <i className="icon-25"></i></Link></li>
                            <li><Link href="/blog">News & Offers <i className="icon-25"></i></Link></li>
                            <li><Link href="/blog">Tips & Tricks <i className="icon-25"></i></Link></li>
                        </ul>
                        </div>
                        <div className="tp-default-widget gray-bg">
                        <h4 className="mb_30">Related Posts</h4>
                        <div className="recent-post-widget">
                            <div className="single-recent-post d-flex">
                            <div className="single-recent-post-feature-image mr_20 mb_20"><Link href="/blog"><img src="assets/images/resource/blog-15.jpg" alt="" /></Link></div>
                            <div className="single-recent-post-content">
                                <h5 className="fs_24"><Link href="/blog">Celebrating 15 Years
                                Of Hotel</Link></h5>
                                <p className="mb_20">Apr 17, 2022</p>
                            </div>
                            </div>
                            <div className="single-recent-post d-flex">
                            <div className="single-recent-post-feature-image mr_20 mb_20"><Link href="/blog"><img src="assets/images/resource/blog-16.jpg" alt="" /></Link></div>
                            <div className="single-recent-post-content">
                                <h5 className="fs_24"><Link href="/blog">Amazing Places to
                                Stay in Norway</Link></h5>
                                <p className="mb_20">Apr 17, 2022</p>
                            </div>
                            </div>
                            <div className="single-recent-post d-flex">
                            <div className="single-recent-post-feature-image mr_20 mb_20"><Link href="/blog-details"><img src="assets/images/resource/blog-17.jpg" alt="" /></Link></div>
                            <div className="single-recent-post-content">
                                <h5 className="fs_24"><Link href="/blog">The Best Beaches In
                                Florida
                                </Link></h5>
                                <p className="mb_20">Apr 17, 2022</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tp-default-widget gray-bg">
                        <h4 className="mb_30">Popular Tags</h4>
                        <div className="tag-cloud-widget">
                            <ul className="tag-cloud-widget-list d-flex flex-wrap">
                            <li><Link href="/blog">Holidays</Link></li>
                            <li><Link href="/blog">Hotel</Link></li>
                            <li><Link href="/blog">Tips</Link></li>
                            <li><Link href="/blog">Resort</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            </Layout>
        </>
    )
}
