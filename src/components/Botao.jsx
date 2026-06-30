import React from 'react';

function Botao({ children, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px 15px', background: '#27ae60', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
    >
      {children}
    </button>
  );
}

export default Botao;