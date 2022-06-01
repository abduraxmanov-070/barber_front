<template>
  <div id="app">
    <header role="banner">
      <nav class="navbar navbar-expand-md navbar-dark bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">Jo'rabek saloni</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Bosh sahifa</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/hairstyle">Soch kesish</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about">Biz haqimizda</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/gallery">Galareya</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/booking">Navbat</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/contact">Bo'lanish</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <router-view/>

    <footer class="site-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <h3 class="mb-4">Ma'lumotlar</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quod!</p>
            <ul class="list-unstyled ">
              <li class="d-flex"><span class="mr-3"><span class="icon ion-ios-location"></span></span><span class="">Al-Xorazmiy ko'cha, Urganch shahar, Xorazm viloyat, O'zbekiston </span></li>
              <li class="d-flex"><span class="mr-3"><span class="icon ion-ios-telephone"></span></span><span class="">+998 00 000 00 00</span></li>
              <li class="d-flex"><span class="mr-3"><span class="icon ion-email"></span></span><span class="">barber@gmail.com</span></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h3 class="mb-4">Links</h3>
            <ul class="list-unstyled ">
              <li><a href="/">Bosh sahifa</a></li>
              <li><a href="/hairstyle">Soch kesish</a></li>
              <li><a href="/about">Biz haqimizda</a></li>
              <li><a href="/gallery">Galareya</a></li>
              <li><a href="/booking">Navbat</a></li>
              <li><a href="/contact">Bog'lanish</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3 class="mb-4">Latest Blog</h3>
            <ul class="list-unstyled blog-entry-footer">
              <li><a href="#">
                <span class="post-meta">March 20, 2018</span>
                <h3>7 Best Destination in The World</h3></a>
              </li>
              <li><a href="#">
                <span class="post-meta">March 20, 2018</span>
                <h3>4 Hour Work Week And The Rest Is Travel</h3></a>
              </li>
              <li><a href="#">
                <span class="post-meta">March 20, 2018</span>
                <h3>Why You Should Travel Today</h3></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>Ulanishlar</h3>
            <p>
              <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
              <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
              <a href="#" class="p-2"><span class="fa fa-instagram"></span></a>
              <a href="#" class="p-2"><span class="fa fa-youtube"></span></a>
              <a href="#" class="p-2"><span class="fa fa-telegram"></span></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- END footer -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

  </div>



</template>

<script>
import './assets/js/jquery-3.2.1.min';
import './assets/js/jquery-migrate-3.0.0';
import './assets/js/popper.min';
import './assets/js/bootstrap.min';
import './assets/js/owl.carousel.min';
import './assets/js/jquery.waypoints.min';
import './assets/js/jquery.stellar.min';
import './assets/js/jquery.magnific-popup.min';
import './assets/js/magnific-popup-options';
import './assets/js/main';

export default {
  name: 'App'
}
</script>

<style>
@import "assets/fonts/ionicons/css/ionicons.min.css";
@import "assets/fonts/fontawesome/css/font-awesome.min.css";
@import "assets/fonts/flaticon/font/flaticon.css";
@import "assets/css/style.css";
@import "assets/css/bootstrap.css";
@import "assets/css/animate.css";
@import "assets/css/magnific-popup.css";
@import "assets/css/owl.carousel.min.css";

</style>
