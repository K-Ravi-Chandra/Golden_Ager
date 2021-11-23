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
                Name : K.Ravi Chandra
            </div>
            <div>
                Email : cs19b020@iittp.ac.in
            </div>
            <div>
                Age : 56
            </div>
            <div>
                Address : 2nd road, mehaboob nagar
            </div>
            <div>
                Volunteer Name : Aditya
            </div>
            <div>
                Volunteer No : 1234567890
            </div>
            <div>
                Volunteer Email : cs19b019@iittp.ac.in
            </div>
            <div>
                Doctor : Charan
            </div>
            <div>
            <Button variant="outlined" onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}

export default Profile
