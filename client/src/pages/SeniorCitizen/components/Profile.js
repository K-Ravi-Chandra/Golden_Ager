import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router'
import axios from "axios";
const Profile = (props) => {
    let history = useHistory();
    const [data, setData] = React.useState([]);

  const [fetching , setFetching] = React.useState(true)
  const [error , setError] =   React.useState(false)

  React.useEffect(async () => {
    console.log(props.data.email)
    const email = props.data.email
    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      await axios.get(
        "api/seniorcitizen/details",
        {
          email
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setData(response.data.details)
        console.log(response.data.details)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
      console.log(data);
  }, [])

    const logout = () => {

        localStorage.removeItem("authToken");
        history.push("/");

    }
    return (
        <div>
            Profile Page <br/>
            <div>
                Name : 
            </div>
            <div>
                Email : 
            </div>
            <div>
                Age : 
            </div>
            <div>
                Address : 
            </div>
            <div>
                Volunteer Name : 
            </div>
            <div>
                Volunteer No : 
            </div>
            <div>
                Volunteer Email : 
            </div>
            <div>
                Doctor : 
            </div>
            <div>
            <Button variant="outlined" onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}

export default Profile
