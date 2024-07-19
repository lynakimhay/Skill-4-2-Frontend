
import Button from "../components/Button";
import Table from "../components/Table";
import Farmlandtable from "../components/Farmlandtable";
import React,{ useState,useEffect} from "react";
import API_BASE_URL from '../config'
function Cropcycle() {
  const [cropcycles,setCropcycles]=useState([]);
  useEffect(()=>{
    const fetchCropcycles=async()=>{
      try{
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        setCropcycles(data);
        return response.data
      } catch(error){
        console.log(error);
      }
    }
    fetchCropcycles();
  },[])
  return (
    <>
   
       <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Farm_land_id</th>
          <th>Crop_id</th>
          <th>Open_date</th>
          <th>Close_date</th>
          <th>Status</th>
          
         
        </tr>
      </thead>
      <tbody>
        {cropcycles.map((cropcycle,index)=>(
          <tr key={cropcycle.id}>
            <td>{index + 1}</td>
            <td>{cropcycle.farm_land_id}</td>
            <td>{cropcycle.crop_id}</td>
            <td>{cropcycle.open_date}</td>
            <td>{cropcycle.close_date}</td>
            <td>{cropcycle.status}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import Button from "../components/Button";
import '../styles/Table.css'

const Cropcycle = () => {

  const [cropcycles,setCropcycle] = useState([]);
  useEffect(()=>{
    const fetchCropcycle=async()=>{
      try{
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        console.log(data);
        setCropcycle(data);
        return response.data
      }catch(error){
        console.log(error);
      }
    }
    fetchCropcycle();
  },[])
  return (
    <>
      <div className="btn">
      <Button/><Button/>
        </div>
      
      <table>
<thead>
  <tr>
    
    <th>id</th>
    <th>Farmland id</th>
    <th>Crop id</th>
    <th>Open date</th>
    <th>Close date</th>
    <th>Status</th>
  </tr>
  </thead>
      <tbody>
        {cropcycles.map((cropcycle,index)=>(
          <tr key={cropcycle.id}>
    <td>{index + 1}</td>
    <td>{cropcycle.farm_land_id}</td>
    <td>{cropcycle.crop_id}</td>
    <td>{cropcycle.open_date}</td>
    <td>{cropcycle.close_date}</td>
    <td>{cropcycle.status}</td>
  </tr>
  ))}
      </tbody>
</table>
   
</>
)}


export default Cropcycle;