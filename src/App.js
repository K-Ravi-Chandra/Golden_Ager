import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/loginpage/LoginPage'
import LandingPage from './pages/landingpage/LandingPage'
import Userdashboad from './pages/dashboard/userdashboard'
import SignUp from './pages/SignUp/SignUp';
import senior from './pages/SeniorCitizen/senior';
import SeniorCitizenDashboard from './pages/SeniorCitizen/SeniorCitizenDashboard';
import FamilyDashboard from './pages/family/FamilyDashboard';

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
              <Route  exact path= "/Golden_Ager/family">
                  <FamilyDashboard/>
              </Route>
              <Route exact path= "/Golden_Ager/signup">
                  <SignUp/>
              </Route>
              {/* <Route  exact path= "/Golden_Ager/dashboard">
                  <Userdashboad/>
              </Route> */}
              <Route  exact path= "/Golden_Ager/dashboard">
                  <SeniorCitizenDashboard/>
              </Route>
              <Route>
                <div> Yet to design this page</div>
              </Route>

            </Switch>
        </Router>
  );
}

export default App;
