import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
}

const VehiclesPage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/vehicles')
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar veículos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Veículos</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="space-y-4">
            {vehicles.map(vehicle => (
              <li
                key={vehicle.id}
                className="bg-grayLight text-dark p-4 rounded shadow-md"
              >
                <p className="font-semibold">{vehicle.brand} {vehicle.model}</p>
                <p>{vehicle.year} - R$ {vehicle.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;
