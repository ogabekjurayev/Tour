import OptionModalone from "../Сomponents/OptionModal";
import OptionModalTwo from "../Сomponents/OptionModalTwo";
import OptionModalThree from "../Сomponents/OptionModalthree";

export default function TourOption() {
  return (
    <div>
      <div className="navbar-2" id="tour programs">
        <div className="container">
          <h1 className="parag">Tour options</h1>
          <div className="hero-2">
            <div className="box">
              <div className="box-child-1">
                <h1 className="box-child-h1">1 DAYS</h1>
                <p className="box-child-p">1 Day in Bukhara (4 hours)</p>
                <OptionModalone />
              </div>
            </div>
            <div className="box">
              <div className="box-child-2">
                <h1 className="box-child-h1">2 DAYS</h1>
                <p className="box-child-p">
                  2 Day in Bukhara - City and Suburb Tour
                </p>
                <OptionModalTwo />
              </div>
            </div>
            <div className="box">
              <div className="box-child-3">
                <h1 className="box-child-h1">3 DAYS</h1>
                <p className="box-child-p">
                  Tours to Samarkand, Khiva, Tashkent, Nukus, Termez, Fergana
                  valley, Aral Sea and surrounding area
                </p>
                <OptionModalThree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
