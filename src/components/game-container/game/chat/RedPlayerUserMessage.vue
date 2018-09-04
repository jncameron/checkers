<template>
    <div class="row" style="margin-left:10px">
        <div class="col-md-8 speech-bubble">
            <p> {{ usrMsg }} </p>
        </div>
        <img :src="avatarLink" alt="" class="col-md-2" height="30px" width="30px">
    </div>

</template>

<script>

export default {
    props: {
        usrMsg: {type: String},
        user: {type: Object}
    },

    data() {
        return {
            avatarLink: this.user.avatar
        }
    },
}
</script>


<style scoped>

img {
    margin-top: 25px;
    padding-right: 0px;
    padding-left: 0px;

}

p {
    margin-top: 10px;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;

}

.speech-bubble {
	position: relative;
	background: #b71c1c;
    text-align: left;
	border-radius: 1em;
    height: auto;
    width: 70%;
    margin-top:20px;
    margin-left:20px;
}


</style>
