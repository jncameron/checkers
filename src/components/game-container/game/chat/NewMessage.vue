<template>
    <div class="composeMessage">
        <div class="messageBox">
            <div class="text" style="margin-top:0px;"> 
                <textarea v-on:keyup.13="clickSend()" id="msg" rows="3" cols="100" />
            </div>
            <div v-on:click="clickSend()" class="send">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#34537c">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                <p>SEND</p>
            </div>

        </div>
						
    </div>

</template>

<script>
export default {
    props:{
        user: {type: Object}
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
    height: 80px;
    padding-bottom:15px;
}
.messageBox {
    border-radius: 1em;
    background-color: rgba(211,211,211,0.5);
    height: 70px;
    margin-right: 10px;
    margin-left: 10px;
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
    margin-top: 5px;
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
