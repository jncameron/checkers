const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    title: String,
    content: String
}); 

module.exports = mongoose.model('Message', messageSchema);