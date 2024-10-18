import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Booking from "@/components/sections/home3/Booking"
import Features from "@/components/sections/home3/Features"
import Room from "@/components/sections/home3/Room"
import Cta from "@/components/sections/home3/Cta"
import Blog from "@/components/sections/home3/Blog"
import Amenities from "@/components/sections/home3/Amenities"
import Funfacts from "@/components/sections/home3/Funfacts"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Booking />
                <Features />
                <About />
                <Room />
                <Testimonial />
                <Funfacts />
                <Cta />
                <Amenities />
                <Blog /> 
            </Layout>
        </>
    )
}