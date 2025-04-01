import strelka from "../ImgSvg/strelka.svg";
import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo";
import ModalThree from "../Сomponents/ModalThree";
import ModalFour from "../Сomponents/ModalFour";
export default function Destinationt() {
  return (
    <div className="bg-destination">
      <div className="container" id="category">
        <div className="destination-h1-big">
          <h1 className="navbar-h1">Browse Destinations by category</h1>
        </div>
        <div className="section">
          <div className="Destination-all">
            <div className="hero">
              <div className="hero-child-1">
                <a className="hero-child-a-1" href="#">
                  Adventure
                </a>
                <p className="hero-child-p">5 Destinations</p>
                <div className="hero-box">
                  <ModalOne />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="hero-child-2">
                <a className="hero-child-a-2" href="#">
                  Family
                </a>
                <p className="hero-child-p">10 Destinations</p>
                <div className="hero-box">
                  <ModalTwo />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero">
              <div className="hero-child-3">
                <a className="hero-child-a-3" href="#">
                  Road Trip
                </a>
                <p className="hero-child-p">8 Destinations</p>
                <div className="hero-box">
                  <ModalThree />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="hero-child-4">
                <a className="hero-child-a-4" href="#">
                  Art & Culture
                </a>
                <p className="hero-child-p">12 Destinations</p>
                <div className="hero-box">
                  <ModalFour />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
