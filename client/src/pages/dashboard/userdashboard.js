import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import SeniorCitizenDashboard from '../SeniorCitizen/SeniorCitizenDashboard';
import FamilyDashboard from '../family/FamilyDashboard';
import DoctorDashboard from '../doctor_dashboard/DoctorDashboard'
import VolunteerDashboard from '../volunterr_dashboard/VolunteerDashboard'

const UserDashBoard = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    const [role, setRole] = useState('4');
  
    useEffect(() => {

    if(!localStorage.getItem("authToken")){
            history.push("/login");
    }
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
        try {
          const { data } = await axios.get("/api/private", config);
          console.log({data})
          setPrivateData(data.data);
          setRole(data.role);
        } catch (error) {
          localStorage.removeItem("authToken");
          setError("You are not authorized please login");
        }
      };
  
      fetchPrivateDate();
    }, [history]);

    const logout = () => {
        localStorage.removeItem("authToken");
        history.push("/");
    }
    const renderSwitch = (role) => {
      switch(role) {
        
        case '0':
          return <VolunteerDashboard/>
;
        
        case '1':
          return <>
                    <div>{privateData}</div>
                    <button onClick={logout}>Logout</button>
                    <SeniorCitizenDashboard/>   
                 </>;
        
        case '2':
          return <DoctorDashboard/>;
        
        case '3':
          return <FamilyDashboard/> 

        default:
          return <div></div>;
      }
    }
    
    return error ? (
      <span className="error-message">{error}</span>
    ) : (
        <>
        {renderSwitch(role)}
        </>
    );
  };
  
  export default UserDashBoard;
