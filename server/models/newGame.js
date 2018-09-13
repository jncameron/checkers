const mongoose = require('mongoose');



const newGameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    moves: Array,
    player1: Object,
    player2: Object,
    turn: String,
    tiles: Object,
    winner: String,
}, {timestamps: {createdAt: 'createdAt'}}); 

module.exports = mongoose.model('NewGame', newGameSchema);