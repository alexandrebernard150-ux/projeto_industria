import React from 'react';

function Header() {
  return (
    <header style={{ background: '#2c3e50', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
      <h2 style={{ margin: 0 }}>Nutri</h2>
      <div style={{ fontWeight: 'bold' }}>Painel Industrial</div>
    </header>
  );
}

export default Header;