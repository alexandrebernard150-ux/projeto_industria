import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando os componentes fixos
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Importando as páginas reais
import Home from './pages/Home';
import Login from './pages/Login';
import Pacientes from './pages/Pacientes';
import Consultas from './pages/Consultas';
import Nutricionistas from './pages/Nutricionistas';
import PlanoAlimentar from './pages/PlanoAlimentar';
import Usuarios from './pages/Usuarios';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  // Altere para true para visualizar o painel com Sidebar/Header
  const isAuthenticated = true; 

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="app-container">
          <Header />
          <div style={{ display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '20px', background: '#f4f6f9' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pacientes" element={<Pacientes />} />
                <Route path="/consultas" element={<Consultas />} />
                <Route path="/nutricionistas" element={<Nutricionistas />} />
                <Route path="/plano-alimentar" element={<PlanoAlimentar />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;