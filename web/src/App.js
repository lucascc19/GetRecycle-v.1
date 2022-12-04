import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RestrictedAccess from './components/pages/RestrictedArea';
import Map from './components/pages/Map'

import Container from './components/layout/Container/index';
import Navbar from './components/layout/Navbar/index';
import Footer from './components/layout/Footer/index';

function App() {
  return (
   <Router>
    <Navbar />
    <Container customClass="min-height"> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<RestrictedAccess />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </Container>
    <Footer />
   </Router> 
  )
}

export default App;
