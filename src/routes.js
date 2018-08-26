import SignUp from './components/SignUp.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import Profile from './components/game-container/players/Profile.vue';
import ChooseGame from './components/game-container/game/ChooseGame.vue';
import onlineUsers from './data/OnlineUsers';   
import user from './data/UserModel';
import player1 from './data/Player1Model';
import player2 from './data/Player2Model';
import newGame from './data/NewGameModel';
import redPieces from './data/RedPlayerModel';
import bluePieces from './data/BluePlayerModel';





export const routes = [
    { path: '/game/:id', component: GameContainer, props: {user: user, player1: player1, player2: player2 }},
    { path: '/signup', component: SignUp, props: { onlineUsers: onlineUsers}},
    { path: '/profile', component: Profile, props:{user: user}},
    { path: '/choose-game', component: ChooseGame,  props: {
            user: user, 
            onlineUsers: onlineUsers, 
            newGame: newGame,
            player1: player1,
            player2: player2,
            redPieces: redPieces,
            bluePieces: bluePieces},
            
    },
    { path: '*', redirect: '/choose-game'}
    

]