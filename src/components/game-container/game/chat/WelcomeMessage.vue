<template>
    <div class="row" style="margin-left:10px">
        <div class="col-md-8 speech-bubble">
            <h4>Checkers Chat</h4>
            <p>type <strong>/rules</strong> to see game rules</p>
            <p>type <strong>/moves</strong> to see moves made in this game</p>
            <p>type <strong>/toggletiles</strong> to display or hide tile numbers</p>
        </div>
    </div>

</template>

<script>

export default {
    props: {
    },

}
</script>


<style scoped>

img {
    margin-top: 25px;
    padding-right: 0px;
    padding-left: 0px;

}
h4 {
    margin-top: 10px;
    margin-bottom: 2px;
    color: #d3d3d3;
}

p {
    
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    margin-bottom: 5px;

}

.speech-bubble {
	position: relative;
	background: dimgray;
    text-align: left;
	border-radius: 1em;
    height: auto;
    width: 90%;
    margin-top:20px;
    padding-left: 10px;
    padding-right: 10px;

}


</style>
