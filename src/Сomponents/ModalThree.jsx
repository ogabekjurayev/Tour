import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import strelka from "../ImgSvg/strelka.svg";
import Karta from "../Imgs/Karta.jpg";
import roadxiva from "../Imgs/roadkhiva.jpg";
import roadsamarqand from "../Imgs/roadsamarqand.jpg";
import roadnukus from "../Imgs/roadnukus.jpg";

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
            SUGGESTED UZBEKITAN ROAD TRIP ITINERARY
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="Modal-h4">
              Day 1: Tashkent to Samarkand (Approx. 4 hours, 300 km)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Departure: </span> Start your road
                trip in the capital city,{" "}
                <span className="Modal-span-small">Tashkent</span>, where you
                can visit the{" "}
                <span className="Modal-span-small">
                  Khast Imam Complex, Independence Square,
                </span>{" "}
                and <span className="Modal-span-small">Chorsu Bazaar</span>{" "}
                before hitting the road.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">On the way: </span> Stop at
                <span className="Modal-span-small">Jizzakh</span>, a small city
                with beautiful landscapes and traditional markets.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Arrival in Samarkand: </span> Once
                in Samarkand, check into your hotel and begin exploring the
                magnificent{" "}
                <span className="Modal-span-small">Registan Square</span>, the
                stunning
                <span className="Modal-span-small">Shah-i-Zinda complex</span>,
                and{" "}
                <span className="Modal-span-small">Ulugh Beg Observatory</span>.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> Day 2: Explore Samarkand</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Highlights:</span> Spend the whole
                day visiting Samarkand’s major sights, including{" "}
                <span className="Modal-span-small">
                  Bibi-Khanym Mosque, Gur-e-Amir Mausoleum, and Shah-i-Zinda{" "}
                </span>
                (the Avenue of Tombs).
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Bonus Tip: </span>If you're
                traveling with kids or teens, explore the ancient silk road
                markets and pick up some souvenirs like ceramics or scarves.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              Day 3: Samarkand to Bukhara (Approx. 4-5 hours, 280 km)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Departure: </span> Head out from
                <span className="Modal-span-small">Samarkand</span> to{" "}
                <span className="Modal-span-small">Bukhara</span>, another
                UNESCO World Heritage Site.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> On the way: </span>Stop at{" "}
                <span className="Modal-span-small">Nisa</span>, the ruins of an
                ancient Parthian city. It’s a good place for a quick detour to
                see historical ruins while stretching your legs.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Arrival in Bukhara: </span>{" "}
                Bukhara is known for its historical significance. Spend the
                evening exploring{" "}
                <span className="Modal-span-small"> Lyab-i-Hauz</span>, a
                charming square with cafes and beautiful architecture.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> Day 4: Explore Bukhara</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Highlights:</span>
                Visit the{" "}
                <span className="Modal-span-small">
                  Ark Fortress, Bolo Haouz Mosque, and Poi Kalon Minaret
                </span>
                . You can also visit the{" "}
                <span className="Modal-span-small">Bukhara Bazaar</span> for
                traditional crafts and textiles. For families, consider a
                horse-drawn carriage ride around the city or a traditional
                puppet show for kids.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              {" "}
              Day 5: Bukhara to Khiva (Approx. 6-7 hours, 450 km)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Departure: </span>Leave Bukhara in
                the morning for the long drive to{" "}
                <span className="Modal-span-small">Khiva</span>, an ancient city
                that feels like stepping back in time.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> On the way: </span>Make a stop at
                the <span className="Modal-span-small">Kyzylkum Desert</span>{" "}
                for a brief camel ride or a short exploration of the sands. You
                might also stop at the
                <span className="Modal-span-small">Moynak</span>, an abandoned
                town near the former Aral Sea, to witness the surreal{" "}
                <span className="Modal-span-small">ship graveyard</span>.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Arrival in Khiva: </span>After a
                long drive, relax and get ready to explore the stunning{" "}
                <span className="Modal-span-small">Itchan Kala</span>, Khiva’s
                historic inner city surrounded by massive mudbrick walls.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">Day 6: Explore Khiva</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Highlights:</span> Spend the day
                wandering the ancient streets of{" "}
                <span className="Modal-span-small">Itchan Kala</span>, a UNESCO
                World Heritage Site. Visit the{" "}
                <span className="Modal-span-small">
                  Kunya Ark, Juma Mosque, and the Islam Khodja Minaret
                </span>
                . Explore the ancient caravanserais and bazaars that once served
                travelers along the Silk Road.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              Day 7: Khiva to Nukus (Approx. 4-5 hours, 250 km)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Departure:</span>Head towards
                <span className="Modal-span-small">Nukus</span>, the capital of
                Karakalpakstan, known for its unique blend of art and history.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> On the way: </span>Make stops in
                small towns along the way for a taste of local life and some
                traditional crafts
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Arrival in Nukus: </span>Nukus is
                home to the{" "}
                <span className="Modal-span-small">Savitsky Museum</span>, one
                of the largest collections of Russian avant-garde art in the
                world. It's a fascinating cultural stop for art lovers.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              Day 8: Nukus to Tashkent (Approx. 10 hours, 600 km)
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Departure: </span> Begin your
                drive back to Tashkent, passing through the{" "}
                <span className="Modal-span-small"> Karakum Desert</span>.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> On the way: </span> Make a stop at
                <span className="Modal-span-small"> Mizdakhan Necropolis</span>,
                an ancient burial site, for a bit of exploration.
              </li>
              <li className="Modal-li">
                <span className="Modal-span"> Arrival in Tashkent: </span>After
                the long drive, relax and reflect on your trip in Tashkent,
                where you can enjoy a leisurely evening at one of the city's
                famous tea houses.
              </li>
            </ul>
          </div>

          <div className="FotosModal-all">
            <div className="FotosModal-1">
              <div>
                <img className="fotos1" src={Karta} alt="" />
              </div>
              <div>
                <img className="fotos2" src={roadnukus} alt="" />
              </div>
            </div>
            <div className="FotosModal-2">
              <div>
                <img className="fotos2" src={roadsamarqand} alt="" />
              </div>
              <div>
                <img className="fotos4" src={roadxiva} alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
