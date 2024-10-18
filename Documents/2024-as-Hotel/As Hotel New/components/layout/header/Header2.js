import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-two"> */}
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
            <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                        <div className="logo-box">
                            <div className="logo">
                            <Link href="/">
                            <img src="assets/images/ashootel.jpeg" width={50} height={50}  alt="" />
                            </Link>
                            </div>
                        </div>
                        <div className="middle-column">
                            <div className="nav-outer">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <img src="assets/images/icons/icon-bar.png" alt="" />
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                            </nav>
                            </div>
                        </div>
                        <div className="right-column d-flex align-items-center">
                        <button type="button" className="theme-btn search-toggler">
                            <li className="search-box-outer search-toggler" onClick={handlePopup}><i className="icon-1"></i></li>
                            </button>
                            <div className="header-link-btn">
                            <Link href="/" className="btn-1 btn-small btn-alt">
                                Book Your Stay <span></span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="sticky-header dark-bg">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo-box">
              <div className="logo" >
                <Link href="/">
                <img src="assets/images/ashootel.jpeg" width={50} height={50}  alt="" />
                </Link>
              </div>
            </div>

            <div className="middle-column">
              {/* Nav Box */}
              <div className="nav-outer">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler">
                  <img src="assets/images/icons/icon-bar-2.png" alt="" />
                </div>

                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                <Menu />
                </nav>
              </div>
            </div>

            <div className="right-column d-flex align-items-center">
              <div className="header-link-btn">
                <Link href="/;" className="btn-1 btn-small btn-alt">Book Your Stay <span></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                   
                    <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>

           


        </>
    )
}
