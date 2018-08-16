import SignUp from './components/SignUp.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import Profile from './components/game-container/players/Profile.vue';
import user from './data/UserModel';
import challenger from './data/ChallengerModel';



export const routes = [
    { path: '/game', component: GameContainer, props: {user: user, challenger: challenger}},
    { path: '/signup', component: SignUp , props: {user: user}},
    { path: '/profile', component: Profile },

]