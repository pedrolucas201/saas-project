import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import vehiclesRoutes from './routes/vehicles';
import customersRoutes from './routes/customers';
import appointmentsRoutes from './routes/appointments';


// Configurar variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas principais
app.get('/', (req, res) => {
    res.send('API da loja de carros está rodando!');
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Rotas dos veículos
app.use('/api/vehicles', vehiclesRoutes);

// Rotas dos clientes
app.use('/api/customers', customersRoutes);

// Rotas dos agendamentos
app.use('/api/appointments', appointmentsRoutes);

