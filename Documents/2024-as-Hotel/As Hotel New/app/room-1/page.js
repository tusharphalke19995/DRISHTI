import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    const RoomSection = () => {
        // Your component code
      };
      const roomData = [
        { imageSrc: "assets/images/resource/room-1.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Luxury Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: ".8s",
      },
      {
        imageSrc: "assets/images/resource/room-2.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Delux Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: "1.2s",
      },
      {
        imageSrc: "assets/images/resource/room-3.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Luxury Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: "1.5s",
      },
      { imageSrc: "assets/images/resource/room-4.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Luxury Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: ".8s",
      },
      {
        imageSrc: "assets/images/resource/room-5.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Delux Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: "1.2s",
      },
      {
        imageSrc: "assets/images/resource/room-6.jpg",
        startingPrice: "$55.0",
        rating: 5,
        title: "Luxury Room",
        description: "Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.",
        detailsLink: "/room-details",
        animationDuration: "1.5s",
      },
      
      // Add more room data entries as needed
    ];
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Room Style 1">
              <div>
                <section className="section-padding">
                    <div className="auto-container">
                      <div className="row">
                        {roomData.map((room, index) => (
                          <div key={index} className={`col-lg-4 col-md-6`}>
                            <div className={`room-1-block wow fadeInUp`} data-wow-delay=".2s" data-wow-duration={room.animationDuration}>
                              <div className="room-1-image hvr-img-zoom-1">
                                <img src={room.imageSrc} alt="" />
                              </div>
                              <div className="room-1-content">
                                <p className="room-1-meta-info">Start from <span className="theme-color">{room.startingPrice}</span>/night</p>
                                <div className="room-1-rating">
                                  {Array.from({ length: room.rating }, (_, i) => (
                                    <i key={i} className="icon-6"></i>
                                  ))}
                                  <i className="icon-7"></i>
                                </div>
                                <h4 className="room-1-title mb_20"><Link href={room.detailsLink}>{room.title}</Link></h4>
                                <p className="room-1-text mb_30">{room.description}</p>
                                <div className="link-btn"><Link href={room.detailsLink} className="btn-1 btn-alt">Book Now <span></span></Link></div>
                              </div>
                            </div>
                          </div> 
                        ))}
                        
                      </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}