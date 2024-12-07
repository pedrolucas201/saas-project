import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

interface Appointment {
  appointment_id: number;
  customer_name: string;
  vehicle_brand: string;
  vehicle_model: string;
  date: string;
}

const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/appointments')
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar agendamentos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-dark text-grayLight min-h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blueAccent mb-4">Agendamentos</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="space-y-4">
            {appointments.map(appointment => (
              <li
                key={appointment.appointment_id}
                className="bg-grayLight text-dark p-4 rounded shadow-md"
              >
                <p>
                  <span className="font-semibold">{appointment.customer_name}</span> 
                  agendou o veículo <span className="font-semibold">{appointment.vehicle_brand} {appointment.vehicle_model}</span>
                </p>
                <p>Data: {new Date(appointment.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
