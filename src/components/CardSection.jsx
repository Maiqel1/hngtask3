import Card from "./shared/Card"
import card1x from '../assets/img/card1x.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'
import card4 from '../assets/img/card4.png'

function CardSection() {
  return (
    <div className="container mx-auto" >

            <h1 className="text-center mt-5 pt-1">Inspiration for your next adventure</h1>

        <div className="row d-flex justify-content-center mt-5 mx-auto" >
        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card1x} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card2} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card3} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card4} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        

        </div>

        <div className="row d-flex justify-content-center mt-1 mt-md-4 mx-auto" >
        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card1x} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card2} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card3} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        <div className="col-10 col-md-6 col-lg-3 mt-3">
        <Card>
            <img src={card4} className='img-fluid mx-auto ps-2 pe-2 pt-2' alt="" />
        </Card> 
        </div>

        

        </div>
        
        
    </div>
  )
}
export default CardSection