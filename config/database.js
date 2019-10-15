//db configuration
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/node-app', { useNewUrlParser: true })
    .then(() => {
        console.log('connection to the db established')
    })
    .catch((err) => {
        console.log('error in connecting to the db', err)
    })

module.exports = mongoose