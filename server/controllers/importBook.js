import Book from '../models/detailBook.js'
import mongoose from 'mongoose';

export const postBook = async (req, res) => {
    const {name, author, bookType, noOfPages, rating} = req.body;
    console.log(name)

    try{
        const newBook = await Book.create({name, author, bookType, noOfPages, rating})
        res.status(200).json({result: newBook})
    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const bookList = await Book.find();
        res.status(200).json(bookList);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteBook = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Book unavailable...')
    }

    try {
        await Book.findByIdAndDelete(_id);
        res.status(200).json({message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}