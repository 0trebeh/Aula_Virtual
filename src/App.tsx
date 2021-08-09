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
import Laboratory from './pages/laboratory/laboratory';
import Chat from './pages/chat/chat';
import Ratings from './pages/ratings/ratings';
import Profile from './pages/profile/profile';
import Evolution from './pages/evolution/evolution';
import Delivers from './pages/delivers/delivers';
import Challenge from './pages/challenge/challenge';
import C1 from './pages/challenge/c1';
import C2 from './pages/challenge/c2';
import C3 from './pages/challenge/c3';
import C4 from './pages/challenge/c4';
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
          <Route exact path='/laboratory' component={Laboratory} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/ratings' component={Ratings} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/evolution' component={Evolution} />
          <Route exact path='/delivers' component={Delivers} />
          <Route exact path='/challenge' component={Challenge} />
          <Route exact path='/challenge/c1' component={C1} />
          <Route exact path='/challenge/c2' component={C2} />
          <Route exact path='/challenge/c3' component={C3} />
          <Route exact path='/challenge/c4' component={C4} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
