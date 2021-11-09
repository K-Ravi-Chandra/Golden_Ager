import { Navigate, useRoutes } from 'react-router-dom';
import Registration from './components/Registration';
import History from './components/History';
import HelpRequests from './components/HelpRequests';
import Financialrequests from './components/Financialrequests';

const dashboardRoutes = [

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