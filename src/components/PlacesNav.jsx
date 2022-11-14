import  Location   from '../assets/img/location.png'

function PlacesNav() {

  return (
    <div className="container mt-5 ms-0 ms-md-5 ">

<div class="scrollmenu ms-0 ms-md-5 ps-0 ps-md-5">
  <a href="ms-1 ms-md-5">Restaurant</a>
  <a href="ms-1 ms-md-5">Cottage</a>
  <a href="ms-1 ms-md-5">Castle</a>
  <a href="ms-1 ms-md-5">Fantasy City</a>
  <a href="ms-1 ms-md-5">Beach</a>
  <a href="ms-1 ms-md-5">Cabins</a>
  <a href="ms-1 ms-md-5">Off-grid</a>
  <a href="ms-1 ms-md-5">Farm</a>
    
    <a className='d-inline ms-3 ms-md-4'>
      <div className=' d-inline  location col-4 col-md-2 col-lg-2 p-2'>

                    <p className='mt-2 ms-2 d-inline'>Location</p>
                    <i className='mt-1 ms-3 d-inline'> <img src={Location} className='img-fluid' alt="" /> </i>
              
            </div>
            
    </a>

</div>

         {/* <div className=" row">
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
        </div>  */}
    </div>
  )
}
export default PlacesNav