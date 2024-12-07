import React from 'react';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-blueAccent">Bem-vindo à Loja de Carros</h1>
        <p className="text-grayLight mt-4 text-lg">Gerencie veículos, clientes e agendamentos com facilidade.</p>
      </div>
    </div>
  );
};

export default HomePage;
