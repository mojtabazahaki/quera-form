import React, { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import   Loding from './components/Spin.gif'

const App = () => {

const [datast, setdatast]=useState([])

function compareItemsByYear(item1, item2) {

  return item2.birthdate.localeCompare(item1.birthdate);

}

useEffect(()=>{

  fetch("http://localhost:3500/users")
  .then(data=> data.json())
  .then(page => setdatast(page))
  
},[])


 const data =  useMemo(()=>{
    
   

      return  datast.sort(compareItemsByYear)
     
   }
     
,[datast])



  return (
    <>
       
       {
        datast.length === 0 ?<img src={Loding} alt="lod"></img> :<Card data={data} />
       }
          
    
    </>
  );
};

export default App;
