<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Built with Vue.js and Express.js</p>
    
    <div class="button_frame">
      <div class="button">
        <span>Explore</span>
        <svg class="svg">
          <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
          <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
        </svg>
      </div>
      <div class="button">
        <span>Register</span>
        <svg class="svg">
          <polyline class="o1" points="0 0,150 0, 150 55, 0 55, 0 0"></polyline>
          <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
        </svg>
      </div>
    </div>

  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
*{
  color: #ffffff;
}
h1 {
  margin: 15px 0 0;
  font-size: 2.7rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

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
