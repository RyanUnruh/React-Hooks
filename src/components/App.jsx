
import React from 'react'
import Users from './Users';
import SingleUser from './SingleUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Hook It Up!</h1>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/:id/details" component={SingleUser} />
      </Switch>
    </Router>
  )
}

export default App;