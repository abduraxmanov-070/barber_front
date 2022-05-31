import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import HairStyle from "../components/HairStyle";
//styles
import "../assets/css/style.css";
import "../assets/css/animate.css";
import "../assets/css/bootstrap.css";
import "../assets/css/magnific-popup.css";
// import "./assets/css/owl.carousel.min.css";

// //fonts
import "../assets/fonts/ionicons/css/ionicons.min.css";
import "../assets/fonts/fontawesome/css/font-awesome.min.css";
import "../assets/fonts/flaticon/font/flaticon.css";
// //scripts
import "../assets/js/jquery-3.2.1.min.js";
import "../assets/js/jquery-migrate-3.0.0.js";
import "../assets/js/popper.min.js";
import "../assets/js/bootstrap.min.js";
import "../assets/js/owl.carousel.min.js";
import "../assets/js/jquery.waypoints.min.js";
import "../assets/js/jquery.stellar.min.js";
import "../assets/js/jquery.magnific-popup.min.js";
import "../assets/js/magnific-popup-options";
import "../assets/js/main.js";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
  ]
})
