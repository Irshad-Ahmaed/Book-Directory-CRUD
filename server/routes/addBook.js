import express from 'express'
import { getAllBooks, postBook } from '../controllers/importBook.js';

const router = express.Router();

router.post('/postBook', postBook)
router.get('/getBook', getAllBooks)

export default router