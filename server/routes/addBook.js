import express from 'express'
import { postBook } from '../controllers/importBook';

const router = express.Router();

router.post('/postBook', postBook)

export default router