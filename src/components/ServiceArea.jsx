import "../css/vendor/bootstrap.min.css";
import "../css/vendor/slick.css";
import "../css/vendor/slick-theme.css";
import "../css/vendor/aos.css";
import "../css/plugins/feature.css";
import "../css/style.css";
function ServiceArea(){
    return(
        <div className="rn-service-area rn-section-gap section-separator" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">Features</span>
                            <h2 className="title">What I Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="menu"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Animation Coding</a></h4>
                                    <p className="description">I throw myself down among the tall grass by the stream as I
                                        lie close to the earth.</p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="book-open"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">App Development</a></h4>
                                    <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                                        a handful of model sentence.</p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="tv"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Graphic Design </a></h4>
                                    <p className="description">I throw myself down among the tall grass by the stream as I
                                        lie close to the earth.</p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="twitch"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Mobile App</a></h4>
                                    <p className="description">There are many variations of passages of Lorem Ipsum
                                        available, but the majority.
                                    </p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="wifi"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">CEO Marketing</a></h4>
                                    <p className="description">always free from repetition,
                                        injected humour, or non-characteristic words etc.</p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i data-feather="slack"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">UI</a></h4>
                                    <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                                        a handful of model sentence.</p>
                                    <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                            <a className="over-link" href="#"></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ServiceArea;