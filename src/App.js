import React, {useState, useEffect}  from 'react';
import './styles/App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeApplication from './components/HomeApplication'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Route exact path="/apply" component={HomeApplication} />
      </div>
    </BrowserRouter>
  );
}

export default App;
