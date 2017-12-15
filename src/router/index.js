import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: require('@/components/PageMain').default
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: require('@/components/pages/movie/movie_grid/movie_details/MovieDetails').default
    }

  ]
})
