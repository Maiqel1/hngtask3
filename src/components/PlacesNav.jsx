import  Location   from '../assets/img/location.png'

function PlacesNav() {

  return (
    <div className="container mt-5 ms-0 ms-md-5 ">
         <div className=" row">
            <div className='d-flex justify-content-around  flex-wrap col-md-8 mt-3 ps-0 ps-md-5 ms-0  ms-md-5'>
            <p className='ms-2 ms-md-4'>Restaurant</p>
            <p className='ms-2 ms-md-4'>Cottage</p>
            <p className='ms-2 ms-md-4'>Castle</p>
            <p className='ms-2 ms-md-4'>Fantasy city</p>
            <p className='ms-2 ms-md-4'>Beach</p>
            <p className='ms-2 ms-md-4'>Carbins</p>
            <p className='ms-2 ms-md-4'>Off-grid</p>
            <p className='ms-2 md-md-4'>Farm</p>
            </div>
            <div className='d-flex justify-content-between location col-4 col-md-2 col-lg-2 ms-5 w-full p-1'>

                    <p className='mt-2'>Location</p>
                    <i className='mt-1'> <img src={Location} className='img-fluid' alt="" /> </i>
              
            </div>
        </div> 
    </div>
  )
}
export default PlacesNav