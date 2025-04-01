import Collects1 from "../Imgs/Collects-1.jpg";
import Collects2 from "../Imgs/Collectrs-2.jpg";

export default function CollectsMoments() {
  return (
    <div>
      <div className="Mobil-bg-Collects">
        <div className="Mobil-Collects-Moment-top">
          <h2 className="Mobil-Collects-Moment-top-h2">
            Collect Moments not Things.
          </h2>
        </div>
        <div className="Mobil-imgs">
          {" "}
          <img className="Mobil-Collects-Moment-img-1" src={Collects1} alt="" />
        </div>
        <div className="Mobil-Collects-Moment-bottom">
          <h3 className="Mobil-Collects-Moment-bottom-h3">
            Travel the Silk Road.
          </h3>
          <p className="Mobil-Collects-Moment-bottom-p">
            <span className="Mobil-Collects-Moment-bottom-span">
              Embrace family gatherings:
            </span>
            Cherish the warmth of shared meals, the laughter of children, and
            the wisdom of elders.
          </p>
          <p className="Mobil-Collects-Moment-bottom-p">
            <span className="Mobil-Collects-Moment-bottom-span">
              Experience local traditions:
            </span>
            Dive into the vibrant world of Uzbek culture – from the mesmerizing
            sufi music to the art of making plov.
          </p>
          <p className="Mobil-Collects-Moment-bottom-p">
            <span className="Mobil-Collects-Moment-bottom-span">
              Create memories that last:
            </span>
            Capture the beauty of the world around you – not just with your
            camera, but with your heart and mind.
          </p>
        </div>
        <div className="Mobil-imgs2">
          {" "}
          <img className="Mobil-Collects-Moment-img-2" src={Collects2} alt="" />
        </div>
        {/* <div className="Mobil-container">
          <div></div>
        </div> */}
      </div>
    </div>
  );
}
