import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


const UserDashBoard = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
  
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
          setPrivateData(data.data);
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
    return error ? (
      <span className="error-message">{error}</span>
    ) : (
        <>
              <div>{privateData}</div>
      <button onClick={logout}>Logout</button>
        </>
    );
  };
  
  export default UserDashBoard;
