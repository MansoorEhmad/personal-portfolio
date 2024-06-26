function Header(){
    return(
        <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="index.html">
                  <img src="/images/AC.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav
                id="sideNav"
                className="mainmenu-nav navbar-example2 d-none d-xl-block"
              >
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link smoth-animation active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#clients">
                      Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#blog">
                      blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#contacts">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-right">
                <a
                  className="rn-btn"
                  target="_blank"
                  href="https://www.youtube.com/c/AnimationCoding"
                >
                  <span>Go NOW</span>
                </a>
                <div className="hamberger-menu d-block d-xl-none">
                  <i id="menuBtn" className="feather-menu humberger-menu"></i>
                </div>
                <div className="close-menu d-block">
                  <span className="closeTrigger">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}
export default Header