import Logo from "../assets/img/Group.png";
import tokenbutton from "../assets/img/tokenbutton.png";
import metamask from "../assets/img/metamask.png";
import walletconnect from "../assets/img/walletconnect.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [overlayState, setOverlayState] = useState(false);

  const toggleOverlay = (e) => {
    e.preventDefault();
    setOverlayState(!overlayState);
  };

  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={Logo} alt="" className="img-fluid col-4" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-black ms-0 ms-lg-4"
                  to={"/place"}
                >
                  Place to stay
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-black ms-0 ms-lg-4">
                  NFTs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-black ms-0 ms-lg-4">
                  Community
                </a>
              </li>
              <button
                className="btn btn-md nav-button text-white ms-0 ms-md-5"
                onClick={toggleOverlay}
                type="submit"
              >
                Connect wallet
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {overlayState && (
          <div className="overlay">
            <div className="wallet col-10 mx-auto col-md-6">
              <div className="mt-4"></div>
              <div className="d-flex justify-content-around">
                <h3 className="justify-content-start ">Connect Wallet</h3>
                <a
                  onClick={toggleOverlay}
                  href="/"
                  className="justify-content-end close"
                >
                  X
                </a>
              </div>
              <div className="line w-full mt-3"></div>

              <div className="container-fluid">
                <p className="mt-4 ms-4">Choose your preferred wallet :</p>
                <a href="#">
                  <div className="token-button d-flex justify-content-between">
                    <img src={metamask} className="img-fluid" alt="" />
                    <img src={tokenbutton} className="img-fluid" alt="" />
                  </div>
                </a>

                <a href="#">
                  <div className="token-button2 d-flex justify-content-between mt-3">
                    <img src={walletconnect} className="img-fluid" alt="" />
                    <img src={tokenbutton} className="img-fluid " alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
