import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NewPoint from './components/pages/NewPoint'
import Home from './components/pages/Home'
import RestrictedAccess from './components/pages/RestrictedAccess'
import Map from './components/pages/Map'
import Points from './components/pages/Points'
import Point from './components/pages/Point'

function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user">
        <RestrictedAccess />  
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/newpoint">
        <NewPoint />
      </Route>
      <Route path="/points">
        <Points />
      </Route>
      <Route path="/point/:id">
        <Point />
      </Route>
    </Switch>   
   </Router>
  )
}

export default App;
