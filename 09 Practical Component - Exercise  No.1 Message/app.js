Vue.component('message', {

  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    }
  },

  template: `
  
    <article class="message" v-show="isVisible">
      <div class="message-header">
        {{ title }}
        <button class="delete" aria-label="delete" @click="isVisible = false"></button>
      </div>

      <div class="message-body">
       {{ body }}
      </div>
    </article>
  `,

  // You can have it also as inline instead of calling hideModal, see line 16
  // methods: {
  //   hideModal() {
  //     this.isVisible = false
  //   }
  // }
});

new Vue({

  el: '#root'

});
