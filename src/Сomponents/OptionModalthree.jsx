import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModelYulduz3 from "../Imgs/yulduzgroup.jpg";

function Example() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault(); // Sahifa yangilanishining oldini oladi
    setShow(true);
  };

  return (
    <>
      <a onClick={handleShow} className="box-a" href="#">
        MORE
      </a>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            TOUR OPTIONS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {" "}
            <ul className="Modal-ul-three">
              <p className="Modal-span">
                Dreaming of exploring the legendary Silk Road? We can organize
                your perfect tour to the captivating cities of Uzbekistan.
                Immerse yourself in the architectural marvels of Samarkand,
                wander the ancient alleyways of Bukhara, or discover the living
                museum that is Khiva. Whether you crave a deep dive into
                history, a taste of vibrant culture, or an adventure off the
                beaten path, we'll tailor an unforgettable Uzbek experience just
                for you. Let us guide you through.
              </p>
            </ul>
          </div>
          <div>
            {" "}
            <img className="OptionModal-img-3" src={ModelYulduz3} alt="" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
