import Header from "./components/Header";
import PopupMobileMenu from "./components/PopupMobileMenu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./js/vendor/jquery.js";
import "./js/vendor/modernizer.min.js";
import "./js/vendor/feather.min.js";
import "./js/vendor/slick.min.js";
import "./js/vendor/bootstrap.js";
import "./js/vendor/text-type.js";
import "./js/vendor/wow.js";
import "./js/vendor/aos.js";
import "./js/vendor/particles.js";
import "./js/main.js";

function App() {
  return (
    <>
      <Header/>
      <PopupMobileMenu/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
