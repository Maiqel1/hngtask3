// import Navbar from "../src/components/Navbar"
// import Header from "../src/components/Header"
// import Tokens from "../src/components/Tokens"
// import CardSection from "../src/components/CardSection"
// import Discover from "../src/components/Discover"
// import Footer from "../src/components/Footer"
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/Home';
import Place from './components/Place';


function App() {
  return (
    <>
    <Router>
      <Routes>

      <Route exact path='/' element={
        <>
        <Home/>
        </>
      }>
      </Route>

      <Route exact path='/place' element={<Place/>}>

      </Route>

      </Routes>
      </Router>
    </>
  );
}

export default App;
