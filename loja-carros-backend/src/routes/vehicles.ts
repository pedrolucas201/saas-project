import { Router } from 'express';
import pool from '../db/connection';

const router = Router();

// Listar veículos
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM vehicles');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar veículos' });
    }
});

// Adicionar veículo
router.post('/', async (req, res) => {
    const { brand, model, price, year } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO vehicles (brand, model, price, year) VALUES ($1, $2, $3, $4) RETURNING *',
            [brand, model, price, year]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar veículo' });
    }
});

export default router;
