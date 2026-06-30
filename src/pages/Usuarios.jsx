import React, { useState } from 'react';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';

function Usuarios() {
  const [usuarios] = useState([
    { id: 1, nome: 'Administrador', email: 'admin@nutri.com', perfil: 'Admin' }
  ]);

  const colunas = ['ID', 'Nome', 'Email', 'Perfil'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Usuários do Sistema</h2>
        <Botao onClick={() => alert('Criar novo usuário')}>Novo Usuário</Botao>
      </div>
      <Tabela colunas={colunas} dados={usuarios} />
    </div>
  );
}

export default Usuarios;