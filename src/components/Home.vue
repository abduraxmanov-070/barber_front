<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <section class="site-hero overlay" data-stellar-background-ratio="0.5" :style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
<!--             style="background-image: url('../assets/images/big_image_1.jpg');">-->
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">
            <div class="mb-5 element-animate">
              <img src="../assets/images/banner_text_1.png" alt="Image placeholder" class="img-md-fluid"/>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="quick-info element-animate" data-animate-effect="fadeInLeft">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 bgcolor">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-ios-telephone"></span></div>
                  <div class="media-body">
                    <h5>+1 234 5633 342</h5>
                    <p>Call us 24/7 we will get back to you ASAP</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-location"></span></div>
                  <div class="media-body">
                    <h5>249 Division Rad</h5>
                    <p>Fake st. New York, New York City,  PO 2923 USA</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-android-time"></span></div>
                  <div class="media-body">
                    <h5>Daily: 8 am - 10 pm</h5>
                    <p>Mon-Fri, Sunday <br> Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->


    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pr-5">

            <h2 class="mb-3">Services</h2>
            <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

            <div class="mb-3 custom-nav">
              <a href="#" class="btn btn-primary btn-sm custom-prev mr-2 mb-2"><span class="ion-android-arrow-back"></span></a>
              <a href="#" class="btn btn-primary btn-sm custom-next mr-2 mb-2"><span class="ion-android-arrow-forward"></span></a>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 slider-wrap">
                <div class="owl-carousel owl-theme no-nav js-carousel-1">

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_2.jpg')+')'}">
<!--                     style="background-image: url('../assets/images/img_2.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Haircuting</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_1.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_1.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Beard Shaving</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg last" :style="{backgroundImage: 'url('+require('../assets/images/img_3.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_3.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Cream &amp; Shampoo</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_2.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_2.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Haircuting</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_3.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_1.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Beard Shaving</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg last" :style="{backgroundImage: 'url('+require('../assets/images/img_3.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_3.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Cream &amp; Shampoo</h2>
                      <p>Read More</p>
                    </div>
                  </a>
                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_2.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_2.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Haircuting</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_1.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_1.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Beard Shaving</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg last" :style="{backgroundImage: 'url('+require('../assets/images/img_3.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_3.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Cream &amp; Shampoo</h2>
                      <p>Read More</p>
                    </div>
                  </a>
                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_2.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_2.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Haircuting</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg" :style="{backgroundImage: 'url('+require('../assets/images/img_1.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_1.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Beard Shaving</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                  <a href="#" class="img-bg last" :style="{backgroundImage: 'url('+require('../assets/images/img_3.jpg')+')'}">
<!--                    style="background-image: url('../assets/images/img_3.jpg')">-->
                    <div class="text">
                      <span class="icon custom-icon flaticon-scissors"></span>
                      <h2>Cream &amp; Shampoo</h2>
                      <p>Read More</p>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="site-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2>Barber Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum maiores adipisci pariatur, eveniet.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">

            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors-1"></span></div>
              <div class="media-body">
                <h3>Shave &amp; Haircut</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-cream"></span></div>
              <div class="media-body">
                <h3>Cream &amp; Shampoo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-moustache"></span></div>
              <div class="media-body">
                <h3>Mustache Expert</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">

            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors"></span></div>
              <div class="media-body">
                <h3>Haircut Styler</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-razor"></span></div>
              <div class="media-body">
                <h3>Razor For Beards</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-hair-comb"></span></div>
              <div class="media-body">
                <h3>Haircomb</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->
    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 video-wrap mb-5">
            <img src="../assets/images/img_5.jpg" alt="Image placeholder" class="img-fluid">
            <a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo btn-video"><span class="fa fa-play"></span></a>
          </div>
          <div class="col-md-6 pl-md-5">
            <h3>Good Looking Style</h3>
            <p class="lead">Start with us today</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
            <p>Nobis quae eaque facere architecto eligendi, voluptas quasi, blanditiis aperiam possimus inventore quis nam! Cupiditate necessitatibus, voluptatem excepturi placeat exercitationem quos vitae ut vero dolorem, provident sit odio porro facere.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- END section -->
    <section class="section-cover cta" data-stellar-background-ratio="0.5" :style="{backgroundImage: 'url('+require('../assets/images/big_image_2.jpg')+')'}">
      <div class="container">
        <div class="row justify-content-center align-items-center intro">
          <div class="col-md-8 text-center element-animate">
            <h2 class="mb-4"><span>Appoint a Haircut Today and</span> Get 25% discount</h2>
            <p><a href="#" class="btn btn-black">Make an Appointment</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- END section -->
<table border="1px">
  <tr>
    <td>barber_id</td>
    <td>cost</td>
    <td>services</td>
  </tr>
  <tr v-for="item in list" v-bind:key="item.id">
    <td>{{item.barber_id}}</td>
    <td>{{item.cost}}</td>
    <td>{{item.services_name}}</td>
  </tr>
</table>


  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
export default {
  name: 'home',
  data () {
    return {list:undefined }
  },
  mounted() {
    Vue.axios.get('http://barber.amusoft.uz/api/serveces')
    .then((resp)=>{
      this.list=resp.data;
      console.warn(resp.data)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
