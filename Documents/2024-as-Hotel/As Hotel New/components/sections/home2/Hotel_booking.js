


export default function Hotel_booking() {
    return (
        <>
           
           <div className="hotel-booking-form-1 alt2 p-0 theme-bg">
              <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: 'url(assets/images/shape/pattern-4.png) no-repeat center bottom' }}></div>
              <div className="auto-container">
                <div className="hotel-booking-form-1-wrap">
                  <h2 className="color_light mb_40">Make Reservation</h2>
                  <form className="hotel-booking-form-1-form flex-grow-1 d-flex">
                    <div className="form-group">
                      <p className="hotel-booking-form-1-label">Check - in:</p>
                      <input placeholder="17 Sep, 2022" className="" type="text" name="form-name" id="nd_booking_archive_form_date_range_from"  />
                    </div>
                    <div className="form-group">
                      <p className="hotel-booking-form-1-label">Check - Out:</p>
                      <input placeholder="21 Sep, 2022" className="" type="text" name="form-name" id="nd_booking_archive_form_date_range_to" />
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
                    <div className="form-group">
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
                    <div className="form-group text-md-end">
                      <button type="submit" className="btn-1 btn-large btn-light">Check Availability<span></span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

        </>
    )
}
