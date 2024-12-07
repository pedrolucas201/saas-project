import { Router } from 'express';
import pool from '../db/connection';

const router = Router();

// Listar todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT 
                a.id AS appointment_id,
                c.name AS customer_name,
                v.brand AS vehicle_brand,
                v.model AS vehicle_model,
                a.date
             FROM 
                appointments a
             JOIN 
                customers c ON a.customer_id = c.id
             JOIN 
                vehicles v ON a.vehicle_id = v.id`
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
});

// Adicionar um agendamento
router.post('/', async (req, res) => {
    const { customer_id, vehicle_id, date } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO appointments (customer_id, vehicle_id, date) VALUES ($1, $2, $3) RETURNING *',
            [customer_id, vehicle_id, date]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar agendamento' });
    }
});

export default router;
