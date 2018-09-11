import SignUp from './components/SignUp.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import Profile from './components/game-container/players/Profile.vue';
import ChooseGame from './components/game-container/game/ChooseGame.vue';
import Dashboard from './components/Dashboard.vue';


export const routes = [
    { path: '/game/:id', component: GameContainer, props: true},
    { path: '/signup', component: SignUp, props: true},
    { path: '/profile/:id', component: Profile},
    { path: '/choose-game', component: ChooseGame,  props: true },
    { path: '/', redirect: '/choose-game'},
    { path: '*', redirect: '/choose-game'},
    { path: '/dashboard', component: Dashboard}
    
 
]