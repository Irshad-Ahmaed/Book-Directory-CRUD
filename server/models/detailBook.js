import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name:{type: String, required: true},
    author:{type: String, required: true},
    type:{type: String, required: true},
    pages:{type: Number, required: true},
    rating:{type: Number, required: true},
    postedOn: {type: Date, default: Date.now}
})

export default mongoose.model("Book", bookSchema)