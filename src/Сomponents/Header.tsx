import uzbeki from "../Imgs/uzbeki.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Header() {
  const onClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="bg">
        <div className="container-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="nav-bosh">
                <a className=" navbar-header-a" href="#">
                  Tour & Travel
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                style={{ justifyContent: "flex-end" }}
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="navbar-a" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-a"
                      href="#"
                      onClick={() => onClick("aboutme")}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-a"
                      href="#"
                      onClick={() => onClick("category")}
                    >
                      Category
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-a"
                      href="#"
                      onClick={() => onClick("reviews")}
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-a"
                      href="#"
                      onClick={() => onClick("tour programs")}
                    >
                      Tour Options
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="navbar-a"
                      href="#"
                      onClick={() => onClick("contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="navbar-bottom">
            <img
              className="Header-sarlavha-img"
              src={uzbeki}
              style={{ width: (window.innerWidth * 370) / 431 }}
              alt=""
            />
            <p className="overlay-text">
              Where history, culture and adventure await!
            </p>
          </div>
        </div>
      </div>
      <div className="linya2"></div>
    </div>
  );
}

// 431(ekran) -> 370(rasm)
// ekran(window.innerWidth -> 392, 393, 394, 299, ...) -> x sm(rasm)

// 350(tel ekran) * 370(rasm) / 431(ekran) => x sm(rasm)
