import React, { useState } from 'react';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';

function PlanoAlimentar() {
  const [planos] = useState([
    { id: 1, descricao: 'Dieta hiperproteica', observacoes: 'Beber 3L de água por dia', consulta_id: 1 }
  ]);

  const colunas = ['ID', 'Descrição', 'Observações', 'ID Consulta'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Planos Alimentares</h2>
        <Botao onClick={() => alert('Criar novo plano')}>Criar Plano Alimentar</Botao>
      </div>
      <Tabela colunas={colunas} dados={planos} />
    </div>
  );
}

export default PlanoAlimentar;