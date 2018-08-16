<template>

    <div class="col-md-12">
        <div class=col-md-2></div>
        <div class="col-md-8" style="margin-left:5px" id="container">
            <div id="profile-info">
                <p>NAME</p>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>


</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    
    }
}
</script>


<style scoped>

    #container {
        background-image: url("../../../assets/background-board.svg");
        background-size: cover;
        opacity: 0.7;
        height: 1000px;
    }
    #profile-info {
        align-self: center;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        height: 600px;
        background-color: #FFF;
        border: dimgray solid 3px;

    }
    
</style>
