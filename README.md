# Checkers
## UNE COSC560 Project - John Cameron

## Demo:
http://checkers.ap-southeast-2.elasticbeanstalk.com 

## Install and Run:
Run install and start the server

`npm start`

## Development Commands
Build and watch for changes

`npm run-script watch`

Run the server

`cd server && node serve.js`


## Get Started
* for best results - please use Chrome and navigate to http://localhost:3000/#/signup
* Register (fake email is fine, there is no confirmation email)
* you should see your name and an avatar in the top right of the header
* click the avatar to update your details
* url should now be #/{your name}
* click 'change' under avatar to update from avatar carousel
* click 'edit details' to change name or email address (TODO: change password)
* navigate to 'play' on the header. It 'should' send you to #/choose-game
* 3 of the 4 options on #/choose-game are mostly operational: "Vs Computer", "Two Players on this computer" and "Find Player online"
* "Two Players on this computer" allows both red and blue pieces to be selected.
* "Find Player Online". To test this - best option is to open an incognito Chrome tab and register / login another user.
* Once registered, clicking "Find Player Online" should reveal the other player in a list of online players.
* Click play to challenge, and on the other browser window, click "accept to begin game"

## Admin Dashboard
* To check the dashboard Page, Sign In with email: admin@email.com    password: 1234

## Rules Implemented / being Implemented
* If a jump is available, the player must jump, even if this means the piece will be captured
* If more than one jump is available, player can choose any jump
* When jump is complete, if the piece now can jump again, it must. If not, the turn changes
* When a piece reaches the other end of the board, it is crowned, and the turn changes. From the next move the piece can the move forwards and backwards





