import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import HairStyle from "../components/HairStyle";
import Booking from "../components/Booking";
import Gallery from "../components/Gallery";
import Sertificate from "../components/Sertificate";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hairstyle',
      name: 'hairstyle',
      component: HairStyle
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    // {
    //   path: '/booking',
    //   name: 'booking',
    //   component: Booking
    // },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/sertificate',
      name: 'sertificate',
      component: Sertificate
    },
  ]
})
