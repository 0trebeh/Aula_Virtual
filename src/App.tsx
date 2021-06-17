import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'antd/dist/antd.css';
//import axios from 'axios';

import Home from "./pages/home/home"

//axios.defaults.baseURL = '';

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
          <Route exact path='/' component={Home} />
          
        </Switch>
      </Router>
    );
  }
  
}

export default App;
