import Book from '../models/detailBook.js'

export const postBook = async (req, res) => {
    const {name, author, bookType, noOfPages, rating} = req.body;

    try{
        const newBook = await Book.create({name, author, bookType, noOfPages, rating})
        res.status(200).json({result: newBook})
    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}