import HeaderImg from '../assets/img/header-img.png'

function Header() {
  return (
    <div className="container">
        <div className="space d-none d-md-block"></div>
                <div style={{height : "20px "}} className='d-block d-md-none'></div>
        <br />
       <div className="row header">
        <section className=" col-md-6">
            <h1 className='text-center text-md-start'>Rent a <span> Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>

            <div className="space2 d-none d-md-block"></div>
                <div style={{height : "20px "}} className='d-block d-md-none'></div>

            <p className='text-center mx-auto text-lg-start'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                <div className="space2 d-none d-md-block"></div>
                <div style={{height : "20px "}} className='d-block d-md-none'></div>

            <form action=""  className='d-flex'>
                <input type="text" placeholder='Search for location...' />
                <button>Get Started</button>
            </form>
        </section>

        <section className='col-10 col-md-5 mx-auto ms-md-5 ps-0 ps-md-5 mt-5 mt-md-0'>
            <img src={HeaderImg} className='img-fluid' alt="" />
        </section>
       </div>
    </div>
  )
}
export default Header