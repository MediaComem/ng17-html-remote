<template>
  <div class="angle-lever">
    <input type="range" name="points" id="range" :value="angle" min="0" max="90" @input="changeValue" @change="changeValue">
  </div>
</template>
<script>
export default {
  name: 'angle-lever',
  props: [
    'angle'
  ],
  data () {
    return {
      angleValue: ''
    }
  },
  methods: {
    changeValue (e) {
      this.angleValue = e.target.value
      this.$emit('valueChanged', e.target.value)
    }
  }
}
</script>
<style>
input[type=range]{
  position: absolute;
  bottom: 80px;
  right: -40px;
  -webkit-appearance: none;
  -ms-transform: rotate(270deg); /* IE 9 */
  -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */
  transform: rotate(270deg);
  margin-top: 200px;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: goldenrod;
  margin-top: -5px;
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
height: 16px;
width: 16px;
border-radius: 8px;
background: goldenrod;
cursor: pointer;
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
height: 16px;
width: 16px;
border-radius: 8px;
background: goldenrod;
cursor: pointer;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 175px;
  heigh: 4px;
  cursor: pointer;
  background: white;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: white;
}

input[type=range]::-moz-range-track {
  width: 175px;
  heigh: 4px;
  cursor: pointer;
  background: white;
}

input[type=range]::-ms-track {
  width: 175px;
  heigh: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: black;
}
input[type=range]:focus::-ms-fill-lower {
  background: black;
}
input[type=range]::-ms-fill-upper {
  background: black;
}
input[type=range]:focus::-ms-fill-upper {
  background: black;
}

</style>
