<template>
  <div class="hello">
    <section class="site-hero overlay" data-stellar-background-ratio="0.5"
             :style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">

            <div class="mb-5 element-animate">
              <h1 class="mb-4">Galareya</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                    <h5>Ish vaqti: 09:00 - 21:00 pm</h5>
                    <h5>Ish kunlari Dush-Shan <br> Dam olish : Yak</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    //cards styles-->
    <section >
      <div class="container">
        <ul class="cards">
          <li v-for="item in photos" v-bind:key="item.id">
            <a href="" class="card">
              <img :src="'http://barber.amusoft.uz/photo/'+ item.url" class="card__image" alt="" style="width: 500px; height: 650px" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
<!--                  <img :src="require(`http://barber.amusoft.uz/photo/${item.url}`)" alt class="icon" />-->
                  <img class="card__thumb" :src="'http://barber.amusoft.uz/photo/'+ item.url" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">{{ item.name}}</h3>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

<!--    style video-->
    <section class="pb-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 " v-for="item in videos" v-bind:key="item.id">
            <div class="card" >
              <div class="card-image">
                <div class="embed-responsive embed-responsive-16by9">
<!--                  <p>{{ item['url']}} </p>-->
                  <iframe width="280" height="157" :src="item['url']" frameborder="0" allowfullscreen></iframe>
<!--                  <iframe width="560" height="315" src="https://www.youtube.com/embed/2sP75ZDb0RM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                  <div class="content">
                    <h1>{{ item['name ']}}</h1>
                  </div>
                </div>
              </div>
              <!-- card image -->

              <div class="card-content">
                <span class="card-title">{{ item.name }}</span>
<!--                <p>THE TIMBERS’ thumping rhythms and big misty mountain melodies will  </p>-->
              </div>
              <!-- card content -->

            </div>
          </div>
        </div>
      </div>
    </section>
 </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
  name: 'gallery',
  data() {
    return {photos: undefined , videos: undefined}
  },
  mounted() {
    Vue.axios.get('http://barber.amusoft.uz/api/photos')
      .then((resp) => {
        this.photos = resp.data;
        console.warn(resp.data)
      })
    Vue.axios.get('http://barber.amusoft.uz/api/videos')
      .then((resp) => {
        this.videos= resp.data;
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
