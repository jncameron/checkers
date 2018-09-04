<template>
    <div id="container">
        <div style="height:7%;background-color:#7f0000;color:#FFF;display:flex">

        </div>
            <div id="all-messages">
            <div v-for="(usrMsg, index) in usrMsgs"
                    :key="index">
                <div v-if="usrMsg[1] !== user.name">
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

export default {
    props: {
        player1: {type: Object},
        player2: {type: Object},
        user: {type: Object},
        opponent: {type: Object},
    },
    data(){
        return {
            usrMsg: [],
            usrMsgs: [],
            
        }
    },
    components: {
        'blue-player-user-message': BluePlayerUserMessage,
        'red-player-user-message': RedPlayerUserMessage,
        'blue-player-opponent-message': BluePlayerOpponentMessage,
        'red-player-opponent-message': RedPlayerOpponentMessage,
        'new-message': NewMessage
    }, methods: {
        scrollToEnd() {
            let allMessages = this.$el.querySelector("#all-messages");
            allMessages.scrollTop = allMessages.scrollHeight;
        },
        listenForMessages() {
            let usrMsgs = this.usrMsgs;
            let usrMsg = this.usrMsg;
            let scrollToEnd = this.scrollToEnd;
            let url = window.location.href;
			let room = url.split('game/').pop();

            socket.on('chat', function(data) {

                usrMsg = data.msg
                let usr = data.usr
                if (usrMsg) {
                    usrMsgs.push([usrMsg,usr])
                    scrollToEnd();
                    console.log("IN ROOM " + room + " DATA: " + usrMsg + usr);
                }

            });
            
        },

    },
    mounted: function() {
        this.listenForMessages();
    },
    watch:{
        usrMsgs: {
            handler: function() {
                this.scrollToEnd()
            },
            deep: true
        }
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
@media only screen and (min-height: 800px) {
    #all-messages {
        height:421px;
    }
}

</style>

