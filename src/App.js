import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light'); // state variable to declare whether dark mode on or off
const [alert,setAlert]= useState(null);

const showAlert=(message, type)=>{
  setAlert({
    msg: message, 
    type: type 
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

  const toggleMode = () => {
    if (mode === 'light' ) {
        setMode('dark');
        document.body.style.backgroundColor= '#042743';
        showAlert("Dark Mode is enabled","success"); //success ka s small coz it's a type and its syntax is that way
        // setInterval(() => {
        //   document.title='Install TextUtils now!'
        // }, 2000);
        // setInterval(() => {
        //   document.title='TextUtils is amazing!'
        // }, 1500);
    }
    else {
        setMode('light');
        document.body.style.backgroundColor= 'white';
        showAlert("Light Mode is enabled","success");
    }
  };  
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode}/> 
<Alert alert={alert}/>

<div className="container my-3">
      {/* <Routes> 
          <Route path="/about" element= {<About/>}/>
           <Route path="/" element={ */}
           <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}
</div>
 {/* </Router> */}
</>
  ); 
}
export default App;
 