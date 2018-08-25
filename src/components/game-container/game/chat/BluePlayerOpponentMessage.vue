<template>
    <div class="row" style="margin-left:10px">
        <img :src="avatarLink" class="col-md-2" alt="" height="30px" width="30px">   
        <div class="col-md-8 speech-bubble">
            <p> {{ usrMsg }} </p>
        </div>
                 

    </div>

</template>

<script>
const baseUrl = process.env.BASE_URL;
export default {
    props: {
        usrMsg: {type: String},
        opponent: {type: Object},
    },
    data() {
        return {
            avatarLink:`${baseUrl}${this.opponent.avatar}`
        }
    },
}
</script>



<style scoped>

img {
    margin-top: 25px;
    padding-right: 0px;

}

p {
    margin-top: 10px;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
}

.speech-bubble {
	position: relative;
	background: #4072a0;
	border-radius: 1em;
    text-align: left;
    height: auto;
    width: 70%;
    margin-top:20px;
    margin-left: 10px;
}


</style>

