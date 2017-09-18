var users = [
  {id: 1, first_name: 'John', last_name: 'Doe', email: 'jdoe@fuck.it'}
];
var templates = [
  { id: 1, name: 'Dark', value: 'css/dark.css', logo: 'css/dark.css'},
  { id: 2, name: 'Light', value: 'css/light.css', logo: 'css/light.css'}
];

var app = new Vue({
  el: '#app',
  data: {
    title: "Hello, VueJS",
    users: users,
    templates: templates,
    default_template: 2,
    current_template: templates[0]
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
        keys.push(key);
      }
      return keys;
    }
  }
});
