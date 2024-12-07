import React, { useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';

const AddCustomerPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post('/customers', { name, email, phone })
      .then(() => alert('Cliente adicionado com sucesso!'))
      .catch(() => alert('Erro ao adicionar cliente.'));
  };

  return (
    <div className="bg-dark text-grayLight min-h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Adicionar Cliente</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-grayLight p-6 rounded shadow-md text-dark">
          <div>
            <label className="block mb-2 font-semibold">Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Telefone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <button type="submit" className="bg-blueAccent text-grayLight px-4 py-2 rounded hover:bg-blue-600">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerPage;
