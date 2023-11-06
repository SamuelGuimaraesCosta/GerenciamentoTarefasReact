import React from 'react'; // Importa a biblioteca React
import './App.css'; // Importa estilos CSS a partir de um arquivo
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes e funcionalidades de roteamento do React Router
import MainPage from './pages/MainPage'; // Importa o componente da página principal

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporta o componente App como o componente principal da aplicação