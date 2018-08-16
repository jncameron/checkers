<template>
    <div>
        <img src="../../../assets/avatars/user-5.svg" alt="" height="70px" width="70px">


    </div>
    
</template>

<script>


export default {

    props: {
      user: {type: Object}  
    },
    
    data() {
        return {
            avatar: "/user-5.svg",
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



