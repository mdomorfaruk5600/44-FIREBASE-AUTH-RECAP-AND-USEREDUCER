import React from 'react';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './components/PatientManagement/PatientManagement';


function App() {
  return (
    <div className="App">
      <ReducerCount />
      <PatientManagement />
    </div>
  );
}

export default App;
