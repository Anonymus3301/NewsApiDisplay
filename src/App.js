import './App.scss';
import LeftBar from './Components/leftbar'
import MainContent from './Components/MainContent';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {

  return (
    <Router>
    <div className="App">
    <div className="container">
      <LeftBar/>
      <MainContent />
    </div>
    <div className="mobileView">
      KPKP
    </div>
    </div>
    </Router>
  );
}

export default App;
