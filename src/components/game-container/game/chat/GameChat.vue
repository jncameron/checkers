<template>
    <div id="container">
        <div style="height:7%;background-color:#7f0000;color:#FFF;display:flex">

        </div>
            <div id="all-messages">
            <div v-for="(usrMsg, index) in usrMsgs"
                    :key="index">
                <div v-if="usrMsg[1] === 'info'">
                    <info-message :usrMsg="usrMsg[0]" ></info-message>
                </div>
                <div v-if="usrMsg[1] !== user.name && usrMsg[1] !== 'info'">
                    <red-player-opponent-message v-if="opponent.color === 'red'" :usrMsg="usrMsg[0]" :opponent="opponent"></red-player-opponent-message>
                    <blue-player-opponent-message v-if="opponent.color === 'blue'" :usrMsg="usrMsg[0]" :opponent="opponent"></blue-player-opponent-message>                
                </div>
                
                <div v-if="usrMsg[1] === user.name">
                    <blue-player-user-message v-if="opponent.color === 'red'" :usrMsg="usrMsg[0]" :user="user"></blue-player-user-message>  
                    <red-player-user-message v-if="opponent.color === 'blue'" :usrMsg="usrMsg[0]" :user="user"></red-player-user-message>  
                </div>
            </div>
        </div>

        <div>
            <div id="new-message-box">
            <new-message id="new-message" :user="user"></new-message>
            </div>
        </div>
        
        <div id="base" style="height:7%;background:#34537c;padding-top:7px">
            <h3 style="margin:0 0 0 0;color:#FFF"> CHAT</h3>
        </div>
    </div>

</template>

<script>

//TODO: Fix - GameChat component does not scroll all the way to the bottom on new message

import BluePlayerUserMessage from './BluePlayerUserMessage.vue';
import RedPlayerUserMessage from './RedPlayerUserMessage.vue';
import BluePlayerOpponentMessage from './BluePlayerOpponentMessage.vue';
import RedPlayerOpponentMessage from './RedPlayerOpponentMessage.vue';
import NewMessage from './NewMessage.vue';
import InfoMessage from './InfoMessage.vue';

export default {
    props: {
        player1: {type: Object},
        player2: {type: Object},
        user: {type: Object},
        opponent: {type: Object},
        showTileNumbers: {type: Boolean}
    },
    data(){
        return {
            usrMsg: [],
            usrMsgs: [],
            baseUrl: process.env.BASE_URL,
            
        }
    },
    components: {
        'blue-player-user-message': BluePlayerUserMessage,
        'red-player-user-message': RedPlayerUserMessage,
        'blue-player-opponent-message': BluePlayerOpponentMessage,
        'red-player-opponent-message': RedPlayerOpponentMessage,
        'new-message': NewMessage,
        'info-message': InfoMessage
    }, methods: {
        listenForMessages() {
            let usrMsgs = this.usrMsgs;
            let usrMsg = this.usrMsg;
            let url = window.location.href;
            let room = url.split('game/').pop();
            let $http = this.$http;

            socket.on('chat', (data) => {

                usrMsg = data.msg.slice(0, -1)
                let usr = data.usr
                let moves = "";
                if (usrMsg === "/printmoves"){
                    let id = url.split('game/').pop();
                    $http.post(`newgame/requestmoves`, {id: id})
                    .then(response => {
                        moves = moves + response.body.moves;
                        usrMsgs.push([moves,'info']);
                    }, error => {
                        console.log(error);
                    });
                    
                }
                if (usrMsg === "/toggletiles"){
                    this.$emit('requestTileNumbers', !this.showTileNumbers )
                }

                if (usrMsg[0] !== "/") {
                    usrMsgs.push([usrMsg,usr])
                    console.log("IN ROOM " + room + " DATA: " + usrMsg + usr);
                }

            });
            
        },

    },
    mounted: function() {
        this.listenForMessages();
    },
    updated() {
        { var el = document.getElementById('all-messages'); 
            el.scrollTop = el.scrollHeight; }
    }
}
</script>


<style scoped>
#container {
  padding: 0 0;

}
#all-messages {
    height:310px;
    overflow-x:hidden;
    overflow-y:auto;
}
#new-message-box {
    height:104px;
    background-color:#4072a0;
}
#new-message {
    height:90px;
}
h1 {
    margin-top: 0px;
    margin-bottom: 0px;
}

@media only screen and (min-height: 300px) and (min-width: 650px){
    #all-messages {
        height:140px;
    }
}

@media (min-height: 540px) and (min-width: 700px) {
    #all-messages {
        height:266px;
    }
    #base {
        padding-top:0px;
        padding-bottom:5px;
    }
}

@media only screen and (min-height: 840px) {
    #all-messages {
        height:382px;
    }
}

</style>

