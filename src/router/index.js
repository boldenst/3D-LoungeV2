import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/forum/Forum.vue')
  },
  {
    path: '/troubleshoot/issue-1',
    name: 'Issue1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/issue-1.vue')
  },

  // Troubleshooting issues

  {
    path: '/troubleshoot/layeradhesion',
    name: 'LayerAdhesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/LayerAdhesion.vue')
  },

  {
    path: '/troubleshoot/pillowing',
    name: 'Pillowing',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/Pillowing.vue')
  },

  {
    path: '/troubleshoot/bed-adhesion',
    name: 'BedAdhesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/BedAdhesion.vue')
  },
  
  {
    path: '/troubleshoot/warping',
    name: 'Warping',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/Warping.vue')
  },
    
  {
    path: '/troubleshoot/extrusionincosistency',
    name: 'ExtrusionInconsistency',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/ExtrusionInconsistency.vue')
  },
  
  {
    path: '/troubleshoot/ringing',
    name: 'Ringing',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/Ringing.vue')
  },

  {
    path: '/troubleshoot/stringing',
    name: 'Stringing',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/Stringing.vue')
  },
  
  {
    path: '/troubleshoot/bridging',
    name: 'Bridging',
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-issues/Bridging.vue')
  },
  


  //Troubleshooting Guides

  {
    path: '/troubleshoot/changetemphotend',
    name: 'ChangeTempHotend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/troubleshoot-guides/ChangeTempHotend.vue')
  },

  {
    path: '/troubleshoot',
    name: 'Troubleshoot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/troubleshoot/Troubleshoot.vue')
  },

  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },

  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  }
]

const router = new VueRouter({
  // DON'T DELETE THAT! Gets rid off hashtag in URL
  mode: 'history',
  routes
})

export default router
