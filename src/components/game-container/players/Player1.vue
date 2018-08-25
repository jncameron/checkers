<template>
    <div>
        <img v-if="loaded" :src="avatarLink"  alt="" height="70px" width="70px" >
    </div>
    
</template>

<script>

const baseUrl = process.env.BASE_URL;
export default {

    

    props: {
      player1: {type: Object}  
    },
    
    data() {
        return {
            loaded: false,
            
            avatarLink: ``
        }
    },
    mounted: function() {
            let setLoaded = this.setLoaded;
            setTimeout(function(){
                setLoaded();
            },1000)

    },
    methods: {
        setLoaded() {
            
            this.loaded = true;
            this.avatarLink = `${baseUrl}${this.player1.avatar}`
        }
    }

    
}
</script>

<style scoped>

img {
    border: 1px solid black;
    border-radius: 50%;
}

</style>



