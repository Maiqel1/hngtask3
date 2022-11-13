import footerLogo from '../assets/img/footer-logo.svg'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import instagram from '../assets/img/instagram.png'

function Footer() {
  return (
    <footer className=" footer p-5">
        <div className="row footer mt-5">
            <section className="col-6 col-md-3">
                <ul>
                    <li><img src={footerLogo} className='img-fluid' alt="" /></li>
                    <div className='mt-5 pt-0 pt-md-4 d-flex justify-content-around' >
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className='mt-3 mt-md-5 ms-2 ms-md-4 pt-0 pt-md-4' style={{fontSize : "16px"}} >&copy;  2022 Metabnb</p>
                </ul>
            </section>
            <section className="col-6 col-md-3">
                    <ul>
                        <li><h4>Community</h4></li>
                        <li><p>NFT</p></li>
                        <li><p>Tokens</p></li>
                        <li><p>Landlords</p></li>
                        <li><p>Discord</p></li>

                    </ul>
            </section>
            <section className="col-6 col-md-3">
                <ul>
                    <li><h4>Places</h4></li>
                    <li><p>Castle</p></li>
                    <li><p>Farms</p></li>
                    <li><p>Beach</p></li>
                    <li><p>Learn More</p></li>
                </ul>
            </section>
            <section className="col-6 col-md-3">
                    <ul>
                    <li><h4>About us</h4></li>
                    <li><p>Road map</p></li>
                    <li><p>Creators</p></li>
                    <li><p>Career</p></li>
                    <li><p>Contact us</p></li>

                    </ul>
            </section>
        </div>
        <br /><br />
    </footer>
  )
}
export default Footer