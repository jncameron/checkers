import SignUp from './components/SignUp.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import Profile from './components/game-container/players/Profile.vue';
import ChooseGame from './components/game-container/game/ChooseGame.vue';
import PlayersOnline from './components/game-container/game/PlayersOnline.vue';
import user from './data/UserModel';
import challenger from './data/ChallengerModel';



export const routes = [
    { path: '/game', component: GameContainer, props: {user: user, challenger: challenger}},
    { path: '/signup', component: SignUp},
    { path: '/profile', component: Profile },
    { path: '/choose-game', component: ChooseGame},
    { path: '/players-online', component: PlayersOnline}

]