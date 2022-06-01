<template>
  <div class="hello">
    <section class="site-hero overlay" data-stellar-background-ratio="0.5"
             :style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">

            <div class="mb-5 element-animate">
              <h1 class="mb-4">Booking</h1>
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
        <table border="1px" class="w-100">
          <tr>
            <td>barber_name</td>
            <td>client_name</td>
            <td>day</td>
            <td>start_time</td>
          </tr>
          <tr v-for="item in list" v-bind:key="item.id">
            <td>{{ item.barber.barber_name }}</td>
            <td>{{ item['client_name '] }}</td>
            <td>{{ item['day '] }}</td>
            <td>{{ item['start_time  '] }}</td>
          </tr>
        </table>
      </div>
    </section>
    <!--    booking form-->
    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form action="http://barber.amusoft.uz/api/bookings" method="post">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="client_name">Client_name</label>
                  <input type="text" id="client_name" class="form-control" name="client_name">
                </div>
                <div class="col-md-6 form-group">
                  <label for="client_phone_number">Client_phone_nomber</label>
                  <input type="text" id="client_phone_number" class="form-control" name="client_phone_number">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="barber_id">Barber</label>
                  <select id="barber_id" name="barber_id" class="form-control">
                    <option v-for="item in barbers" v-bind:key="item.id" :value="item['id']">{{item['barber_name']}}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="day">Day</label>
                  <input type="date" id="day" class="form-control" name="day">
                </div>
                <div class="col-md-6 form-group">
                  <label for="start_time">Start_time</label>
                  <input type="time" id="start_time" class="form-control" name="start_time">
                </div>
<!--                <div class="col-md-6 form-group">-->
<!--                  <label for="end_time">End_time</label>-->
<!--                  <input type="time" id="end_time" class="form-control" name="end_time">-->
<!--                </div>-->
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="submit" value="Send Message" class="btn btn-primary">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->
  </div>
</template>

<script>
// export default {
//   name: 'booking',
//   data () {
//     return {
//       msg: 'Welcome to Booking page'
//     }
//   }
// }
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
  name: 'booking',
  data() {
    return {list: undefined , barbers: undefined}
  },
  mounted() {
    Vue.axios.get('http://barber.amusoft.uz/api/bookings')
      .then((resp) => {
        this.list = resp.data;
        console.warn(resp.data)
      })
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
