import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Room Single">
                <div>
                  <section className="section-padding">
                  <div className="auto-container">
                    <div className="row">
                      <div className="col-lg-8 pe-lg-35">
                        <div className="single-post">
                          <span className="section_heading_title_small">FORM $55.00</span>
                          <h2 className="mb_40">Luxury Room</h2>
                          <p className="mb_20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet,
                            enim sit commodo semper lectus phasellus. Non egestas ultrices magna gravida est sociis non ornare
                            bibendum. tellus Dignissim ornare metus, interdum et, tellus justo. Urna libero, in scelerisque porttitor
                            et, sagittis, et ut. Eget quam at at etiam accumsan integer facilisi justo. Lorem ut tempus cursus fames
                            ultrices nisl, laoreet tortor, blandit. Leo diam, donec pretium, massa pellentesque et eleifend ut. Porta
                            proin malesuada volutpat purus.
                          </p>
                          <p className="mb_40">
                            At quam ac ipsum volutpat non. Duis sagittis, sollicitudin eget tristique consectetur et facilisi.
                            Viverra sit non sed orci magna venenatis. Magna pharetra non ornare lectus sed risus maecenas adipiscing.
                            Cras pretium vivamus nunc posuere.
                          </p>
                          <div className="mb_60">
                            <img src="assets/images/resource/room-17.jpg" alt="" />
                          </div>
                          <h3 className="fs_40 mb_30">Amenities</h3>
                          <p className="mb_50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius
                            etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum
                            ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.
                          </p>

                          <div className="row mb_30">
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-8 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Fast wifi</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-9 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Coffee</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-10 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Bath</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-11 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Parking Space​</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-12 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Swimming Pool</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-14 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Breakfast</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-15 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Spa & Wellness</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-16 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Meeting Room</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-17 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Drink</p>
                    </div>
                  </div>
                </div>

                          <h3 className="fs_40 mb_30">Hotel Rules</h3>
                          <p className="mb_30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius
                            etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum
                            ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.
                          </p>
                          <ul className="list-2 mb_70">
                            <li>
                              <i className="icon-23"></i>Check-in: 3:00 PM - 9:00 PM
                            </li>
                            <li>
                              <i className="icon-23"></i>Check-out: 10:30 AM
                            </li>
                            <li>
                              <i className="icon-23"></i>No Pets
                            </li>
                            <li>
                              <i className="icon-23"></i>No Smoking
                            </li>
                          </ul>
                          <h3 className="fs_40 mb_30">Cancellation</h3>
                          <p className="mb_70">
                            Est felis tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis
                            dolor sagittis amet odio est. Sit semper et velit fusce.
                          </p>
                          <h3 className="fs_40 mb_30">Location</h3>
                          <p className="mb_30">
                            Est felis tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis
                            dolor sagittis amet odio est. Sit semper et velit fusce.
                          </p>
                          <div className="map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                              width="600"
                              height="450"
                              frameBorder="0"
                              style={{ border: 0, width: '100%' }}
                              allowFullScreen=""
                              aria-hidden="false"
                              tabIndex="0"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                  <div className="widget mb_40 gray-bg p_40">
                    <h4 className="mb_20">Your Reservation</h4>
                    <div className="booking-form-3">
                      <form className="hotel-booking-form-1-form d-block">
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Check - in:</p>
                          <input
                            placeholder="17 Sep, 2022"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_from"
                            
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Check - Out:</p>
                          <input
                            placeholder="21 Sep, 2022"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_to"
                          
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Rooms:</p>
                          <select>
                            <option data-display="1 Room">1 Room</option>
                            <option value={2}>2 Rooms</option>
                            <option value={3}>3 Rooms</option>
                            <option value={4}>4 Rooms</option>
                            <option value={5}>5 Rooms</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Adults:</p>
                          <select>
                            <option data-display="2 Adults">2 Adults</option>
                            <option value={1}>1 Adult</option>
                            <option value={3}>3 Adults</option>
                            <option value={4}>4 Adults</option>
                            <option value={5}>5 Adults</option>
                          </select>
                        </div>
                        <div className="form-group mb_50">
                          <p className="hotel-booking-form-1-label">Child:</p>
                          <select>
                            <option data-display="1 Children">1 Children</option>
                            <option value={0}>0 Children</option>
                            <option value={2}>2 Childrens</option>
                            <option value={3}>3 Childrens</option>
                            <option value={4}>4 Childrens</option>
                            <option value={5}>5 Childrens</option>
                          </select>
                        </div>
                        <div className="form-group mt-5">
                          <h4 className="mb_20">Extra Services</h4>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Cleaning Fee
                            </p>
                            <p>$9.0</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Free
                            </p>
                            <p>$9.0</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Parking
                            </p>
                            <p>$7.0</p>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb_20">Your Price</h4>
                            <p>$9.0</p>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <button type="submit" className="btn-1">
                            Book Now<span></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                  </section>
                  <section className="section-padding pt-0">
                    <div className="auto-container">
                      <div className="section_heading mb_55">
                        <h2 className="section_heading_title_big">Related Rooms</h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-1.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Luxury Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.2s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-2.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Delux Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-3.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Luxury Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
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