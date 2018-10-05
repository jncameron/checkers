const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const NewGame = require('../models/newGame');
const User = require('../models/user');

//TODO: move newGame logic to /controllers/newGame.js
router.post('/moves', (req,res,next) => {

  let pieceName = req.body.postGame.pieceName;
  let oldpos = req.body.postGame.oldpos;
  let newpos = req.body.postGame.newpos;
  let newX = req.body.postGame.newX;
  let newY = req.body.postGame.newY;
  let tiles = req.body.postGame.tiles;
  let turn = req.body.postGame.turn;
  let captured = "";
  if(req.body.postGame.captured) {
      captured = req.body.postGame.captured;
  }
  NewGame.findByIdAndUpdate({_id: req.body.gameId})
    .exec()
    .then(game => {
      console.log("GAME FOUND: ")
      if(game.player1.color === 'red') {
        if(pieceName[0] === 'r') {
          game.set({'player1.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
          if (captured[0] === 'b') {
            game.set({'player2.pieces': { [captured]: "CAPTURED"}})
            game.moves.push("Red: "+ oldpos+"X"+newpos + " Captured Blue");
          }  else if (captured.length === 0)  {
            game.moves.push("Red: "+ oldpos+"-"+newpos);
          }

        }
        if(pieceName[0] === 'b') {
            game.set({'player2.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
            if (captured[0] === 'r') {
                game.set({'player1.pieces': { [captured]: "CAPTURED"}})
                game.moves.push("Blue: "+ oldpos+"X"+newpos + " Captured Red");
            } else if (captured.length === 0) {
                game.moves.push("Blue: "+ oldpos+"-"+newpos);
            }
        }

      }
              
      else if(game.player1.color === 'blue') {
        if(pieceName[0] === 'r') {
          game.set({'player2.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
          if (captured[0] === 'b') {
            game.set({'player1.pieces': { [captured]: "CAPTURED"}})
            game.moves.push("Red: "+ oldpos+"X"+newpos + " Captured Blue");
          } else if (captured.length === 0)  {
            game.moves.push("Red: "+ oldpos+"-"+newpos);
          }
        }
        
        if(pieceName[0] === 'b') {
            game.set({'player1.pieces': { [pieceName]: { "pos":newpos,"x":newX,"y":newY}}})
            if (captured[0] === 'r') {
              game.set({'player2.pieces': { [captured]: "CAPTURED"}})
              game.moves.push("Blue: "+ oldpos+"X"+newpos + " Captured Red");
            } else if (captured.length === 0) {
              game.moves.push("Blue: "+ oldpos+"-"+newpos);
            }
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
        res.status(500).json({
            error: err
        })
      })
  });
});

router.post('/board', (req,res,next) => {
    NewGame.findById({_id: req.body._id})
    .then(game => { 
      console.log("fetching board " + game._id)
      game.save()
      .then(result => {
        res.status(200).send({
          game: game
        });
      }).catch(err => {
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

router.post('/winner', (req,res,next) => {
  NewGame.findByIdAndUpdate({_id: req.body.gameId})
  .exec()
  .then(game => {
    console.log("COMPLETED GAME FOUND: ")
    game.set({'winner': req.body.winnerId});
    game.save()
  });
  User.findByIdAndUpdate({_id: req.body.winnerId})
  .exec()
  .then(winner => {
    winner.gamesCompleted.push(req.body)
    winner.save()
  });
  User.findByIdAndUpdate({_id: req.body.loserId})
  .exec()
  .then(loser => {
    loser.gamesCompleted.push(req.body)
    loser.save()
  }).then( result => {
    res.status(200).send({
      message: "completed game ref save"
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.post('/', (req,res,next) => {
  const newGame = new NewGame({
    _id: new mongoose.Types.ObjectId(),
    player1: req.body.player1,
    player2: req.body.player2,
    turn: req.body.turn,
    tiles: req.body.tiles,
    winner: ""
  });
  newGame.save().then(result => {
    console.log("stuff");
  });
  res.status(200).json({
    message: "New Game Created ",
    _id: newGame._id
  });
});

router.post('/requestmoves', (req,res,next) => {
  NewGame.findById({_id: req.body.id})
    .then(game => { 
      game.save()
      .then(result => {
        res.status(200).send({
          moves: game.moves
        });
      }).catch(err => {
        res.status(500).json({
            error: err
        })
      })
    });
})

router.get('/gamestats', (req,res) => {
  const date = Date.now();
  console.log("date " + date)
  let oneHour = 3600000;
  let oneDay = oneHour * 24;
  let oneWeek = oneDay * 7;
  console.log(date - oneHour);

  NewGame.find({createdAt: { $lte: date }}, (err, games) => {
    let gameCreated = [];
    games.forEach(el => {
      gameCreated.push(el['createdAt'])
    })
    console.trace(games[0]['createdAt'])
    if(err) {
      res.status(500).json({
        error: err
      });
    }
    res.status(200).send({
      games: gameCreated
    })
  })
})

module.exports = router; 