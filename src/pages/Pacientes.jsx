import React, { useState } from 'react';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';

function Pacientes() {
  const [pacientes] = useState([
    { id: 1, nome: 'Alexandre', idade: 18, peso: 72.50, altura: 1.75, objetivo: 'Ganhar massa muscular', telefone: '11999999999', nutricionista_id: 1 }
  ]);

  const colunas = ['ID', 'Nome', 'Idade', 'Peso (kg)', 'Altura (m)', 'Objetivo', 'Telefone', 'ID Nutricionista'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Pacientes</h2>
        <Botao onClick={() => alert('Abrir cadastro de paciente')}>Cadastrar Paciente</Botao>
      </div>
      <Tabela colunas={colunas} dados={pacientes} />
    </div>
  );
}

export default Pacientes;