import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import strelka from "../ImgSvg/strelka.svg";
import Toshketmuzey from "../Imgs/tashketnmuzey.jpg";
import qoqon from "../Imgs/qoqon.jpg";
import shaxrisab from "../Imgs/shaxrisabz.jpg";
import termiz from "../Imgs/termiz.jpg";

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
            CULTURE AND HISTORY
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="Modal-h4">1. Samarkand</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights: </span>{" "}
                Registan Square, Shah-i-Zinda, Bibi-Khanym Mosque, Ulugh Beg
                Observatory.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Samarkand is a
                UNESCO World Heritage Site and one of the most iconic cities of
                the Silk Road. With its stunning architectural gems, it
                showcases the glorious history of Persian, Timurid, and Central
                Asian culture. The city is famous for its intricate tilework,
                Islamic architecture, and historical monuments.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">2. Bukhara</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span> Ark
                Fortress, Bolo Haouz Mosque, Poi Kalon Complex, Lyab-i Hauz.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Bukhara is a city
                steeped in history and Islamic culture, known for its
                well-preserved medieval architecture. Once a thriving center of
                trade and religion, it features impressive madrasas, mosques,
                and ancient trading domes that reflect the essence of Central
                Asian culture and craftsmanship.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">3. Khiva</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span> Itchan
                Kala (Old City), Kunya Ark, Juma Mosque, Tash Khauli Palace.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Khiva is a
                UNESCO-listed ancient city that retains its original
                architecture, giving visitors a glimpse into life on the Silk
                Road. The city's walled fortress, ornate mosques, and palaces
                offer a fascinating exploration of Uzbekistan’s Islamic art and
                architecture.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 4. Tashkent</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Khast Imam Complex, State Museum of History of Uzbekistan,
                Independence Square, Fine Arts Museum.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>As the capital
                city, Tashkent combines modernity with rich cultural heritage.
                The Khast Imam Complex holds valuable Islamic manuscripts,
                including the famous Quran of Caliph Uthman, while museums
                throughout the city showcase the country's art, history, and
                traditions.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 5.Shahrisabz</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Ak-Saray Palace, Dorut-Tilavat Complex, Jahangir Mausoleum.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>The birthplace of
                Timur (Tamerlane), Shahrisabz is a UNESCO World Heritage Site
                full of historical monuments. Visitors can explore the grand
                ruins of Timur’s palace, the impressive mausoleums, and the
                remnants of grand architectural projects.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">6. Fergana Valley</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Rishtan (ceramics), Margilan (silk weaving), Andijan
                (traditional crafts).
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>The Fergana Valley
                is the heart of Uzbekistan’s traditional arts and crafts. Visit
                Rishtan for its famous ceramics, Margilan for its silk weaving,
                and Andijan for local crafts to immerse yourself in the age-old
                artisan traditions that have been passed down through
                generations.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">7. Nukus (Karakalpakstan)</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Savitsky Museum, Mizdakhan Necropolis.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Nukus is home to
                the impressive Savitsky Museum, which houses one of the world’s
                largest collections of Russian avant-garde art. The museum is a
                hidden gem for art lovers and provides a fascinating look into
                Uzbekistan's cultural evolution in the 20th century
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">8. Termiz</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Buddhist Monuments of Termez, Fayaz Tepa, Zurmala Stupa.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Situated on the
                border with Afghanistan, Termiz is rich in both Buddhist and
                Islamic heritage. The ancient Buddhist monuments and stupas,
                along with Islamic sites like mosques and mausoleums, offer a
                unique blend of cultural influences.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">10. Kokand</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Khudoyar Khan Palace, Juma Mosque, Norbut-Biya Mosque.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Once the capital
                of the Kokand Khanate, this city offers impressive examples of
                Central Asian architecture and is known for its palaces,
                mosques, and bazaars. It’s a great place to explore the cultural
                history of the region’s Khanates.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">11.Samarqand Registan Street Art</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Modern murals and public art installations.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>While Samarkand is
                famous for its historical monuments, the city has also become
                home to some impressive modern street art. Local and
                international artists have transformed public spaces into
                open-air galleries, blending contemporary and traditional
                influences.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">12.Tashkent Art Museums</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Cultural Highlights:</span>
                Museum of Applied Arts, The State Museum of Art, Art Gallery of
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Tashkent boasts a
                vibrant art scene with its range of art museums, showcasing both
                traditional and modern works of Uzbek and Central Asian artists.
                The Museum of Applied Arts is especially known for its
                collection of Uzbek textiles, ceramics, and decorative arts.
              </li>
            </ul>
          </div>
          <div className="FotosModal-all">
            <div className="FotosModal-1">
              <div>
                <img className="fotos1" src={Toshketmuzey} alt="" />
              </div>
              <div>
                <img className="fotos2" src={qoqon} alt="" />
              </div>
            </div>
            <div className="FotosModal-2">
              <div>
                <img className="fotos2" src={shaxrisab} alt="" />
              </div>
              <div>
                <img className="fotos4" src={termiz} alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
