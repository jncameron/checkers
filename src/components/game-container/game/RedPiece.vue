<template>

    <g id="black-link" :transform="transformRed" stroke="#000000" stroke-width="3">
        <g id="black">
            <ellipse id="Oval" fill="#000000" cx="19.934334" cy="20.5428287" rx="35" ry="30"></ellipse>
            <ellipse v-on:click="selectRed()" id="Oval" fill="url(#redGradient)" cx="19.934334" cy="16.185259" rx="35" ry="29"></ellipse>
            <!-- <ellipse v-if="crowned" v-on:click="selectRed()" id="Oval" stroke="#FFAB00" stroke-width="9" fill="#B71C1C" cx="20" cy="16" rx="18" ry="18"></ellipse> -->
            <!-- <image v-if="crowned" v-on:click="selectRed()" class="expandOpen" x="-6" y="-10" width="53" height="53"  xlink:href="../../../assets/gold-crown-red.svg" /> -->
        </g>
    </g>


</template>

<script>


export default {
    props: {
        transformRed: {type: String},

    },

    data() {
        return {
            posX: 0,
            posY: 0,
            posXY: []
        }
    },
 
    methods: {
        selectRed() {
            
            this.position = this.transformRed;
            this.posX = this.position.split('(').pop().split(',').shift() - 30;
            this.posY = this.position.split(',').pop().split(')').shift() - 30;
            this.posXY = [this.posX, this.posY];
            this.$emit('redSelected', this.posXY);


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

@keyframes expandOpen {
	0% {
		transform: scale(1.4);		
	}
	50% {
		transform: scale(0.95);
	}	
	80% {
		transform: scale(1.15);
	}
	90% {
		transform: scale(0.98);
	}	
	100% {
		transform: scale(1);
	}			
}

@-webkit-keyframes expandOpen {
	0% {
		-webkit-transform: scale(1.4);		
	}
	50% {
		-webkit-transform: scale(0.95);
	}	
	80% {
		-webkit-transform: scale(1.15);
	}
	90% {
		-webkit-transform: scale(0.98);
	}	
	100% {
		-webkit-transform: scale(1);
	}					
}
</style>