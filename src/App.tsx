import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLogin from './pages/Login';
import PageLandingPage from './pages/LandingPage';
import ColaboradoresPage from './pages/GestionPage/ColaboradoresPage';

function App() {
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<PageLogin />}/>
          <Route path="/home" element={<PageLandingPage />}/>
          <Route path="/gestionColaboradores" element={<ColaboradoresPage/>}/>
        </Routes>              
      </BrowserRouter>      
    </div>
  );
}

export default App;
