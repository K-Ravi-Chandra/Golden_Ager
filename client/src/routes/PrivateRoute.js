import { Redirect, Route } from "react-router-dom";
import LandingPage from '../pages/landingpage/LandingPage'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <LandingPage/>
        )
      }
    />
  );
};

export default PrivateRoute;