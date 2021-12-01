// All Imports ...
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import SeniorCitizenDashboard from '../SeniorCitizen/SeniorCitizenDashboard';
import FamilyDashboard from '../family/FamilyDashboard';
import DoctorDashboard from '../doctor_dashboard/DoctorDashboard'
import VolunteerDashboard from '../volunterr_dashboard/VolunteerDashboard'

// UserDashboard
const UserDashBoard = ({history}) => {

  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [role, setRole] = useState('4');
  
  useEffect(() => {

    if(!localStorage.getItem("authToken"))
    {
      history.push("/login");
    }

    const fetchPrivateDate = async () =>  {

      const config = 
      {
        headers: 
        {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      
      // In case of unauthorized login , it tells to login to the page 
      try 
      {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data); 
        setRole(data.role);
      } 
      catch (error) 
      {
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
  
  // Switch cases for entering all Dashboards
  const renderSwitch = (role) => {
    switch(role)
    {
      case '0':
        return <VolunteerDashboard data={privateData}/>
   
      case '1':
        return <SeniorCitizenDashboard data={privateData}/>   
        
      case '2':
        return <DoctorDashboard data={privateData}/>
       
      case '3':
        return <FamilyDashboard data={privateData}/> 

      default:
        return <div></div>;
    }
  }
    
  return error ? 
  (
    <span className="error-message"> {error} </span>
  ) : 
  
  (
    <>
      {renderSwitch(role)}
    </>
  );

};
  
export default UserDashBoard;
