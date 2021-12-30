import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'antd/dist/antd.css';

import LandingPage from "./pages/landingPage/landingPage";
import Home from "./pages/home/home";
import Theory from "./pages/theory/theory";
import Definition from './pages/theory/definition';
import Exercise from './pages/theory/exercise';
import Laboratory from './pages/laboratory/laboratory';
import Chat from './pages/chat/chat';
import ListUsers from './pages/listUsers/listUsers';
import Profile from './pages/profile/profile';
import Celebration from './components/celebration';
import NotFound from './components/notFound';

function App() {
  if(window.screen.width < 800){
    return (
      <div style={{height: "100vh", width: "100%", background: "#000", paddingTop: "30vh" }}>
        <h1 style={{ color: "#FFD700", textAlign: "center", margin: "2.5%"}}>
          Esta app en su versión 1.0 no está optimizada para el uso 
          en dispositivos con pantalla pequeña. Uso recomendado en Laptops o PCs.
        </h1>
      </div>
    );
  }
  else {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/theory' component={Theory} />
          <Route exact path='/theory/definition' component={Definition} />
          <Route exact path='/theory/exercise' component={Exercise} />
          <Route exact path='/laboratory' component={Laboratory} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/listUsers' component={ListUsers} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/fest' component={Celebration} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
