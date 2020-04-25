import React from 'react';
import './App.css';
import { PortalDiv } from './Portal/Portal';
import { FirstPage } from './Pages/FirstPage';

function App() {
  return (
    <div className="App">
      <FirstPage />
      <PortalDiv />
    </div>
  );
}

export default App;
