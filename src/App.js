// import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title = "Textutils" aboutText = 'About us' mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TextForm heading = 'Type Here' showAlert = {showAlert} mode = {mode}  />} />
            <Route path="/about/*" element={<About/> } />
          </Routes>
        </BrowserRouter>
    </div>
    </>  
  );
}

export default App;
