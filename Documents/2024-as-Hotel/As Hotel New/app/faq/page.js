'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Frequently Asked Questions">
                <section className="section-padding">
                    <div className="auto-container">
                      <div className="section_heading text-center mb_55">
                        <span className="section_heading_title_small">Faq’s</span>
                        <h2 className="section_heading_title_big">Frequently Asked <br /> Questions</h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                          {/* Accordian Boxed */}
                          <div className="accordian-boxed">
                            {/* Accordian Box */}
                            <ul className="accordion-box alt">
                              {/* Block */}
                              <li className="accordion block">
                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                  <div className="icon-outer">
                                    <span className="far fa-plus"></span>
                                    <span className="far fa-minus"></span>
                                  </div>
                                  Is there support for me at home?
                                </div>
                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                  <div className="content">
                                    <div className="text">
                                      Sodales posuere facilisi metus elementum ipsum egestas amet
                                      amet mattis commodo Nunc tempor amet massa diam mauris
                                      Risus sodales interdum.
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block ">
                                <div className={isActive.key == 2 ? "acc-btn active": "acc-btn"} onClick={()=>handleToggle(2)}>
                                  <div className="icon-outer">
                                    <span className="far fa-plus"></span>
                                    <span className="far fa-minus"></span>
                                  </div>
                                  How can I manage my breathlessness?
                                </div>
                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                  <div className="content">
                                    <div className="text">
                                      Sodales posuere facilisi metus elementum ipsum egestas amet
                                      amet mattis commodo Nunc tempor amet massa diam mauris
                                      Risus sodales interdum.
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block active-block">
                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                  <div className="icon-outer">
                                    <span className="far fa-plus"></span>
                                    <span className="far fa-minus"></span>
                                  </div>
                                  I am worried about a loved one
                                </div>
                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                  <div className="content">
                                    <div className="text">
                                      Sodales posuere facilisi metus elementum ipsum egestas amet
                                      amet mattis commodo Nunc tempor amet massa diam mauris
                                      Risus sodales interdum.
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                  <div className="icon-outer">
                                    <span className="far fa-plus"></span>
                                    <span className="far fa-minus"></span>
                                  </div>
                                  Information highway will close the loop on?
                                </div>
                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                  <div className="content">
                                    <div className="text">
                                      Sodales posuere facilisi metus elementum ipsum egestas amet
                                      amet mattis commodo Nunc tempor amet massa diam mauris
                                      Risus sodales interdum.
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                  <div className="icon-outer">
                                    <span className="far fa-plus"></span>
                                    <span className="far fa-minus"></span>
                                  </div>
                                  At the end of the day, going forward?
                                </div>
                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                  <div className="content">
                                    <div className="text">
                                      Sodales posuere facilisi metus elementum ipsum egestas amet
                                      amet mattis commodo Nunc tempor amet massa diam mauris
                                      Risus sodales interdum.
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


    <section className="section-padding gray-bg ">
          <div className="auto-container">
            <div className="section_heading text-center mb_55">
                    <span className="section_heading_title_small">Contact Us</span>
                    <h2 className="section_heading_title_big">How Can We <br /> Help You?</h2>
                    <div className="row mt-5">
                <div className="col-lg-8 offset-lg-2">
                  <div className="form-alt form-alt2 center">
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6">
                          <input type="text" name="form_name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group col-md-6">
                          <input type="text" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group col-md-12">
                          <input type="text" name="form_name" placeholder="Phone Number" required />
                        </div>

                        <div className="form-group col-md-12">
                          <textarea name="form_message" placeholder="Massage"></textarea>
                        </div>

                        <div className="form-group col-md-12">
                          <p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> I agree to the terms & conditions</p>
                        </div>

                        <div className="form-group col-md-12">
                          <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                          <button className="btn-1" type="submit" data-loading-text="Please wait...">Send Message <i className="flaticon-right-arrow-1"></i><span></span></button>
                        </div>
                      </div>
                    </form>
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

