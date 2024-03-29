import React from 'react'
import Axios from 'axios';
import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Dashboardmenu from './Dashboardmenu';
import Sidebar from './Sidebar';
// import Board from './Board';
import UserHomepage from './UserHomepage'

import { Outlet } from 'react-router-dom';

export default function Dashboard(props) {

    const [message, setMessage] = useState([]);

    const [allBenefits, setAllBenefits] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
          console.log(localStorage.getItem('access_token'));
         (async () => {
           try {
            Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
            Axios.defaults.headers.common['Content-Type'] = 'application/json';
            //console.log(Axios.defaults.headers);
            const {data} = await Axios.get('/api/benefit/list'); //, {headers: {"Authorization": "Bearer " + localStorage.getItem('access_token')}}
             setMessage(data);
             setAllBenefits(data);

            // console.log(data);
            //  alert("Benefit List")
          } catch (e) {
            console.log('Error Not Authorized: ' + e)
          }
         })()};
     }, []);

    //  const allRecord = message.map((record, index) => (
    //   <p>{index}. {record}</p>
    //   ))

//console.log(JSON.stringify(message));

  return (
    <>

<Sidebar userData={props.userData} />


<div className="main-content position-relative max-height-vh-100 h-100">
<Dashboardmenu userData={props.userData} logout={props.logout} />

<Outlet />

{/* <Routes>

  <Route path="/dashboard" element={ <UserHomepage benefits={allBenefits} /> }>
  <Route path="orgs" element={ <Orgtable /> }></Route>
  
  </Route>
  
</Routes> */}


</div>

    {/* <p>{allRecord}</p> */}
    {/* {JSON.stringify(message)} */}
    {/* <Scripts /> */}

    </>
  )
}
