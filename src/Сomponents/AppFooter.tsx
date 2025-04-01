import Nextour from "../ImgSvg/Nextour.webp";
import phone from "../Imgs/Telfon.png";
import Sms from "../Imgs/Sms.png";
import Whatsapp from "../Imgs/whatsapp.png";
import TelegramKok from "../Imgs/telegramKok.png";
import FacebookKok from "../Imgs/facebookKok.png";
import Instagram from "../Imgs/instagram.png";
export default function AppFooter() {
  return (
    <div>
      <div className="footer" id="contact">
        <div className="container footer-box-1">
          <div className="footer-box">
            <a className="navbar-brand-footer-a" href="#">
              {" "}
              <img className="navbar-nextour-img" src={Nextour} alt="" />
            </a>
            <p className="footer-box-p">Uzbekistan, Bukhara region</p>
            <div className="footer-box-child">
              {
                <div className="Phone-group-1 d-flex">
                  <div className="image-wrapper">
                    {" "}
                    <img className="Phone-logo-1" src={phone} alt="" />
                  </div>
                  <p className="Phone-p-1-footer">+998934555661</p>
                </div>
              }
              {
                <div className="Phone-group-2">
                  <div className="image-wrapper">
                    <img className="Phone-logo-2" src={Sms} alt="" />
                  </div>
                  <p className="Phone-p-2-footer">
                    yulduzkhayitova41@gmail.com
                  </p>
                </div>
              }
            </div>
          </div>
          <ul className="ul">
            <li className="list">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Category</a>
            </li>
            <li className="list">
              <a href="#">Reviews</a>
              <a href="#">Tour Programs</a>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="footer-right-logos">
            <div className="image-wrapper">
              <a
                className="Facebookw"
                href="https://www.facebook.com/YulduzXayitova"
                target="_blank"
              >
                {" "}
                <img className="footer-right-logo-1" src={FacebookKok} alt="" />
              </a>
            </div>
            <div className="image-wrapper">
              <a href="https://wa.me/qr/AGALM5KU57MTA1" target="_blank">
                {" "}
                <img className="footer-right-logo-4" src={Whatsapp} alt="" />
              </a>
            </div>
            <div className="image-wrapper">
              <a href="https://t.me/yulduzkhayitova" target="_blank">
                {" "}
                <img className="footer-right-logo-5" src={TelegramKok} alt="" />
              </a>
            </div>
            <div className="image-wrapper">
              <a href="https://www.instagram.com/yulduz_guide?" target="_blank">
                {" "}
                <img className="footer-right-logo-6" src={Instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
