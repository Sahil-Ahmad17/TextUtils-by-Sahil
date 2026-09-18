import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';



function App() {
    const [Mode, setMode] = useState("light");
    const [alert, setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type,
      })
      setTimeout(() => {
      setAlert(null);   
      },1500);

    }
  const toggleMode=()=>{
    if(Mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
     showAlert("Light mode enabled", "Success")
    }
    else{
      setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark mode enabled", "Success")
    }
  }
  return (
   <>
   
<Navbar title="TextUtils"  about="about" Mode={Mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}/>

<div className="container">
  <Textform heading="Enter The Text To Analyze"showAlert={showAlert} Mode={Mode}/></div>
{/* <About/> */}


   </>
  );
}

export default App;
