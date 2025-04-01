import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import strelka from "../ImgSvg/strelka.svg";
import CHimyan from "../Imgs/chimyan.jpg";
import Fergana from "../Imgs/Fergana.jpg";
import BuxoroModal from "../Imgs/BukharaModal.jpg";
import Tashketn from "../Imgs/Tashkent.jpg";

function Example() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault(); // Sahifa yangilanishining oldini oladi
    setShow(true);
  };

  return (
    <>
      <a onClick={handleShow} className="hero-box-a" href="#">
        EXPLORE
        <img className="hero-box-a-img" src={strelka} alt="" />
      </a>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            ADVENTURE <br /> DESTINATIONS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="Modal-h4">1. Chimgan Mountains</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>{" "}
                Hiking, trekking, and skiing.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Located near
                Tashkent, Chimgan offers stunning mountain views, especially
                popular for winter sports like skiing and snowboarding. In
                summer, it's a great spot for hiking, camping, and paragliding.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 2.Aral Sea (Moynak)</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>{" "}
                Desert exploration, historical ruins, and photography.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>The Aral Sea was
                once one of the largest lakes in the world, but it's largely
                dried up. Visit Moynak, an abandoned fishing town, to explore
                the ghostly ships stranded in the desert and learn about this
                environmental tragedy. It’s a surreal adventure and a
                photographer’s paradise.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 3. Fergana Valley</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>{" "}
                Hiking, mountain biking, and cultural exploration.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Known for its
                fertile lands and beautiful landscapes, the Fergana Valley is
                surrounded by mountains perfect for hiking and mountain biking.
                It also offers a glimpse into local traditions, crafts, and
                unique culture.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              {" "}
              4. Bukhara Oasis and Surrounding Deserts
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>
                Exploration of ancient sites, desert camping, and off-road
                tours.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>The Bukhara region
                is full of history, but the surrounding deserts offer adventure
                opportunities like off-road tours and overnight camping under
                the stars. You can also explore ancient ruins and caravanserais
                that dot the desert landscape.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              {" "}
              5. Samarkand & Surroundings (Hiking and Exploration)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>Hiking
                in nearby mountains and exploring ancient architecture.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>While Samarkand is
                famous for its historical landmarks, the surrounding hills and
                mountains provide excellent hiking and exploration
                opportunities. You can also visit ancient caravanserais and
                enjoy panoramic views of the Silk Road city
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              6. Tashkent’s Surrounding Hills and Forests
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Adventure Highlights:</span>
                Hiking, nature walks, and waterfalls.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Just outside of
                the capital, Tashkent, you can explore scenic hills, lush
                forests, and waterfalls like the Beldersay Waterfall, which are
                perfect for day trips or short treks.
              </li>
            </ul>
          </div>
          <div className="FotosModal-all">
            <div className="FotosModal-1">
              <div>
                <img className="fotos1" src={CHimyan} alt="" />
              </div>
              <div>
                <img className="fotos2" src={Fergana} alt="" />
              </div>
            </div>
            <div className="FotosModal-2">
              <div>
                <img className="fotos2" src={BuxoroModal} alt="" />
              </div>
              <div>
                <img className="fotos4" src={Tashketn} alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
