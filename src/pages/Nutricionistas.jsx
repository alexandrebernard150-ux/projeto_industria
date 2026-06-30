import React, { useState } from 'react';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';

function Nutricionistas() {
  const [nutricionistas] = useState([
    { id: 1, nome: 'Paula Souza', email: 'paula@nutri.com', crn: 'CRN-12345', especialidade: 'Nutrição Esportiva' }
  ]);

  const colunas = ['ID', 'Nome', 'Email', 'CRN', 'Especialidade'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Nutricionistas</h2>
        <Botao onClick={() => alert('Cadastrar nutricionista')}>Cadastrar Nutricionista</Botao>
      </div>
      <Tabela colunas={colunas} dados={nutricionistas} />
    </div>
  );
}

export default Nutricionistas;