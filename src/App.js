import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound/index'
import Details from './components/TeamMatches/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:Id" component={Details} />
    <Route component={NotFound} />
  </Switch>
)
export default App
