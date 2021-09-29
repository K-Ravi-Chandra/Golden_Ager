import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/loginpage/LoginPage'
import LandingPage from './pages/landingpage/LandingPage'
import Userdashboad from './pages/dashboard/userdashboard'

function App() {
  return (
        <Router>
            <Switch>
              <Route exact path= "/Golden_Ager">
                  <LandingPage/>
              </Route>
              <Route exact path= "/Golden_Ager/login">
                  <Login/>
              </Route>
              <Route  exact path= "/Golden_Ager/dashboard">
                  <Userdashboad/>
              </Route>
              <Route>
                <div> Yet to design this page</div>
              </Route>
            </Switch>
        </Router>
  );
}

export default App;
