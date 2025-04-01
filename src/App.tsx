import "./App.css";
import "./index.css";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Сomponents/Header";
import CollectsMoments from "./Сomponents/CollectsMoments";
import Destinationt from "./Сomponents/Destination";
import ReviewsTravellers from "./Сomponents/ReviewsTravellers";
import TourOption from "./Сomponents/TourOption";
import FAQ from "./Сomponents/ImportantTravel";
import AppFooter from "./Сomponents/AppFooter";
import AboutMe from "./Сomponents/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ResponsiveComponent from "./Сomponents/Responsive";
import { useMediaQuery } from "react-responsive";
import MobilniReviewsTravel from "./Сomponents/MobilniReviewsTravel";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 435px)" });

  return (
    <div>
      <Header />
      <AboutMe />
      <ResponsiveComponent />
      <Destinationt />
      <div>{isMobile ? <MobilniReviewsTravel /> : <ReviewsTravellers />}</div>
      <TourOption />
      <FAQ />
      <AppFooter />
    </div>
  );
};

export default App;
