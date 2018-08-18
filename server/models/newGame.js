const mongoose = require('mongoose');

const newGameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    moves: Array,
    player1: Object,
    player2: Object,
}); 

module.exports = mongoose.model('NewGame', newGameSchema);