var users = []
var templates = [
  { name: 'Dark', value: 'css/dark.css'},
  { name: 'Light', value: 'css/light.css'}
]


var app = new Vue({
  el: '#app',
  data: {
    title: "Title",
    templates: {
      list: templates,
      can_list: templates.length > 1
    }
  }
})

new Chartist.Pie('.ct-chart', {
  series: [5, 3, 4]
}, {});
