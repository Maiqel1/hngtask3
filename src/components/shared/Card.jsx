import Rating from '../../assets/img/rating.png'

function Card({children}) {
  return (
    <div className="customCard h-full">
        <div className='text-center'>
          {children}
        </div>

        <div className="d-flex justify-content-between">
        <p className="ps-2 mt-3">Desert King</p>
        <h5 className="pe-2 mt-3">1MBT per night</h5>
        </div>

        <div className="d-flex justify-content-between">
        <p className="ps-2 ">"2345km away"</p>
        <p className="pe-2">available for 2weeks stay</p>
        </div>

        <div className="d-flex justify-content-start">
          <img src={Rating} className='ps-2' alt="" />
        </div>

    </div>
  )
}
export default Card