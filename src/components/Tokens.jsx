import Token1 from "../assets/img/token1.svg";
import Token2 from "../assets/img/token2.svg";
import Token3 from "../assets/img/token3.svg";

function Tokens() {
  return (
    <>
      <div className="space3 d-none d-md-block"></div>
      <div style={{ height: "60px " }} className="d-block d-md-none"></div>
      <div className=" token container-fluid">
        <div className="row ms-0 ms-md-5 ps-0 ms-md-5 ">
          <div className="col-4 ms-">
            <img src={Token1} alt="" className="img-fluid" />
          </div>
          <div className="col-4 ps-0 ps-md-5">
            <img src={Token2} alt="" className="img-fluid" />
          </div>
          <div className="col-4 ps-0 ps-md-5">
            <img src={Token3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Tokens;
