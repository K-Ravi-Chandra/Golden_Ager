import { Navigate, useRoutes } from 'react-router-dom';


import DashboardPage from './Components/Dashboard';
import UserProfilePage from './Components/UserProfile';
import AppointmentsPage from './Components/Appointments';
import Patients from './Components/Patients';

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/user",
    component: UserProfilePage,
  },

  {
    path: "/appointments",
    component: AppointmentsPage,
  },

  {
    path: "/patients",
    component: Patients,
  },
];

export default dashboardRoutes;