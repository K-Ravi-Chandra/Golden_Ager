import { Navigate, useRoutes } from 'react-router-dom';


import MyFamilyHealth from './components/MyFamilyHealth';
import FamilyProfile from './components/FamilyProfile';
import FamilyNotifications from './components/FamilyNotifications';

function DonateMoney(){
    return (
        <div>Donate Money</div>
    );
}

function DonateRequirements(){
    return (
        <div>Donate Senior Citizen Requirements</div>
    );
}

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: MyFamilyHealth,
  },
  {
    path: "/user",
    component: FamilyProfile,
  },

  {
    path: "/notifications",
    component: FamilyNotifications,
  },

  {
    path: "/donate-money",
    component: DonateMoney,
  },

  {
      path: "/donate-requirements",
      component: DonateRequirements,
  },

];

export default dashboardRoutes;