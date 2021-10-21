import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/loginpage/LoginPage'
import LandingPage from './pages/landingpage/LandingPage'
import SeniorCitizenDashboard from './pages/SeniorCitizen/SeniorCitizenDashboard';
import FamilyDashboard from './pages/family/FamilyDashboard';
import Register from './pages/register/Register.js';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import ResetPassword from './pages/forgot_password/ResetPassword';
import UserDashBoard from './pages/dashboard/userdashboard';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
      <Router>
            <Switch> 
            <PrivateRoute exact path = "/" component = {UserDashBoard}/>
              <Route exact path= "/login">
                  <Login/>
              </Route>
              <Route exact path= "/forgotpassword">
                <ForgotPassword/>
              </Route>
             <Route exact path= "/passwordreset/:resetToken">
                <ResetPassword/>
              </Route>
              <Route  exact path= "/Golden_Ager/FamilyDashboard">
                  <FamilyDashboard/>
              </Route>
              <Route exact path= "/register">
                  <Register/>
              </Route>
              <Route  exact path= "/Golden_Ager/SeniorCitizenDashboard">
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
