import "../css/vendor/bootstrap.min.css";
import "../css/vendor/slick.css";
import "../css/vendor/slick-theme.css";
import "../css/vendor/aos.css";
import "../css/plugins/feature.css";
import "../css/style.css";
function SliderArea(){
    return(
        <div id="home" className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <div className="inner">
                                    <span className="subtitle">Welcome to my world</span>
                                    <h1 className="title">Hi, I’m <span>Youtuber</span><br/>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span>a </span>
                                          <span className="cd-words-wrapper">
                                            <b className="is-visible">Animation</b>
                                            <b className="is-hidden">Youtuber</b>
                                            <b className="is-hidden">Developer.</b>
                                          </span>
                                        </span>
                                        </span>
                                    </h1>

                                    <div>
                                        <p className="description">I use animation as a third dimension by which to simplify
                                            experiences and kuiding thro each and every interaction. I’m not adding
                                            motion
                                            just to spruce things up, but doing it in ways that.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        <div className="social-share-inner-left">
                                            <span className="title">find with me</span>
                                            <ul className="social-share d-flex liststyle">
                                                <li className="facebook"><a href="#"><i data-feather="facebook"></i></a>
                                                </li>
                                                <li className="instagram"><a href="#"><i data-feather="instagram"></i></a>
                                                </li>
                                                <li className="linkedin"><a href="#"><i data-feather="linkedin"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                        <div className="skill-share-inner">
                                            <span className="title">best skill on</span>
                                            <ul className="skill-share d-flex liststyle">
                                                <li><img src="./images/icons/icons-01.png" alt="Icons Images"/></li>
                                                <li><img src="./images/icons/icons-02.png" alt="Icons Images"/></li>
                                                <li><img src="./images/icons/icons-03.png" alt="Icons Images"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                            <div className="thumbnail">
                                <div className="inner">
                                    <img src="./images/3d/Saly-13.png" alt="Personal Portfolio Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderArea;