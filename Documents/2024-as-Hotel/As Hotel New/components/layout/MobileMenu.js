'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="fal fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-light.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/" onClick={handleMobileMenu}>Home</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                    <li className="current" onClick={handleMobileMenu}><Link href="/index-2">Home Page 02</Link></li>
                    <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                  <Link href="/#" onClick={handleMobileMenu}>About</Link>
                  <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                  <li><Link href="/about-us" onClick={handleMobileMenu}>About</Link></li>
                        <li><Link href="/team" onClick={handleMobileMenu}>Team</Link></li>
                        <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                        <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                        <li><Link href="/not-found" onClick={handleMobileMenu}>404 Error Page</Link></li>
                  </ul>
                  <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                  <Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                  <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                    
                    <li><Link href="/food-menu" onClick={handleMobileMenu}>Manu</Link></li>
                        <li><Link href="/gallery" onClick={handleMobileMenu}>Gallery</Link></li>
                        <li><Link href="/spa-&-wellness" onClick={handleMobileMenu}>Spa & Wellness</Link></li>
                        <li><Link href="/amenities" onClick={handleMobileMenu}>Amenities</Link></li>
                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                      <Link href="/#" onClick={handleMobileMenu}>Events</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                        <li><Link href="/events" onClick={handleMobileMenu}>Events </Link></li>
                        <li><Link href="/event-details" onClick={handleMobileMenu}>Events Details</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                    </li>
                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                      <Link href="/#" onClick={handleMobileMenu}>Packages</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                        <li><Link href="/packages" onClick={handleMobileMenu}>Packages</Link></li>
                        <li><Link href="/package-details" onClick={handleMobileMenu}>Package Details</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                    </li>
                  </ul>
                  <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Rooms</Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="/room-1" onClick={handleMobileMenu}>Room Style 01</Link></li>
                        <li><Link href="/room-2" onClick={handleMobileMenu}>Room Style 02</Link></li>
                        <li><Link href="/room-details" onClick={handleMobileMenu}>Room Details</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Blog</Link>
                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                    <li><Link href="/blog" onClick={handleMobileMenu}>Blog Grid</Link></li>
                        <li><Link href="/blog-2" onClick={handleMobileMenu}>Blog Standard</Link></li>
                        <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

export default MobileMenu;
