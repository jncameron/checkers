const mongoose = require('mongoose');


// const player1Schema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: String,
//     email: String,
//     avatar: String,
//     pieces: Object
// });

// const player2Schema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: String,
//     email: String,
//     avatar: String,
//     pieces: Object
// });

const newGameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    moves: Array,
    player1: Object,
    player2: Object,
    turn: String,
    tiles: Object
}); 

module.exports = mongoose.model('NewGame', newGameSchema);