import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/components/Movies';
import Upload from '@/components/Upload';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload,
    },
  ],
});

