import BackToTop from "./BackToTop";
import ClientArea from "./ClientArea";
import Contact from "./Contact";
import NewsArea from "./NewsArea";
import PortfolioArea from "./PortfolioArea";
import PricingArea from "./PricingArea";
import ResumeArea from "./ResumeArea";
import ServiceArea from "./ServiceArea";
import SliderArea from "./SliderArea";
import TestimoniaArea from "./TestimoniaArea";


function Main(){
    return(
        <main className="main-page-wrapper">
            <SliderArea/>
            <ServiceArea/>
            <PortfolioArea/>
            <ResumeArea/>
            <TestimoniaArea/>
            <ClientArea/>
            <PricingArea/>
            <NewsArea/>
            <Contact/>
            <BackToTop/>
        </main>
    );
}

export default Main;