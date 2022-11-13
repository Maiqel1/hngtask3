import discover from '../assets/img/discover.png'

function Discover() {
  return (
    <div className="discover mt-5 pb-5">
        <div className="row d-flex flex-column-reverse flex-md-row container mx-auto">
            <section className='col-md-6'>
            <div className="space4 d-none d-md-block"></div>
            <div style={{height:"50px"}} className='d-block d-md-none'></div>

                <h2 className='text-white'>Metabnb NFTs</h2>
                <div style={{height: "25px"}}></div>
                <p className='text-white'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <div style={{height: "40px"}}></div>
                <button className='btn btn-lg btn-light'>Learn More    </button>
            </section>
            <section className='col-md-6'>
                <div className="space"></div>
                <img src={discover} className='img-fluid' alt="" />
            </section>
        </div>
        <br /><br />
    </div>
  )
}
export default Discover