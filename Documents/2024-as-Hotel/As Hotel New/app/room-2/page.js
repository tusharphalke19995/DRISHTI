import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    
    const RoomStyle2 = () => {

    };
    const roomData = [
        {
          backgroundImage: 'assets/images/resource/room-7.jpg',
          title: 'Luxury Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
        {
          backgroundImage: 'assets/images/resource/room-8.jpg',
          title: 'Delux Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
        {
          backgroundImage: 'assets/images/resource/room-9.jpg',
          title: 'Queen Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
        {
          backgroundImage: 'assets/images/resource/room-14.jpg',
          title: 'Classic Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
        {
          backgroundImage: 'assets/images/resource/room-15.jpg',
          title: 'Double Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
        {
          backgroundImage: 'assets/images/resource/room-16.jpg',
          title: 'Single Room',
          rating: [1, 1, 1, 1, 2],
          price: '$55.0',
          text: 'Mattis cras magna morb punar aliquet in. Risus a arcu eget.',
        },
      ];
    

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Room Style 2">
                <div>
                 <section className="section-padding">
                    <div className="auto-container">
                        <div className="row">
                        {roomData.map((room, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                            <div
                                className="room-2-block alt wow fadeInUp"
                                data-wow-delay=".2s"
                                data-wow-duration=".8s"
                                style={{ backgroundImage: `url(${room.backgroundImage})` }}
                            >
                                <div className="room-2-content">
                                <h4 className="room-2-title">
                                    <Link href="/room-details">{room.title}</Link>
                                </h4>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    {room.rating.map((star, starIndex) => (
                                    <i key={starIndex} className="icon-6"></i>
                                    ))}
                                </div>
                                <h4 className="room-2-title">
                                    <Link href="/room-details">{room.title}</Link>
                                </h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">{room.price}</span>/night</p>
                                <p className="room-2-text mb_20">{room.text}</p>
                                <div className="link-btn">
                                    <Link href="/" className="btn-1 btn-small">
                                    Book Now <span></span>
                                    </Link>
                                </div>
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