
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")




    return (
        <>

            <div className="filters centred mb_50">
              

<div className=" filter-tabs filter-btns clearfix">
      <ul className="filter-tabs filter-btns d-flex justify-content-center">
        <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
          All Works
        </li>
        <li className={activeBtn("Nursing")} onClick={handleFilterKeyChange("Nursing")}>
          Nursing
        </li>
        <li className={activeBtn("Medical")} onClick={handleFilterKeyChange("Medical")}>
          Medical
        </li>
        <li className={activeBtn("Senior")} onClick={handleFilterKeyChange("Senior")}>
          Senior
        </li>
      </ul>
    </div>
            </div>
            <div className="items-container row clearfix">
            <div className="items-container row">
                            
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all Nursing col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-1.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Medical col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-2.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Nursing col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-3.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Senior col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-4.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Nursing col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-5.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Medical col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-6.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Medical col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-7.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Nursing col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Senior col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-9.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Medical col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-5.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Senior col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-3.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all Senior col-lg-4 col-md-6 col-sm-12">
                            <div className="gallery-block-1-inner-box">
                                <div className="gallery-block-1-image">
                                <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                                </div>
                                <div className="gallery-block-1-overlay">
                                <div className="gallery-block-1-lower-content">
                                    <div className="gallery-block-1-link-btn">
                                    <Link href="assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><span className="icon-24"></span></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            </div>
        </>
    )
}
