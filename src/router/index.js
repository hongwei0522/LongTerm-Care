import { createRouter, createWebHistory } from 'vue-router';
import LoginSection from '../pages/loginSection.vue';
import InformationSection from '../pages/informationSection.vue';
import PasswordSection from '../pages/passwordSection.vue'

import Home from '../pages/HomeView.vue';


const routes = [
  {
    path: '/Home/:target?',
    name: 'Home',
    alias: '/',
    component: Home,
  },
  {
    path: '/loginSection',
    name: 'LoginSection',
    component: LoginSection,
  },
  {
    path: '/informationSection',
    name: 'InformationSection',
    component: InformationSection,
  },
  {
    path: '/passwordSection',
    name: 'PasswordSection',
    component: PasswordSection,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to,from) {

    if (to.params && to.params.target) {
      return { 
        el: '#' + to.params.target ,
        behavior: 'smooth',
      }
    }    
  }
  
});

export default router;
