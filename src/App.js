import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from  './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (Message, Type) => {
    setAlert({
      Message: Message,
      Type: Type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ('black');
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert("light mode has been enabled", "success");
    }
  }

  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ('red');
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert("light mode has been enabled", "success");
    }
  }

  const toggleMode3 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ('blue');
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode}  toggleMode2={toggleMode2}  toggleMode3={toggleMode3}/>
      <Alert Alert={alert} />
     
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
        <About />
      </div>

      
    </>
  );

}
export default App;
