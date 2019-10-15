const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 24
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category