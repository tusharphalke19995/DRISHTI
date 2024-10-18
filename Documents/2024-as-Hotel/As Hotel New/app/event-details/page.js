import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Event Details">
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="feature-image mb_60">
                        <img src="assets/images/resource/event-6.jpg" alt="" />
                        </div>
                        <div className="row">
                        <div className="col-lg-8">
                            <div className="single-post">
                            <h2 className="mb_20">San Francisco Pool Party</h2>
                            <p className="mb_20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum quam suspendisse. Sit bibendum adipiscing enim lacus quis. A nec accumsan aliquam magnis orci. Dui amet scelerisque lectus commodo iaculis semper. Arcu eget vestibulum amet faucibus eugi augue Odio viverra odio tempor porttitor orci, gravida orci consequat. Aliquet aliquet nibh sit massa. Molestie proin facilisis ac vulputate sed quam et, arcu mattis. In egestas rutrum pharetra sit dictum augue.
                            </p>
                            <p className="mb_70">
                                Imperdiet consectetur gravida vel rutrum. Tempus, mattis sit massa lacus morbi. Feugiat aliquam aenean sagittis nunc neque sit. Nec lorem tincidunt arcu nunc ac accumsan risus felis in. Mi ornare convallis tincidunt maecenas dui auctor cursus platea velit. Augue eget turpis facilisi dui vel at faucibus diam. Semper non vitae elit mattis eu sodales. Sapien pellentesque sagittis enim.
                            </p>
                            <h4 className="mb_20">Event Requirements</h4>
                            <p className="mb_50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum quam suspendisse. Sit bibendum adipiscing enim lacus quis. A nec accumsan aliquam magnis orci. Dui amet scelerisque lectus commodo iaculis semper. Arcu eget vestibulum amet faucibus eugi augue Odio viverra odio tempor porttitor orci, gravida orci consequat. Aliquet aliquet nibh sit massa. Molestie proin facilisis ac vulputate sed quam et, arcu mattis. In egestas rutrum pharetra sit dictum augue.
                            </p>
                            <div className="row mb_30">
                                <div className="col-md-6">
                                <div className="mb_30">
                                    <img src="assets/images/resource/event-7.jpg" alt="" />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="mb_30">
                                    <img src="assets/images/resource/event-8.jpg" alt="" />
                                </div>
                                </div>
                            </div>
                            <h4 className="mb_20">Event Mission</h4>
                            <p className="mb_30">
                                Amet scelerisque lectus commodo iaculis semper. Arcu eget vestibulum amet faucibus eugi augue Odio viverra odio tempor porttitor orci, gravida orci consequat. Aliquet aliquet nibh sit massa. Molestie proin facilisis ac vulputate sed quam et, arcu mattis. In egestas rutrum pharetra sit dictum augue.
                            </p>
                            <ul className="list-2 mb_70">
                                <li><i className="icon-23"></i> 7 nights for 2 people in signature suite</li>
                                <li><i className="icon-23"></i> Pick up in Zurich or Geneva by helicopter</li>
                                <li><i className="icon-23"></i> 2 spa treatments per person</li>
                            </ul>
                            <h4 className="mb_20">Event Location</h4>
                            <p className="mb_50">
                                Consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum suspendisse. Sit bibendum adipiscing enim lacus quis. A nec accumsan aliquam magnis orci. Dui amet scelerisque lectus commodo iaculis semper arcu eget vestibulum amet
                            </p>
                            <div className="service-details-map mb-30">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd" width="600" height="390" style={{ border: 0, width: '100%' }} allowFullScreen=""></iframe>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-lg-40">
                            <div className="event-info-widget mb_30">
                            <h4 className="theme-bg color_light p_16 pl_30">Event Details</h4>
                            <ul className="gray-bg p_30 pt_40 pb_40 fs_18">
                                <li><span className="fw_medium color_dark">Organizer:</span> Hotel Royalking</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Start Date:</span> 17 Oct, 2022</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">End Date:</span> 20 Oct, 2022</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Time:</span> 11:00AM - 04:00PM</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Cost:</span> Free</li>
                            </ul>
                            </div>
                            <div className="event-info-widget mb_30">
                            <h4 className="theme-bg color_light p_16 pl_30">Event Venue</h4>
                            <ul className="gray-bg p_30 pt_40 pb_40 fs_18">
                                <li><span className="fw_medium color_dark">Venue:</span> Madison Park</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Address:</span> 855 Green Road, USA</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Email:</span> royalking@gmail.com</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Phone:</span> (239)-523-0108</li>
                                <li><div className="event-widget-divider"></div></li>
                                <li><span className="fw_medium color_dark">Website:</span> <Link className="theme-color" href="https://royalking.com">https://royalking.com</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
        </Layout>
        </>
    )
}