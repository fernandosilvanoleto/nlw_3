import React from 'react';

import './styles/global.css';

// IMPORTAR MINHAS ROTAS DO ARQUIVO router.tsx
// DEPOIS, COLOCAR COMO COMPONENTE
import Routes from './router';

function App() {
  return (
    // COLOCANDO COMO COMPONENTE
    <Routes />
  );
}

export default App;
