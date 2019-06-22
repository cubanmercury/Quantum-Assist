<template>
    <!-- <div class="button_frame"> -->
        <router-link class="button" :to="path">
            <span>{{ title }}</span>
            <svg class="svg">
                <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            </svg>
        </router-link>
    <!-- </div> -->
</template>
 
<script>
export default {
  name: 'Button',
  props: {
    title: String,
    path: String
  }
}
</script>


<style scoped>

.button_frame{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.button {
	display: flex;
	align-items: center;
	justify-content: center;
  cursor: pointer;
  margin: 40px;
}
.svg {
		height: 55px;
		width: 150px;
		fill: none;
		stroke-width: 5;
}
.o1 {
  stroke: rgba(255, 179, 65, 0.7);
  fill: #FFA114;
  transition: all 1s ease-in-out;
  pointer-events: all;
}
.o2 {
  stroke: white;
  stroke-dasharray: 20 420;
  stroke-dashoffset: 20;
  transition: all 1s ease-in-out;
  pointer-events: all;
}
span {
  position: absolute;
  color: #ffffff;
  margin: auto 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.o1:hover{
  fill: rgba(255, 179, 65, 0.3) !important;
}

.o2:hover {
  stroke-dashoffset: -420 !important;
}
</style>
