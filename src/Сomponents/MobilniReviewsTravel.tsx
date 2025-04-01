import Slider from "react-slick";
import Coment1 from "../Imgs/Coment1.jpg";
import Coment12 from "../Imgs/Coment-1-2.jpg";
import Coment2 from "../Imgs/Coment-2.jpg";
import Coment22 from "../Imgs/Coment-2-2.jpg";
import Coment3 from "../Imgs/Coment-3.jpg";
import Coment33 from "../Imgs/Coment-3-3.jpg";
import Coment4 from "../Imgs/Comentari-4.jpg";
import Collecs from "../Imgs/Collectrs-2.jpg";

export default function ReviewsTravellersMobile() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    pauseOnHover: false,
    slidesToScroll: 2,
  };

  return (
    <div className="bg2" id="reviews">
      <div className="container">
        <h2 className="Reviews-text">
          Traveling turns you into a Good storyteller
        </h2>

        {/* @ts-ignore */}
        <Slider
          {...settings}
          afterChange={() => console.log("test")}
          arrows={false}
          autoplaySpeed={3500}
          autoplay
        >
          <img className="img1" src={Coment1} alt="" />
          <img className="img2" src={Coment12} alt="" />

          <img className="img3" src={Coment2} alt="" />
          <img className="img4" src={Coment22} alt="" />

          <img className="img5" src={Coment3} alt="" />
          <img className="img6" src={Coment33} alt="" />

          <img className="img7" src={Coment4} alt="" />
          <img className="img8" src={Collecs} alt="" />
        </Slider>
      </div>
    </div>
  );
}
