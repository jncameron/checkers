const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const NewGame = require('../models/newGame');
const ObjectId = require('mongodb')



router.post('/moves', (req,res,next) => {

    let oldpos = req.body.move[0];
    let newpos = req.body.move[1];
    console.log(JSON.stringify(req.body))
    console.log("ID: " + req.body.gameId)
    NewGame.findById({_id: req.body.gameId})
        .exec()
        .then(game => {
            console.log("GAME FOUND: " + game)
            game.moves.push(oldpos+"-"+newpos)
            game.save()
            .then(res => {
                res.status(200).send({
                    message: "move saved"
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    })
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