# Checkers
## UNE COSC560 Project

## Install and Run:
Run install and start the server

`npm start`

## Development Commands
Build and watch for changes

`npm run-script watch`

Run the server

`cd server && node serve.js`

## TODOS - SERVER
* move newGame logic to /controllers/newGame.js


## TODOS - CLIENT
* Make Profile, Signup, and ChooseGame UI compatible with Edge and Firefox (fine on Chrome)

Signup: 
* Use local storage to keep users logged in on refresh (if token not expired)
* Redirect to signup if player logged out(and no token / token expired)

Profile: 
* Update user password
* User can see total win/loss record
* User can see best win/loss and worst win/loss opponent records

GameChat: 
* Does not scroll all the way to the bottom on new message

GameBoard: 
* If ANY piece can jump, player must jump that piece
* 'multijumps' - if jump completed, new tile is selected, if valid jumps found, player can continue move (do not change turn)

GameScoreBoard: 
* game messages such as 'JOHN has Captured your Piece' etc.
