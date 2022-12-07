import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NewPoint from './components/pages/NewPoint'
import Home from './components/pages/Home'
import RestrictedAccess from './components/pages/RestrictedAccess'
import Map from './components/pages/Map'
import Points from './components/pages/Points'
import Point from './components/pages/Point'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<RestrictedAccess />} />
      <Route path="/map" element={<Map />} />
      <Route path="/newpoint" element={<NewPoint />} />
      <Route path="/points" element={<Points />} />
      <Route path="/point/:id" element={<Point />} />
    </Routes>
   </Router>
  )
}

export default App;
