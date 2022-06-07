<template>
  <div class="hello">
    <section class="site-hero overlay" data-stellar-background-ratio="0.5":style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">
            <div class="mb-5 element-animate">
              <h1 class="mb-4">Biz haqimizda</h1>
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
                    <h5>+998 00 000 00 00</h5>
                    <h5>Biz bilan bog'lanish : 7/24</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-location"></span></div>
                  <div class="media-body">
                    <h5>101 uy</h5>
                    <h5>Al-Xorazmiy k, Urganch sh, Xorazm v, O'zbekiston</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-android-time"></span></div>
                  <div class="media-body">
                    <h5>Ish vaqti: 09:00 - 21:00 </h5>
                    <h5>Ish kunlari Dush-Shan <br> Dam olish : Yak</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="site-section pb-5">
      <div class="container">
        <div class="row mb-5 justify-content-center">
        </div>
          <div class="row" v-for="item in barbers" v-bind:key="item.id">
            <div class="col-md-6 video-wrap mb-5">
              <img :src="'http://barber.amusoft.uz/photo/'+ item['barber_photo']"  alt="Image placeholder" class="img-fluid w-75 h-75">
            </div>
          <div class="col-md-6 pl-md-5">
            <h3>Ismi: {{item['barber_name']}}</h3>
            <p class="lead">Expert Barber</p>
            <h3>Tel_nomer: {{item['barber_phone_number']}}</h3>
            <h3>Manzili: {{item['barber_home_adress']}}</h3>
            <h3>Ish vaqti: {{item['start_time']}} - {{item['end_time']}}</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
  name: 'about',
  data() {
    return {barbers: undefined }
  },
  mounted() {
    Vue.axios.get('http://barber.amusoft.uz/api/barbers')
      .then((resp) => {
        this.barbers = resp.data;
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
