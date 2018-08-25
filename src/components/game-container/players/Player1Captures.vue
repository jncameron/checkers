<template>
    <g id="black-link"  stroke="#000000" stroke-width="3" :transform="transform">
        <g id="black">
            <ellipse id="Oval" fill="#B71C1C" cx="20" cy="26" rx="12" ry="12"></ellipse>
        </g>
    </g>
    
</template>

<script>
export default {
    props: ['transform']
}
</script>

