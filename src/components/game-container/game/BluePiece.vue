<template>

    <g id="black-link" :transform="transform" stroke="#000000" stroke-width="3">
        <g id="black">
            <ellipse class="slide-in" id="Oval" fill="#000000" cx="19.934334" cy="20.5428287" rx="35" ry="30"></ellipse>
            <ellipse id="Oval" fill="url(#blueGradient)" cx="19.934334" cy="16.185259" rx="35" ry="29"></ellipse>
            <ellipse v-if="turn === 'blue'" v-on:click="selectBlue()" id="Oval" fill="url(#blueGradient)" cx="19.934334" cy="16.185259" rx="35" ry="29"></ellipse>           
			<image v-if="crownedBlue && turn==='blue'" v-on:click="selectBlue()" class="expandOpen" x="-6" y="-10" width="53" height="53" xlink:href="../../../assets/gold-crown.svg" />
			<image v-else-if="crownedBlue" class="expandOpen" x="-6" y="-10" width="53" height="53" xlink:href="../../../assets/gold-crown.svg" />
		</g>
    </g>


</template>

<script>
export default {
    props: {
		transform: {type: String},
		turn: {type: String},
		crownedBlue: {type: Boolean}
    },
        data() {
        return {
            posX: 0,
            posY: 0,
            posXY: []
        }
    },
 
    methods: {
        selectBlue() {
            
            this.position = this.transform;
            this.posX = this.position.split('(').pop().split(',').shift() - 30;
            this.posY = this.position.split(',').pop().split(')').shift() - 30;
            this.posXY = [this.posX, this.posY];
            this.$emit('blueSelected', this.posXY);


        }
    }
    
}
</script>

<style scoped>

.expandOpen{
	animation-name: expandOpen;
	-webkit-animation-name: expandOpen;	

	animation-duration: 1.2s;	
	-webkit-animation-duration: 1.2s;

	animation-timing-function: ease-out;	
	-webkit-animation-timing-function: ease-out;	

	visibility: visible !important;	
}

</style>