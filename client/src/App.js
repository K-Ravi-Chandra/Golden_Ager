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
            
              <Route  path= "/login" component = {Login}/>
              <Route  path= "/register" component = {Register}/>
              <Route  path= "/forgotpassword" component = {ForgotPassword}/>
              <Route  path= "/resetpassword/:resetToken" component = {ResetPassword}/>


              <Route  path= "/FamilyDashboard">
                  <FamilyDashboard/>
              </Route>
 
              <Route   path= "/SeniorCitizenDashboard">
                  <SeniorCitizenDashboard/>
              </Route>
              <Route  path= "/VolunterDashboard">
                  <VolunteerDashboard/>
              </Route>
              <Route  path= "/DoctorDashboard">
                  <DoctorDashboard/>
              </Route>
              <Route  path= "/donaterequirements">
                <DonateRequirements/>
              </Route>

              <PrivateRoute  path = "/" component = {UserDashBoard}/>



            </Switch>
        </Router>
  );
}

export default App;
