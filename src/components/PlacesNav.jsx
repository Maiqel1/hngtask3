import  Location   from '../assets/img/location.png'

function PlacesNav() {

  return (
    <div className="container-fluid mt-5 ms-0 ms-md-5 ">
         <div className=" row">
            <div className='d-flex justify-content-around  flex-wrap col-md-8 mt-3 ps-0 ps-md-5 ms-0  ms-md-5'>
            <p className='ms-2'>Restaurant</p>
            <p className='ms-2'>Cottage</p>
            <p className='ms-2'>Castle</p>
            <p className='ms-2'>Fantast city</p>
            <p className='ms-2'>Beach</p>
            <p className='ms-2'>Carbins</p>
            <p className='ms-2'>Off-grid</p>
            <p>Farm</p>
            </div>
            {/* <img src={Location} alt="" /> */}
            <div className='d-flex justify-content-between location col-4 col-md-2 col-lg-2 w-full p-1'>

                    <p className='mt-2'>Location</p>
                    <i className='mt-1'> <img src={Location} className='img-fluid' alt="" /> </i>


                {/* <input type="text" placeholder="Location" className='p-2 mb-3 col-4 col-md-5' onChange={onChange} value={location}
                
                />
                 */}
                {/* <img src={location2} className='img-fluid' alt="" /> */}

                
            </div>
        </div> 

        {/* <div className=" row">
            <section className='d-flex justify-content-around flex-wrap mt-3 col-md-7'>
            <p className='ps-3'>Restaurant</p>
            <p className='ps-3'>Cottage</p>
            <p className='ps-3'>Castle</p>
            <p className='ps-3'>Fantast city</p>
            <p className='ps-3'>Beach</p>
            <p className='ps-3'>Carbins</p>
            <p className='ps-3'>Off-grid</p>
            <p className='ps-3'>Farm</p>
            </section>

            <section className='col-md-5 me-1'>
            <div className='d-flex justify-content-center '>
                <input type="text" placeholder="Location" className='p-2 mb-3 col-7 col-md-4' onChange={onChange} value={location}
                
                />
                <i className='ms-5 ps-5 mt-1' style={{position : 'absolute'}}> <img src={Location} alt="" /> </i>
            </div>
            </section>
        </div> */}
    </div>
  )
}
export default PlacesNav