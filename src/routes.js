import SignUp from './components/SignUp.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import Profile from './components/game-container/players/Profile.vue';


export const routes = [
    { path: '/game', component: GameContainer },
    { path: '/signup', component: SignUp },
    { path: '/profile', component: Profile },

]