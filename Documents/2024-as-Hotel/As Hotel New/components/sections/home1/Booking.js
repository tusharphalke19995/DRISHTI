

export default function Cta() {
    return (
        <>        
             <div className="hotel-booking-form-1 gray-bg">
                <div className="auto-container">
                  <div className="hotel-booking-form-1-wrap">
                    <form className="hotel-booking-form-1-form flex-grow-1 d-flex align-items-end">
                      <div className="form-group">
                        <p className="hotel-booking-form-1-label text-lg-center">Check - in:</p>
                        <input
                          placeholder="17 Sep, 2022"
                          className=""
                          type="text"
                          name="form-name"
                          id="nd_booking_archive_form_date_range_from"
                          
                        />
                      </div>
                      <div className="form-group">
                        <p className="hotel-booking-form-1-label text-lg-center">Check - Out:</p>
                        <input
                          placeholder="21 Sep, 2022"
                          className=""
                          type="text"
                          name="form-name"
                          id="nd_booking_archive_form_date_range_to"
                          
                        />
                      </div>
                      <div className="form-group">
                        <p className="hotel-booking-form-1-label text-lg-center">Rooms:</p>
                        <select>
                          <option data-display="1 Room">1 Room</option>
                          <option value={2}>2 Rooms</option>
                          <option value={3}>3 Rooms</option>
                          <option value={4}>4 Rooms</option>
                          <option value={5}>5 Rooms</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <p className="hotel-booking-form-1-label text-lg-center">Adults:</p>
                        <select>
                          <option data-display="2 Adults">2 Adults</option>
                          <option value={1}>1 Adult</option>
                          <option value={3}>3 Adults</option>
                          <option value={4}>4 Adults</option>
                          <option value={5}>5 Adults</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <p className="hotel-booking-form-1-label text-lg-center">Child:</p>
                        <select>
                          <option data-display="1 Children">1 Children</option>
                          <option value={1}>0 Children</option>
                          <option value={2}>2 Childrens</option>
                          <option value={3}>3 Childrens</option>
                          <option value={4}>4 Childrens</option>
                          <option value={5}>5 Childrens</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn-1">
                          Check Availability<span></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
            
        </>
    )
}
