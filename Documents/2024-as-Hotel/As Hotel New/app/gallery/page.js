
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="sortable-masonry">
                        <PortfolioFilter1 />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}