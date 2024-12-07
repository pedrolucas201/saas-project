import { Router } from 'express';
import pool from '../db/connection';

const router = Router();

// Listar todos os clientes
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM customers');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar clientes' });
    }
});

// Adicionar um cliente
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

export default router;
