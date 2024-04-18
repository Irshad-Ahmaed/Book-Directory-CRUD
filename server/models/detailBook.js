import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name:{type: String, required: true},
    author:{type: String, required: true},
    bookType:{type: String, required: true},
    noOfPages:{type: Number, required: true},
    rating:{type: Number, required: true},
    postedOn: {type: Date, default: Date.now}
})

export default mongoose.model("Book", bookSchema)