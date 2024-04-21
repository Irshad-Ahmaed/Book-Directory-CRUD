import express from 'express'
import { deleteBook, getAllBooks, postBook, updateBook } from '../controllers/importBook.js';

const router = express.Router();

router.post('/postBook', postBook)
router.get('/getBook', getAllBooks)
router.delete('/delete/:id', deleteBook)
router.put('/update/:id', updateBook);

export default router