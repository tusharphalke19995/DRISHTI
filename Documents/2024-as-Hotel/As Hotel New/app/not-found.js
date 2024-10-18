

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="404 Page">    
            <section className="section-padding">
                <div className="auto-container">
                    <div className="content text-center">
                    <h1>404</h1>
                    <h2 className="mb_30">Oops! That page can’t be found</h2>
                    <p className="mb_30">Sorry, but the page you are looking for does not exist</p>
                    <div className="link-box mb_30">
                        <Link href="/" className="btn-1">
                        Go to Homepage <i className="flaticon-right-arrow-1"></i><span></span>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>

            </Layout>
        </>
    )
}
