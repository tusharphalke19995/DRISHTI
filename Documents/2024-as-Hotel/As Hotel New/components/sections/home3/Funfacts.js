import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>
            <section className="section-padding gray-bg text-center small-padding">
              <div className="auto-container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="funfact-1-block text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 className="funfact-1-number odometer">
                        <CounterUp end={150} /><span>+</span>
                        </h2>
                      </div>
                      <p className="funfact-1-title">Booking Month</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfact-1-block">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 className="funfact-1-number odometer">
                        <CounterUp end={2} /><span>k+</span>
                        </h2>
                      
                      </div>
                      <p className="funfact-1-title">Visitors Daily</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfact-1-block">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 className="funfact-1-number odometer">
                        <CounterUp end={95} /><span>%</span>
                        </h2>
                      </div>
                      <p className="funfact-1-title">Positive Feedback</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="funfact-1-block">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 className="funfact-1-number odometer">
                        <CounterUp end={30} /><span>+</span>
                        </h2>
                      </div>
                      <p className="funfact-1-title">Award Winning</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
