import { Navigate, useRoutes } from 'react-router-dom';


import DashboardPage from './Components/Dashboard';
import Registration from './Components/Registration';
import History from './Components/History';
import HelpRequests from './Components/HelpRequests';
import Financialrequests from './Components/Financialrequests';

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    path: "/Registration",
    component: Registration,
  },

  {
    path: "/History",
    component: History,
  },

  {
    path: "/HelpRequests",
    component: HelpRequests,
  },
  {
    path: "/FinancialRequests",
    component: Financialrequests,
  },



];

export default dashboardRoutes;