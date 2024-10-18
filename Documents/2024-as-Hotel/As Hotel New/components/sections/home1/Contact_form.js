

export default function Contact_form() {
    return (
        <>        
            
            <section className="section-padding gray-bg">
                  <div className="auto-container">
                    <div className="row">
                      <div className="col-lg-6 order-2">
                        <div className="p_relative">
                          <div className="p_absolute l_0 b__75"><img src="assets/images/shape/pattern-1.png" alt="" /></div>
                          <div className="form-alt">
                            <form method="post" action="sendemail.php" id="contact-form">
                              <div className="row clearfix">
                                <div className="form-group col-md-12">
                                  <input type="text" name="form_name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group col-md-12">
                                  <input type="text" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group col-md-12">
                                  <input type="text" name="form_subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group col-md-12">
                                  <textarea name="form_message" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group col-md-12">
                                  <p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> I agree to the terms & conditions</p>
                                </div>
                                <div className="form-group col-md-12">
                                  <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                                  <button className="btn-1" type="submit" data-loading-text="Please wait...">Submit Now <i className="flaticon-right-arrow-1"></i><span></span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="section_heading mb_30">
                          <span className="section_heading_title_small">Contact Us</span>
                          <h2 className="section_heading_title_big">If You Wish To <br /> Learn More Ask Before <br /> Booking.</h2>
                        </div>
                        <p>Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus <br />
                          nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum <br />
                          ornare sagittis dolor sagittis amet odio est.</p>
                      </div>
                    </div>
                  </div>
            </section>
        </>
    )
}
