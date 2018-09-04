<template>
    <div class="composeMessage">
        <div class="messageBox">
            <div class="text" style="margin-top:0px;"> 
                <textarea v-on:keyup.13="clickSend()" id="msg" rows="3" cols="100" />
            </div>
            <div v-on:click="clickSend()" class="send" style="margin-top: 0">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#34537c">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                <p style="margin: 0 0">SEND</p>
            </div>

        </div>
						
    </div>

</template>

<script>
export default {
    props:{
        user: {type: Object}
    },
    mounted: function() {
            let open = "";
            socket.emit('chat', {
                usr: this.user.name,
                open: "open chat."
            });
            document.getElementById('msg').value = "";
    },
    methods: {
        clickSend() {
            let msg = document.getElementById('msg').value.replace("/n","");
            console.log(msg)

            socket.emit('chat', {
                usr: this.user.name,
                msg: msg
            });
            document.getElementById('msg').value = "";
        }
    }
}
</script>


<style scoped>
.composeMessage {
    background-color: #4072a0;
    display: flex;
    align-content: center;
}
.messageBox {
    border-radius: 1em;
    background-color: rgba(211,211,211,0.5);
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 100%;


}

textarea {
    resize: none;
    position: absolute;
    left: 0;
    margin-left: 20px;
    padding-left: 20px;
    margin-top: 5px;
    overflow: hidden;
    width: 70%;
    background-color: transparent;
    border: none;
}
textarea:focus{
    outline: none;
}


svg {
    margin-top: 0px;
    margin-bottom: 0px;
}

.send {

    margin-left: 75%;
}

p {
    font-family: Arial;
    font-size: 14px;
}

</style>
