import { Navigate, useRoutes } from 'react-router-dom';


import DashboardPage from './Components/Dashboard';
import UserProfilePage from './Components/UserProfile';
import NotificationsPage from './Components/Notifications';
import Patients from './Components/Patients';
import CriticalPatients from './Components/CriticalPatients';

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
    path: "/notifications",
    component: NotificationsPage,
  },

  {
    path: "/patients",
    component: Patients,
  },
  {
    path: "/criticalpatients",
    component: CriticalPatients,
  },



];

export default dashboardRoutes;