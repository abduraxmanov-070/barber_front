<template>
  <div class="hello">
    <section class="site-hero overlay" data-stellar-background-ratio="0.5" :style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">
            <div class="mb-5 element-animate">
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
    <!-- END section -->
    <section class="site-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2>Sartaroshlar xususiyati:</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">

            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors-1"></span></div>
              <div class="media-body">
                <h3>Yuvish &amp; Kesish</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-cream"></span></div>
              <div class="media-body">
                <h3>Krem &amp; Shampun</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-moustache"></span></div>
              <div class="media-body">
                <h3>Soqol olish</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">

            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-scissors"></span></div>
              <div class="media-body">
                <h3>Soch stillari</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-razor"></span></div>
              <div class="media-body">
                <h3>Soqol uchun ustara</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media d-block media-feature text-center">
              <div class="mr-3 icon-wrap"><span class="custom-icon flaticon-hair-comb"></span></div>
              <div class="media-body">
                <h3>Soch taroqlari</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->
    <section class="page-contain">
      <div class="data-card text-center" v-if="today.length > 0">
        <h3>{{ today[0]['day ']}} </h3>
        <h4>Mijozlar</h4>
        <table border="1px" class="w-100 table-bordered text-black table-hover">
          <tr class="bg-primary" >
            <th>Sartarosh</th>
            <th>Mijoz</th>
            <th>Vaqti</th>
          </tr>
          <tr v-for="item in today" v-bind:key="item.id">
            <td>{{ item.barber.barber_name }}</td>
            <td>{{ item['client_name '] }}</td>
            <td>{{ item['start_time  '] }}</td>
          </tr>
        </table>
      </div>
      <a href="" class="data-card text-center" v-if="tomorrow.length > 0">
        <h3>{{ tomorrow[0]['day '] }}</h3>
        <h4>Mijozlar</h4>
        <table border="1px" class="w-100 table-bordered text-black">
          <tr class="bg-primary">
            <td>Sartarosh</td>
            <td>Mijoz</td>
            <td>Vaqt</td>
          </tr>
          <tr v-for="item in tomorrow" v-bind:key="item.id">
            <td>{{ item.barber.barber_name }}</td>
            <td>{{ item['client_name '] }}</td>
            <td>{{ item['start_time  '] }}</td>
          </tr>
        </table>
      </a>
      <a href="" class="data-card text-center" v-if="after_tomorrow.length > 0">
        <h3>{{ after_tomorrow[0]['day '] }}</h3>
        <h4>Mijozlar</h4>
        <table border="1px" class="w-100 table-bordered text-black">
          <tr class="bg-primary">
            <td>Sartarosh</td>
            <td>Mijoz</td>
            <td>Vaqt</td>
          </tr>
          <tr v-for="item in after_tomorrow" v-bind:key="item.id">
            <td>{{ item.barber.barber_name }}</td>
            <td>{{ item['client_name '] }}</td>
            <td>{{ item['start_time  '] }}</td>
          </tr>
        </table>
      </a>
    </section>

    <!--    booking form-->
    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form action="http://barber.amusoft.uz/api/bookings" method="post" @submit.prevent="mxSubmit" id="form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="client_name">Mijoz_F.I.O</label>
                  <input type="text" id="client_name" class="form-control" name="client_name" required
                         v-model="client_name">
                </div>
                <div class="col-md-6 form-group">
                  <label for="client_phone_number">Mijoz tel_nomer</label>
                  <input type="text" id="client_phone_number" class="form-control" name="client_phone_number" required
                         v-model="client_phone_number">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="barber_id">Sartarosh</label>
                  <select id="barber_id" name="barber_id" class="form-control" required v-model="barber_id">
                    <option v-for="item in barbers" v-bind:key="item.id" :value="item['id']">{{ item['barber_name'] }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="day">Sana</label>
                  <input type="date" id="day" class="form-control" min="2022-06-02" name="day" required v-model="day">
                </div>
                <div class="col-md-6 form-group">
                  <label for="start_time">Bandlik vaqti</label>
                  <input type="time" id="start_time" class="form-control" name="start_time" required v-model="start_time">
                </div>
              </div>
              <div class="pb-2">
                <vue-recaptcha
                  sitekey="6Le9WAEVAAAAAO-U7wI50TYIP5nKAxb7VkbkyoSY"
                  @verify="mxVerify"
                ></vue-recaptcha>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="submit" value="Saqlash:" class="btn btn-primary" id="save">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <!-- END section -->
<!--<table border="1px">-->
<!--  <tr>-->
<!--    <td>barber_id</td>-->
<!--    <td>cost</td>-->
<!--    <td>services</td>-->
<!--  </tr>-->
<!--  <tr v-for="item in list" v-bind:key="item.id">-->
<!--    <td>{{item.barber_id}}</td>-->
<!--    <td>{{item.cost}}</td>-->
<!--    <td>{{item.services_name}}</td>-->
<!--  </tr>-->
<!--</table>-->


  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {VueRecaptcha} from 'vue-recaptcha';

Vue.use(VueAxios, axios).use(VueRecaptcha);
export default {
  name: 'booking',
  components: {VueRecaptcha},
  methods: {
    mxSubmit() {

      if (this.client_name && this.client_phone_number && this.day && this.barber_id && this.start_time && this.recaptcha)
        $('#form').submit();
      else this.form = false;
    },
    mxVerify(response) {
      this.recaptcha = response;
    },
    onEvent() {
      this.$refs.recaptcha.execute();
    }
  },
  data() {
    return {
      list: undefined, barbers: undefined, today:undefined, tomorrow:undefined, after_tomorrow:undefined,
      form: false,
      client_name: null,
      client_phone_number: null,
      day: null,
      start_time: null,
      barber_id: null,
      recaptcha: null,
    }
  },
  mounted() {
    Vue.axios.get('http://barber.amusoft.uz/api/bookings')
      .then((resp) => {
        this.list = resp.data;
      })
    Vue.axios.get('http://barber.amusoft.uz/api/barbers')
      .then((resp) => {
        this.barbers = resp.data;
      })
    Vue.axios.get('http://barber.amusoft.uz/api/today')
      .then((resp) => {
        this.today = resp.data;
      })
    Vue.axios.get('http://barber.amusoft.uz/api/tomorrow')
      .then((resp) => {
        this.tomorrow = resp.data;
      })
    Vue.axios.get('http://barber.amusoft.uz/api/after_tomorrow')
      .then((resp) => {
        this.after_tomorrow = resp.data;
      })
  }

}
</script>

<style scoped>
/*h1, h2 {*/
/*  font-weight: normal;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');
* {
  box-sizing: border-box;
}
tr:hover{
  background: darkgray;
}
.page-contain {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: sandybrown;
  border: 0.75em solid white;
  padding: 2em;
  font-family: 'Open Sans', sans-serif;
}
.data-card {
  display: flex;
  flex-direction: column;
  max-width: 20.75em;
  min-height: 20.75em;
  overflow: hidden;
  border-radius: 0.5em;
  text-decoration: none;
  background: white;
  margin: 1em;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -0.5em rgba(0, 0, 0, .1);
  transition: transform 0.45s ease, background 0.45s ease;
}
.data-card h3 {
  color: #2e3c40;
  font-size: 3em;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 0.5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid #753bbd;
  transition: color 0.45s ease, border 0.45s ease;
}
.data-card h4 {
  color: #627084;
  text-transform: uppercase;
  font-size: 1.125em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
  margin: 0 0 1.777777778em;
  transition: color 0.45s ease;
}
.data-card p {
  opacity: 0;
  color: #fff;
  font-weight: 600;
  line-height: 1.8;
  margin: 0 0 1.25em;
  transform: translateY(-1em);
  transition: opacity 0.45s ease, transform 0.5s ease;
}
.data-card .link-text {
  display: block;
  color: #753bbd;
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1.2;
  margin: auto 0 0;
  transition: color 0.45s ease;
}
.data-card .link-text svg {
  margin-left: 0.5em;
  transition: transform 0.6s ease;
}
.data-card .link-text svg path {
  transition: fill 0.45s ease;
}
/*.data-card:hover {*/
/*  !*background: #753bbd;*!*/
/*  transform: scale(1.02);*/
/*}*/
/*.data-card:hover h3 {*/
/*  color: #fff;*/
/*  border-bottom-color: #a754c4;*/
/*}*/
/*.data-card:hover h4 {*/
/*  color: #fff;*/
/*}*/
/*.data-card:hover p {*/
/*  opacity: 1;*/
/*  transform: none;*/
/*}*/
/*.data-card:hover .link-text {*/
/*  color: #fff;*/
/*}*/
.data-card:hover .link-text svg {
  animation: point 1.25s infinite alternate;
}
.data-card:hover .link-text svg path {
  fill: #fff;
}
@keyframes point {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0.125em);
  }
}

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
