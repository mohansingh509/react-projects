import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';



function App() {
 const[mode,setMode] = useState('light')
 const[alert,setAlert] = useState(null)
 
 const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);

 }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
  }else{
    setMode('light')
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled","success");
  }
  
 }
  return(
    <>
    <Navbar title="TestUtils" aboutText= "TextUtils" Search="Search" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter Your Text Here" showAlert={showAlert} mode={mode}/>
    </div>
    
   </>
    
  );
    
  
}

export default App;
