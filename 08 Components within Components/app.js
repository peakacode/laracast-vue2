Vue.component('task-lists', {
  
  template: '<div><li v-for="task in tasks">{{ task.task }}</li></div>',

  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Go to the email', complete: false },
        { task: 'Go to the farm', complete: true },
        { task: 'Go to work', complete: false },
      ]
    }
  }

});

Vue.component('task', {
  
  template: '<li><slot></slot></li>'

});

new Vue({

  el: '#root'

});
