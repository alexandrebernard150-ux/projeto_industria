import React, { useState } from 'react';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';

function Consultas() {
  const [consultas] = useState([
    { id: 1, data: '2026-06-30 14:00', status: 'Agendada', observacoes: 'Retorno trimestral', paciente_id: 1, nutricionista_id: 1 }
  ]);

  const colunas = ['ID', 'Data/Hora', 'Status', 'Observações', 'ID Paciente', 'ID Nutricionista'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Consultas</h2>
        <Botao onClick={() => alert('Agendar nova consulta')}>Agendar Consulta</Botao>
      </div>
      <Tabela colunas={colunas} dados={consultas} />
    </div>
  );
}

export default Consultas;