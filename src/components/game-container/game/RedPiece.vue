<template>

    <g id="black-link" :transform="transform" stroke="#000000" stroke-width="3">
        <g id="black">
            <ellipse id="Oval" fill="#000000" cx="19.934334" cy="20.5428287" rx="35" ry="30"></ellipse>
            <ellipse id="Oval" fill="url(#redGradient)" cx="19.934334" cy="16.185259" rx="35" ry="29"></ellipse>
            <ellipse v-if="turn === 'red'" v-on:click="selectRed()" id="Oval" fill="url(#redGradient)" cx="19.934334" cy="16.185259" rx="35" ry="29"></ellipse>
           	<image v-if="crownedRed && turn==='red'" v-on:click="selectRed()" class="expandOpen" x="-6" y="-10" width="53" height="53"  xlink:href="gold-crown-red.svg" />
			<image v-else-if="crownedRed" class="expandOpen" x="-6" y="-10" width="53" height="53" :xlink:href="crownSrc" />
        
		</g>
    </g>


</template>

<script>
const baseUrl = process.env.BASE_URL;

export default {
    props: {
		transform: {type: String},
		turn: {type: String},
        crownedRed: {type: Boolean},
        user: {type: Object},
        player: {type: Object},

    },

    data() {
        return {
            posX: 0,
            posY: 0,
            posXY: [],
            crownSrc:`${baseUrl}gold-crown-red.svg`
        }
    },
 
    methods: {
        selectRed() {
            if(this.player.name === this.user.name || this.player.name === 'Local Larry') {
                this.position = this.transform;
                this.posX = this.position.split('(').pop().split(',').shift() - 30;
                this.posY = this.position.split(',').pop().split(')').shift() - 30;
                this.posXY = [this.posX, this.posY];
                this.$emit('redSelected', this.posXY);
            }
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