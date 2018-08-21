const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const NewGame = require('../models/newGame');



router.post('/moves', (req,res,next) => {

    let pieceName = req.body.move[0];
    let oldpos = req.body.move[1];
    let newpos = req.body.move[2];
    let newX = req.body.move[3];
    let newY = req.body.move[4];
    let tiles = req.body.move[5];
    let turn = req.body.move[6];
    let captured = "";
    if(req.body.move[7]) {
        captured = req.body.move[7];
    }
    
    console.log(JSON.stringify(NewGame))
    console.log(JSON.stringify(req.body))
    console.log("ID: " + req.body.gameId)
    NewGame.findByIdAndUpdate({_id: req.body.gameId})
        .exec()
        .then(game => {
            let player1Pieces = game.player1.pieces;
            let player2Pieces = game.player2.pieces;
            console.log("GAME FOUND: " + game)
            game.moves.push(oldpos+"-"+newpos)
            if(pieceName[0] === 'r') {
                game.set({'player1.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
                if(captured[0] === 'b') {
                    game.set({'player2.pieces': { [captured]: "CAPTURED"}})
                }
            } else {
                game.set({'player2.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
                if(captured[0] === 'r') {
                    game.set({'player1.pieces': { [captured]: "CAPTURED"}})
                }
            }

            game.set({'tiles': tiles});
            game.set({'turn': turn});
            game.save()
            .then(result => {
                res.status(200).send({
                    game: game
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })

    });
});

router.post('/board', (req,res,next) => {
    let gameToSend = {}
    NewGame.findById({_id: req.body.id})
        .exec()
        .then(function(game) { 
            game.save()
            .then(result => {
                res.status(200).send({
                    game: game
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
        });
});

router.get('/update', (req,res,next) => {
    res.status(200).send({
        message: "Handling GET requests to /newgame "
    });
});

router.post('/', (req,res,next) => {


    const newGame = new NewGame({
        _id: new mongoose.Types.ObjectId(),
        player1: req.body.player1,
        player2: req.body.player2,
        turn: req.body.turn,
        tiles: req.body.tiles
    });
    newGame.save().then(result => {
        console.log(result);
    });
    res.status(200).json({
        message: "New Game Created ",
        id: newGame.id
    });

});

module.exports = router;