import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModelYulduz2 from "../Imgs/modalyulduz2.jpg";

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
          <div className="OptionModal-all">
            <div>
              {" "}
              <h4 className="Modal-h4">
                2 days in Bukhara – City and Suburb tour
              </h4>
              <ul>
                <span className="Modal-span">Day 1 </span>
                <li className="Modal-li"> Labi Hauz Complex</li>
                <li className="Modal-li"> Magoki Attori mosque</li>
                <li className="Modal-li"> Abdulaziz Khan Madrasah</li>
                <li className="Modal-li"> Ulugbek madrasah</li>
                <li className="Modal-li"> Trading domes</li>
                <li className="Modal-li">
                  The Kalon mosque and Miri Arab madrasah
                </li>
                <li className="Modal-li"> The Kalon minaret</li>
                <li className="Modal-li"> The Ark of Bukhara </li>
                <li className="Modal-li"> The Bolo Hauz mosque</li>
              </ul>
              <ul>
                <span className="Modal-span">Day 2 </span>
                <li className="Modal-li"> The Samanid Mausoleum</li>
                <li className="Modal-li"> Chashma Ayub Mausoleum</li>
                <li className="Modal-li"> Bahauddin Nakshbandi complex</li>
                <li className="Modal-li"> Sitorai Moxi Xosa</li>
                <li className="Modal-li">
                  {" "}
                  Traditional house of rich tradesman F.Xodjayev
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <img className="OptionModal-img-2" src={ModelYulduz2} alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
