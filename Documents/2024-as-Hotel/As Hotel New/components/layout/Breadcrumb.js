import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            
            
            <div className="page-title" style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}>
                <div className="auto-container">
                    <h1>{breadcrumbTitle}</h1>
                </div>
            </div>
            <div className="bredcrumb-wrap">
                <div className="auto-container">
                    <ul className="bredcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
