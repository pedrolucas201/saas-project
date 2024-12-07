import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';

interface Customer {
  id: number;
  name: string;
}

interface Vehicle {
  id: number;
  brand: string;
  model: string;
}

const AddAppointmentPage: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [date, setDate] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    api.get('/customers')
      .then(response => setCustomers(response.data))
      .catch(() => alert('Erro ao carregar clientes.'));
    api.get('/vehicles')
      .then(response => setVehicles(response.data))
      .catch(() => alert('Erro ao carregar veículos.'));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post('/appointments', { customer_id: parseInt(customerId), vehicle_id: parseInt(vehicleId), date })
      .then(() => alert('Agendamento adicionado com sucesso!'))
      .catch(() => alert('Erro ao adicionar agendamento.'));
  };

  return (
    <div className="bg-dark text-grayLight min-h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Adicionar Agendamento</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-grayLight p-6 rounded shadow-md text-dark">
          <div>
            <label className="block mb-2 font-semibold">Cliente:</label>
            <select
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            >
              <option value="">Selecione um cliente</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Veículo:</label>
            <select
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            >
              <option value="">Selecione um veículo</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.brand} {vehicle.model}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Data:</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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

export default AddAppointmentPage;
