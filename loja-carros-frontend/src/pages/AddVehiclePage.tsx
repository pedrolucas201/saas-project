import React, { useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';

const AddVehiclePage: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post('/vehicles', { brand, model, price: parseFloat(price), year: parseInt(year) })
      .then(() => alert('Veículo adicionado com sucesso!'))
      .catch(() => alert('Erro ao adicionar veículo.'));
  };

  return (
    <div className="bg-dark text-grayLight min-h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Adicionar Veículo</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-grayLight p-6 rounded shadow-md text-dark">
          <div>
            <label className="block mb-2 font-semibold">Marca:</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Modelo:</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Preço:</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Ano:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
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

export default AddVehiclePage;
