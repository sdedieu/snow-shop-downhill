import "./App.css";
import './index.css';
import React from 'react';
import Downhill from "./pages/Downhill";
import DownhillDetail from "./pages/DownhillDetail";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import '../public/favicon.ico';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/downhill/:id">
            <DownhillDetail />
          </Route>
          <Route path="/downhill">
            <Downhill />
          </Route>
          <Redirect from="/" to="/downhill" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
