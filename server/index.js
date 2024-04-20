import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoutes from './routes/addBook.js'

const app = express();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

const PORT = process.env.PORT || 5005

app.get('/',(req,res) => {
    res.send("This is a Book directory API")
})

app.use('/book', bookRoutes)

const Connection_URL = "mongodb+srv://2021ee29ir:Irshad@book-directory.ghbifhk.mongodb.net/?retryWrites=true&w=majority&appName=Book-Directory"

mongoose.connect(Connection_URL)
    .then(()=> app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}`)}))
    .catch((err)=> console.log(err.message))