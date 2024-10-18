import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Features from "@/components/sections/home2/Features"
import Amenities from "@/components/sections/home2/Amenities"
import Funfacts from "@/components/sections/home2/Funfacts"
import Offer from "@/components/sections/home2/Offer"
import Video from "@/components/sections/home2/Video"
import Hotel_booking from "@/components/sections/home2/Hotel_booking"
import Blog from "@/components/sections/home2/Blog"
import Room from "@/components/sections/home2/Room"
import Testimonial from "@/components/sections/home2/Testimonial"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <About />
                <Features />
                <Room />
                <Amenities />
                <Funfacts />
                <Offer />
                <Video />
                <Testimonial />
                <Hotel_booking />
                <Blog /> 
            </Layout>
        </>
    )
}