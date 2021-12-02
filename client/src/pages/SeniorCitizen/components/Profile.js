// All Imports--------------------------------------------
import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router'
import axios from "axios";

//-----------------------------------------------------------

const Profile = (props) => {

  let history = useHistory();
  const [data, setData] = React.useState([]);
  const [profile, setprofile] = React.useState([]);
  
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
  
    // Sending to subpages on successfu login
    await axios.post( 
      "api/seniorcitizen/details",
      {
        email
      },
      config
    ).then(function(response) {
      setError(false);
      setFetching(false);
      setData(response.data.details)
      setprofile(response.data.details.profile)
      console.log(response.data.details.profile)
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

  // Button names in subpage (username, email.... and Logout option)
  return (
    <div>
        Profile Page <br/>
        
        <div>
          Name : {profile.username} 
        </div>

        <div>
          Email : {data.email}
        </div>

        <div>
          Age : {profile.age}
        </div>

        <div>
          MobileNo : {profile.phone}
        </div>

        <div>
          Address : {profile.address}
        </div>

        <div>
          Volunteer Email : {data.volunter}
        </div>

        <div>
          Doctor Email : {data.doctor}
        </div>

        <div>
          <Button variant="outlined" onClick={logout}>Logout</Button>
        </div>

    </div>
  )
}

export default Profile
