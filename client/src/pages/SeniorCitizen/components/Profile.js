import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router'

const Profile = () => {
    let history = useHistory();
    const logout = () => {

        localStorage.removeItem("authToken");
        history.push("/");
    }
    return (
        <div>
            Profile Page 
            <Button variant="outlined" onClick={logout}>Logout</Button>
        </div>
    )
}

export default Profile
