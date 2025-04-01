import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import strelka from "../ImgSvg/strelka.svg";
import Botanik from "../Imgs/BotanikTashkentjpg.jpg";
import Buxoroooooooooo from "../Imgs/Buxoroooooooooooooooo.jpg";
import Nukus from "../Imgs/nukus_079.jpg";
import Xiva from "../Imgs/Xiva.webp";

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
            FAMILY-FRIENDLY DESTINATIONS AND ACTIVITIES IN UZBEKISTAN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="Modal-h4">1. Tashkent</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights: </span>{" "}
                Tashkent Zoo, Amusement Parks, Family-friendly Museums,
                Botanical Gardens.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> As the capital
                city, Tashkent offers plenty of activities for families.{" "}
                <span className="Modal-span-small">The Tashkent Zoo</span> is
                home to a wide variety of animals, while{" "}
                <span className="Modal-span-small">
                  Tashkentland Amusement Park
                </span>{" "}
                provides thrilling rides for kids and adults alike. Families can
                also enjoy the{" "}
                <span className="Modal-span-small">Botanical Gardens</span> and
                the{" "}
                <span className="Modal-span-small">
                  {" "}
                  Modal-span-small"State Museum of History of Uzbekistan
                </span>
                , which offers interactive exhibits for children.{" "}
                <span className="Modal-span-small">
                  Alisher Navoi Opera House
                </span>
                offers family-friendly performances, and parks like{" "}
                <span className="Modal-span-small">Independence Square</span>{" "}
                provide space for a relaxing stroll.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">2. Samarkand Family Highlights</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>Registan
                Square, Shah-i-Zinda, Ulugh Beg Observatory, Toy for Kids at
                Bibi-Khanym Mosque.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Samarkand is not
                only a UNESCO World Heritage site but also a place that offers
                family-friendly activities. Kids can enjoy exploring the
                <span className="Modal-span-small"> Registan Square</span>,
                which often hosts live performances and cultural events. The
                historical{" "}
                <span className="Modal-span-small">Shah-i-Zinda</span>
                complex is captivating with its intricate blue-tiled mausoleums,
                while{" "}
                <span className="Modal-span-small">
                  Ulugh Beg Observatory
                </span>{" "}
                provides an interesting glimpse into the world of astronomy. The
                city also offers a range of local crafts and souvenirs that kids
                can enjoy picking up along the way.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">3. Bukhara</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>Ark
                Fortress, Lyab-i-Hauz, Bolo Haouz Mosque, Puppet Theatre.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Bukhara is a
                charming city with rich history and culture, perfect for
                families. Explore the{" "}
                <span className="Modal-span-small">Ark Fortress</span> and{" "}
                <span className="Modal-span-small"> Lyab-i-Hauz</span>
                to experience history up close. The{" "}
                <span className="Modal-span-small">Bolo Haouz Mosque</span> and
                its surroundings are lovely places for a relaxed family outing.
                For younger children, the
                <span className="Modal-span-small">
                  Bukhara Puppet Theatre
                </span>{" "}
                offers fun and entertaining performances based on traditional
                stories. The old city’s streets are pedestrian-friendly and
                great for family walks.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 4. Khiva</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Itchan Kala, Kunya Ark, Juma Mosque, Camel Rides.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> Khiva’s
                well-preserved old town,{" "}
                <span className="Modal-span-small">Itchan Kala</span>, is like
                stepping into a living museum. Families can wander through
                narrow streets, exploring impressive sites like the
                <span className="Modal-span-small">
                  Kunya Ark Fortress
                </span> and{" "}
                <span className="Modal-span-small"> Juma Mosque</span>. A fun
                activity for kids is taking a camel ride around the ancient city
                walls or nearby desert landscapes. Khiva’s friendly atmosphere
                makes it an easy place to explore with children.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4"> 5. Fergana Valley</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>Rishtan
                (Ceramics Workshops), Margilan (Silk Weaving), Cultural
                Experiences in Andijan.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> The{" "}
                <span className="Modal-span-small"> Fergana Valley</span> is
                great for families who enjoy hands-on cultural experiences.
                Visit <span className="Modal-span-small">Rishtan</span>, known
                for its beautiful ceramics, where kids can try their hand at
                making their own pottery. In{" "}
                <span className="Modal-span-small">Margilan</span>, children can
                witness the silk-weaving process and even try on colorful silk
                clothes. The area’s traditional crafts and local markets provide
                an enriching experience for the whole family
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">6. Chimgan Mountains</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Hiking, Cable Car Rides, Horseback Riding, Picnic Areas.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>For a
                family-friendly adventure in nature, the{" "}
                <span className="Modal-span-small">Chimgan Mountains</span>{" "}
                offer hiking, cable car rides, and horseback riding, all set
                against beautiful landscapes. It’s an excellent destination for
                a family picnic, with plenty of space for children to play in
                the fresh mountain air. In winter, you can enjoy skiing and
                snowboarding, while the summer months offer great opportunities
                for trekking and exploring.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">7. Aral Sea (Moynak)</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Desert Exploration, Historical Ruins, Boat Rides.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Although it’s an
                unconventional destination, the{" "}
                <span className="Modal-span-small">Aral Sea</span> and the ghost
                town of <span className="Modal-span-small">Moynak </span>{" "}
                provide a unique experience. Families can visit the{" "}
                <span className="Modal-span-small">Moynak Ship Graveyard</span>,
                where boats are stranded in the desert after the sea dried up.
                It’s an exciting, educational trip for older children and
                teenagers to learn about environmental changes. Families can
                also enjoy a desert safari or take boat rides in nearby areas.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">8. Shahrisabz</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Ak-Saray Palace, Dorut-Tilavat Complex, Family Walks.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Shahrisabz, the
                birthplace of Timur (Tamerlane), offers historical attractions
                and easy family walks through its beautiful gardens and ancient
                ruins. The{" "}
                <span className="Modal-span-small"> Ak-Saray Palace ruins</span>{" "}
                and{" "}
                <span className="Modal-span-small"> Dorut-Tilavat Complex</span>{" "}
                are fascinating places to visit, and the town's relatively small
                size makes it easy to explore with children.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">
              9. Tashkent's Botanical Gardens and Parks
            </h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Picnic Spots, Playground Areas, Tranquil Walks.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span> For a more
                relaxed family day out, Tashkent’s{" "}
                <span className="Modal-span-small">Botanical Gardens</span>{" "}
                offer a peaceful environment to enjoy nature, with picnic spots
                and playgrounds for children. The{" "}
                <span className="Modal-span-small">Central Park </span>{" "}
                (Mustaqillik Square) and{" "}
                <span className="Modal-span-small"> Alisher Navoi Park</span>{" "}
                are also popular spots for families to enjoy walks, enjoy local
                food, and let kids play.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="Modal-h4">10. Karakalpakstan (Nukus)</h4>
            <ul>
              <li className="Modal-li">
                <span className="Modal-span"> Family Highlights</span>
                Savitsky Museum, Mizdakhan Necropolis.
              </li>
              <li className="Modal-li">
                <span className="Modal-span">Why Visit:</span>Nukus is home to
                the world-renowned{" "}
                <span className="Modal-span-small">Savitsky Museum</span>, which
                houses an impressive collection of Russian avant-garde art and
                artifacts. It's a great place to expose children to art and
                history in an engaging way. The ancient ruins of{" "}
                <span className="Modal-span-small">Mizdakhan Necropolis</span>{" "}
                are nearby, and visiting them can spark fascinating historical
                discussions with older kids.
              </li>
            </ul>
          </div>

          <div className="FotosModal-all">
            <div className="FotosModal-1">
              <div>
                <img className="fotos1" src={Botanik} alt="" />
              </div>
              <div>
                <img className="fotos2" src={Buxoroooooooooo} alt="" />
              </div>
            </div>
            <div className="FotosModal-2">
              <div>
                <img className="fotos2" src={Nukus} alt="" />
              </div>
              <div>
                <img className="fotos4" src={Xiva} alt="" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
