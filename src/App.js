import './App.scss';
import LeftBar from './Components/leftbar'
import MainContent from './Components/MainContent';
import Topbar from './Components/Topbar';
import BottomBar from './Components/BottomBar';
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
      <Topbar/>
      <MainContent/>
      <BottomBar/>
    </div>
    </div>
    </Router>
  );
}

export default App;
