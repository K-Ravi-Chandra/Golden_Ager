import Registration from './components/Registration';
import History from './components/History';
import HelpRequests from './components/HelpRequests';
import Financialrequests from './components/Financialrequests';
import Dashboard from './components/Dashboard';
import Register from './components/register/Register'
import Donations from './components/Donations'
const dashboardRoutes = [

  {
    path : "/dashboard",
    exact : true,
    component : Dashboard
  },
  {
    path : "/donations",
    exact : true,
    component : Donations
  },

  {
    path: "/registeration",
    component: Register,
  },

  {
    path: "/History",
    exact : true,
    component: History,
  },

  {
    path: "/HelpRequests",
    exact : true,
    component: HelpRequests,
  },
  {
    path: "/FinancialRequests",
    exact : true,
    component: Financialrequests,
  },



];

export default dashboardRoutes;