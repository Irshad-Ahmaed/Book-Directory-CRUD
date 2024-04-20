import express from 'express'
import { deleteBook, getAllBooks, postBook } from '../controllers/importBook.js';

const router = express.Router();

router.post('/postBook', postBook)
router.get('/getBook', getAllBooks)
router.delete('/delete/:id', deleteBook)

export default router