import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Tokens from "../components/Tokens"
import CardSection from "../components/CardSection"
import Discover from "../components/Discover"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
       <Navbar/> 
      <Header/>   
      <Tokens/>
      <CardSection/>
      <Discover/>
      <Footer/>
    </>
  )
}
export default Home