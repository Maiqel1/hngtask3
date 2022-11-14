import footerLogo from '../assets/img/footer-logo.svg'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import instagram from '../assets/img/instagram.png'

function Footer() {
  return (
    <footer className=" footer p-5">
        <div className="row  mt-5">
            <section className=" col-md-3">
                <ul>
                    <li><img src={footerLogo} className='img-fluid' alt="" /></li>
                    <div className='mt-5 pt-0 pt-md-4 d-none d-md-flex justify-content-around' >
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className='mt-3 mt-md-5 ms-2 ms-md-4 pt-0 pt-md-4 text-center d-none d-md-flex' style={{fontSize : "16px"}} >&copy;  2022 Metabnb</p>
                </ul>
            </section>
            <section className=" col-md-3 mt-3 mt-md-0">
                    <ul className='col-6 mx-auto'>
                        <li><h4>Community</h4></li>
                        <li><a href='#'>NFT</a></li>
                        <li><a href='#'>Tokens</a></li>
                        <li><a href='#'>Landlords</a></li>
                        <li><a href='#'>Discord</a></li>

                    </ul>
            </section>
            <section className=" col-md-3 mt-3 mt-md-0 ">
                <ul className=' col-6 mx-auto'>
                    <li><h4>Places</h4></li>
                    <li><a href='#'>Castle</a></li>
                    <li><a href='#'>Farms</a></li>
                    <li><a href='#'> Beach</a></li>
                    <li><a href='#'>Learn More</a></li>
                </ul>
            </section>
            <section className=" col-md-3 mt-3 mt-md-0">
                    <ul className='col-6 mx-auto'>
                    <li><h4>About us</h4></li>
                    <li><a href='#'>Road map</a></li>
                    <li><a href='#'>Creators</a></li>
                    <li><a href='#'>Career</a></li>
                    <li><a href='#'>Contact us</a></li>

                    </ul>
            </section>
            <div className='mt-3 ms-2 d-flex d-md-none justify-content-around' >
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <p className='mt-3 mt-md-5 ms-2 ms-md-4 pt-0 pt-md-4 text-center d-block d-md-none' style={{fontSize : "16px"}} >&copy;  2022 Metabnb</p>
        </div>
    
    </footer>
  )
}
export default Footer