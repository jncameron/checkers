<template>
    <div id="container">
        <div style="height:40px;background-color:#7f0000;color:#FFF">

        </div>
        <div id="all-messages" style="height:440px;overflow:hidden;">
            <div v-for="usrMsg in usrMsgs">
                <player-two-message v-if="usrMsg[1] !== user.name" :usrMsg="usrMsg[0]"></player-two-message>
                <player-one-message v-if="usrMsg[1] === user.name " :usrMsg="usrMsg[0]"></player-one-message>  
            </div>
   
        </div>

        <div>
            <div style="height:10px;background-color:#4072a0"></div>
            <new-message :user="user"></new-message>
        </div>
        
        <div id="base" style="height:40px;background:#34537c;padding-top:7px">
            <h3 style="margin:0 0 0 0;color:#FFF"> CHAT</h3>
        </div>
    </div>

</template>

<script>
import Player1Message from './Player1Message.vue';
import Player2Message from './Player2Message.vue';
import NewMessage from './NewMessage.vue';

export default {
    props: {
        player1: {type: Object},
        player2: {type: Object},
        user: {type: Object}
    },
    data(){
        return {
            usrMsg: [],
            usrMsgs: [],
        }
    },
    components: {
        'player-two-message': Player2Message,
        'player-one-message': Player1Message,
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
            socket.on('chat', function(data) {
                usrMsg = data.msg
                let usr = data.usr
                usrMsgs.push([usrMsg,usr])
                scrollToEnd();
                console.log("DATA: " + usrMsg + usr);
            });
            
        },

    },
    mounted: function() {
        this.listenForMessages();
    },
}
</script>


<style scoped>
#container {
  padding: 0 0;

}
h1 {
    margin-top: 0px;
    margin-bottom: 0px;

}
</style>

