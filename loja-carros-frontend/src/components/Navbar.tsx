import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark border-b border-blueAccent p-4">
      <ul className="flex justify-around text-grayLight">
        <li>
          <Link to="/" className="hover:text-blueAccent">Home</Link>
        </li>
        <li>
          <Link to="/vehicles" className="hover:text-blueAccent">Veículos</Link>
        </li>
        <li>
          <Link to="/customers" className="hover:text-blueAccent">Clientes</Link>
        </li>
        <li>
          <Link to="/appointments" className="hover:text-blueAccent">Agendamentos</Link>
        </li>
        <li>
          <Link to="/add-vehicle" className="hover:text-blueAccent">Adicionar Veículo</Link>
        </li>
        <li>
          <Link to="/add-customer" className="hover:text-blueAccent">Adicionar Cliente</Link>
        </li>
        <li>
          <Link to="/add-appointment" className="hover:text-blueAccent">Adicionar Agendamento</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
