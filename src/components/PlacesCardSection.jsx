import place1 from "../assets/img/place1.png";
import place2 from "../assets/img/place2.png";
import place3 from "../assets/img/place3.png";
import place4 from "../assets/img/place4.png";
import place5 from "../assets/img/place5.png";
import place6 from "../assets/img/place6.png";
import place7 from "../assets/img/place7.png";
import place8 from "../assets/img/place8.png";
import place9 from "../assets/img/place9.png";
import place10 from "../assets/img/place10.png";
import place11 from "../assets/img/place11.png";
import place12 from "../assets/img/place12.png";
import card1x from "../assets/img/card1x.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import Card from "./shared/Card";

function PlacesCardSection() {
  return (
    <center>
    <div className="container mb-5">
      <div className="row d-flex justify-content-center mt-5 mx-auto">
        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place1}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place2}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place3}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place4}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-1 mt-md-3 mx-auto">
        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={card1x}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={card2}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={card3}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={card4}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>
      </div>



      <div className="row d-flex justify-content-center mt-1 mt-md-3 mx-auto">
        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place5}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place6}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place7}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place8}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>
      </div>


      <div className="row d-flex justify-content-center mt-1 mt-md-3 mx-auto">
        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place9}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place10}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place11}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
          <Card>
            <img
              src={place12}
              className="img-fluid mx-auto ps-2 pe-2 pt-2"
              alt=""
            />
          </Card>
        </div>
      </div>

    </div>
    </center>
  );
}
export default PlacesCardSection;
