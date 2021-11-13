import React from 'react'
import routes from "./routes"
import { Switch, Route, Redirect } from "react-router-dom";

const Register = (props) => {

    const data = props.data
    
    return (
        <div>
            <Switch>
              {routes.map(({component: Cmp, ...route}) => {
                
                  return (
                    <Route
                      {...route}
                      render={props => <Cmp {...props}  data={data} />}
                    />
                  );

              })}
              <Redirect from="/registeration" to="/registeration/seniorcitizen" />
            </Switch>

        </div>
    )
}

export default Register
