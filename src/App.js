import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'
import SearchResults from './components/SearchResults'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route exact path="/users/:id" component={UserProfile} />
    <Route exact path="/search-results" component={SearchResults} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
