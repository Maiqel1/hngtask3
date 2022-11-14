import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from '../src/pages/Home';
import Place from '../src/pages/Place';


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
