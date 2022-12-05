import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import RestrictedAccess from './components/pages/RestrictedAccess'
import Map from './components/pages/Map'

import Footer from './components/layout/Footer'

function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user">
        <RestrictedAccess />
      </Route>
      <Route exact path="/map">
        <Map />
      </Route>
    </Switch>
    <Footer />
   </Router>
  )
}

export default App;
