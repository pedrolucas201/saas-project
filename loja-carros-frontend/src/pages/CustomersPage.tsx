import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/customers')
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-dark text-grayLight min-h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Clientes</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="space-y-4">
            {customers.map(customer => (
              <li
                key={customer.id}
                className="bg-grayLight text-dark p-4 rounded shadow-md"
              >
                <p className="font-semibold">{customer.name}</p>
                <p>Email: {customer.email}</p>
                <p>Telefone: {customer.phone}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomersPage;
