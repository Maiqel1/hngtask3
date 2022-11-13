import Logo from '../assets/img/Group.png'
import tokenbutton from '../assets/img/tokenbutton.png'
import metamask from '../assets/img/metamask.png'
import walletconnect from '../assets/img/walletconnect.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const[overlayState, setOverlayState] = useState(false)

  const toggleOverlay = (e) => {
    e.preventDefault()
    setOverlayState(!overlayState)
  }

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={Logo} alt="" className='img-fluid' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
          
          <li className="nav-item">
          <Link className="nav-link text-black" aria-current="page" to={"/"} >Home</Link>
        </li>
          
        <li className="nav-item">
          <Link className="nav-link text-black ms-0 ms-lg-4" to={"/place"}>Place to stay</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link text-black ms-0 ms-lg-4">NFTs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black ms-0 ms-lg-4">Community</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn nav-button text-white" onClick={toggleOverlay} type="submit">Connect wallet</button>
      </form>
    </div>
  </div>
</nav>

   <div  >
    {overlayState && 
   <div className='overlay'>
        <div className="wallet col-10 mx-auto col-md-6">
            <div className="mt-4"></div>
            <div className="d-flex justify-content-around">
                <h3 className="justify-content-start ">Connect Wallet</h3>
                <a onClick={toggleOverlay} className="justify-content-end close">X</a>

            </div>
            <div className="line w-full mt-3"></div>

            <div className='container-fluid' >
                <p className='mt-4 ms-4'>Choose your preferred wallet :</p>
                <div className='token-button d-flex justify-content-between'>
                    <img src={metamask} className='img-fluid' alt="" />
                    <img src={tokenbutton} className='img-fluid' alt="" />
                </div>
                <div className='token-button2 d-flex justify-content-between mt-3'>
                    <img src={walletconnect} className='img-fluid' alt="" />
                    <img src={tokenbutton} className='img-fluid ' alt="" />
                </div>
            </div>
        </div>
    </div>}
   </div>

    </div>

    
  )
}
export default Navbar