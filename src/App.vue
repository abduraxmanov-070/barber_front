<template>
<!--  <script src="owlcarousel/owl.carousel.min.js"></script>-->
<!--  <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">-->
<!--  <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />-->
<!--  <script src="/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>-->
<!--  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css">-->
  <div id="app">
<!--    <p>-->
<!--&lt;!&ndash;       use the router-link component for navigation.&ndash;&gt;-->
<!--&lt;!&ndash;       specify the link by passing the `to` prop.&ndash;&gt;-->
<!--&lt;!&ndash;       `<router-link>` will render an `<a>` tag with the correct `href` attribute&ndash;&gt;-->
<!--      <button class="btn btn-dark"><router-link to="/">Home</router-link></button>-->
<!--      <button class="btn btn-dark"><router-link to="/hairstyle">HairStyle</router-link></button>-->
<!--      <button class="btn btn-dark"><router-link to="/about">About</router-link></button>-->
<!--      <button class="btn btn-dark"><router-link to="/contact">Contact</router-link></button>-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/contact">Contact</router-link>&ndash;&gt;-->
<!--    </p>-->
<!--    <img src="./assets/logo.png">-->
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
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
<!--              <li class="nav-item dropdown">-->
<!--                <a class="nav-link dropdown-toggle" href="hairstyle.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Haircut</a>-->
<!--                <div class="dropdown-menu" aria-labelledby="dropdown04">-->
<!--                  <a class="dropdown-item" href="hairstyle.html">Crew Cut</a>-->
<!--                  <a class="dropdown-item" href="hairstyle.html">Regular Hair Cut</a>-->
<!--                  <a class="dropdown-item" href="hairstyle.html">Shampoo + Cut</a>-->
<!--                  <a class="dropdown-item" href="hairstyle.html">Beard Trim with Razor</a>-->
<!--                  <a class="dropdown-item" href="hairstyle.html">Hair Color</a>-->
<!--                </div>-->

<!--              </li>-->
              <li class="nav-item">
                <router-link class="nav-link active" to="/hairstyle">Hairstyles</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/booking">Booking</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/contact">Contact</router-link>
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
            <h3 class="mb-4">About</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quod!</p>
            <ul class="list-unstyled ">
              <li class="d-flex"><span class="mr-3"><span class="icon ion-ios-location"></span></span><span class="">34 Street Name, City Name Here, United States</span></li>
              <li class="d-flex"><span class="mr-3"><span class="icon ion-ios-telephone"></span></span><span class="">+1 242 4942 290</span></li>
              <li class="d-flex"><span class="mr-3"><span class="icon ion-email"></span></span><span class="">info@yourdomain.com</span></li>
            </ul>
          </div>
          <div class="col-md-2">
            <h3 class="mb-4">Links</h3>
            <ul class="list-unstyled ">
              <li><a href="#">Home</a></li>
              <li><a href="#">Hairstyle</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Booking</a></li>
              <li><a href="#">Contact</a></li>
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
            <h3>Connect</h3>
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
<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
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
