import Book from '../models/detailBook.js'

export const postBook = async (req, res) => {
    const {name, author, type, pages, rating, postedOn} =req.body;

    try{
        
    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}