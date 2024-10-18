import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Menu">
                
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="section_heading text-center">
                        <span className="section_heading_title_small">Weekly Specials</span>
                        <h2 className="section_heading_title_big mb_60">Menu Of The Day</h2>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>American Combo</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>Chia Oatmeal</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>Strawberry French Toast</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>Tea or Coffee</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>Fruits Juice</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="price-menu-1-block">
                            <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">$12</p>
                                <h4>Breakfast Combo</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">Lorem ipsum dolor sit ameted consectur adipiscing elit <br /> purus egestas.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="section-padding gray-bg">
                    <div className="feature-3-shape-1 p_absolute r_30 b_0"><img src="assets/images/shape/pattern-5.png" alt="" /></div>
                    <div className="auto-container">
                        <div className="section_heading text-center">
                        <span className="section_heading_title_small">Popular</span>
                        <h2 className="section_heading_title_big mb_60">Popular Dishes</h2>
                        </div>
                        <div className="row p_relative">
                        <div className="feature-3-shape-2"></div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-12.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Grilled with Tomatoes</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-13.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Squeezing Fresh Juice</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-14.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Fish with Vegetable</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
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