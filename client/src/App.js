import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/loginpage/LoginPage'
import SeniorCitizenDashboard from './pages/SeniorCitizen/SeniorCitizenDashboard';
import FamilyDashboard from './pages/family/FamilyDashboard';
import Register from './pages/register/Register.js';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import ResetPassword from './pages/forgot_password/ResetPassword';
import UserDashBoard from './pages/dashboard/userdashboard';
import PrivateRoute  from './routes/PrivateRoute';
import DoctorDashboard from './pages/doctor_dashboard/DoctorDashboard'
import VolunteerDashboard from './pages/volunterr_dashboard/VolunteerDashboard'
import DonateRequirements from './pages/donate/DonateRequirements';
import DonateMoney from './pages/donate/DonateMoney';

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
             <Route exact path= "/resetpassword/:resetToken">
                <ResetPassword/>
              </Route>
              <Route  exact path= "/FamilyDashboard">
                  <FamilyDashboard/>
              </Route>
              <Route exact path= "/register">
                  <Register/>
              </Route>
              <Route  exact path= "/SeniorCitizenDashboard">
                  <SeniorCitizenDashboard/>
              </Route>
              <Route exact path= "/VolunterDashboard">
                  <VolunteerDashboard/>
              </Route>
              <Route exact path= "/DoctorDashboard">
                  <DoctorDashboard/>
              </Route>
              <Route exact path= "/donaterequirements">
                <DonateRequirements/>
              </Route>
              <Route exact path= "/donatemoney">
                <DonateMoney/>
              </Route>
              <Route>
                <div>Page not found</div>
              </Route>

            </Switch>
        </Router>
  );
}

export default App;
