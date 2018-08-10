<template>
  <svg :x='x' :y='y'>
    <defs>
      
    </defs>
    <g class="column">
        <rect  x=0 y=0 width="100" height="100" fill="dimgray" />
        
    </g>
  </svg>
</template>

<script>



export default {
  props: {x:{type: Number}, y:{type: Number}},
  data() {
    return {

    }
  },
  methods: {

  }


}
</script>
    

