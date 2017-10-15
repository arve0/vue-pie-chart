import Vue from 'vue'
import PieChart from './PieChart.vue'

let app = new Vue({
  el: '#app',
  data: {
    percent: 42,
    width: 1,
    opacity: 0.7,
    label: '',
    labelSmall: 'a.b.c',
    color: '#40a070'
  },
  components: {
    'pie-chart': PieChart
  }
})

global.pc = PieChart
global.app = app
