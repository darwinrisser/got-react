let mongoose = require('mongoose');

let characterSchema = new mongoose.Schema({
    name: String,
    img: String,
    id: Number
})

module.exports = mongoose.model('Character', characterSchema);