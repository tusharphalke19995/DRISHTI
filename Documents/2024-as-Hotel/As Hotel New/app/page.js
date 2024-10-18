import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Room from "@/components/sections/home1/Room"
import Amenities from "@/components/sections/home1/Amenities"
import Cta from "@/components/sections/home1/Cta"
import Booking from "@/components/sections/home1/Booking"
import Blog from "@/components/sections/home1/Blog"
import Contact_form from "@/components/sections/home1/Contact_form"
import Banner from "@/components/sections/home1/Banner"
import Projects from "@/components/sections/home1/Projects"
import Features from "@/components/sections/home1/Features"
import Testimonial from "@/components/sections/home1/Testimonial"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Booking />
                <Features />
                <About />
                <Room />
                <Projects />
                <Amenities />
                <Testimonial />
                <Cta />
                <Blog />
                <Contact_form />
            </Layout>
        </>
    )
}