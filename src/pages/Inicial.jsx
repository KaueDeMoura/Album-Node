import React from 'react';
import '../styles/Inicial.css';
import Album from '../pages/Album'; // Importe a página que deseja renderizar


export default function Inicial() {
  return (
    <div>

      <div class="header-inicio">
        <h1 style={{color: 'blue'}}>Exemplo MC IG
        </h1>
        <div class="descricao">
          <p> Album do MC IG.</p>
        </div>
        <div class="botoes">
          <button class="azul">Selecionar</button>
          <button class="cinza">Voltar</button>
        </div>
      </div>
      <Album /> {/* Renderize o componente Album dentro do componente Inicial */}
    </div>
  );
}
