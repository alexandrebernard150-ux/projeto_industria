import React from 'react';

function Tabela({ colunas, dados }) {
  if (!dados || dados.length === 0) {
    return <p style={{ padding: '20px' }}>Nenhum registro encontrado.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <thead>
        <tr style={{ background: '#2c3e50', color: 'white', textAlign: 'left' }}>
          {colunas.map((col, index) => (
            <th key={index} style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((item, rowIndex) => (
          <tr key={item.id || rowIndex} style={{ borderBottom: '1px solid #eee' }}>
            {Object.keys(item).map((key, colIndex) => {
              if (key === 'senha') return null;
              return (
                <td key={colIndex} style={{ padding: '12px', color: '#333' }}>
                  {String(item[key])}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;