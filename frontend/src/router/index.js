import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: {
        header: AppHeader,
        default: HelloWorld
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
