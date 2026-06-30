import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{ width: '240px', background: '#34495e', color: 'white', padding: '20px', minHeight: 'calc(100vh - 60px)' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
        <Link to="/pacientes" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Pacientes</Link>
        <Link to="/consultas" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Consultas</Link>
        <Link to="/nutricionistas" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Nutricionistas</Link>
        <Link to="/plano-alimentar" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Planos Alimentares</Link>
        <Link to="/usuarios" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Usuários</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;