<template>
  <div class="hello">
    <section class="site-hero overlay" data-stellar-background-ratio="0.5" :style="{backgroundImage: 'url('+require('../assets/images/big_image_1.jpg')+')'}">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">
            <div class="mb-5 element-animate">
              <h1 class="mb-4">Bog'lanish</h1>
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
                    <p>Biz bilan bog'lanish : 7/24</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-location"></span></div>
                  <div class="media-body">
                    <h5>101 uy</h5>
                    <p>Al-Xorazmiy k, Urganch sh, Xorazm v, O'zbekiston</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="media">
                  <div class="mr-3 icon-wrap"><span class="icon ion-android-time"></span></div>
                  <div class="media-body">
                    <h5>Ish vaqti: 08:00 - 20:00 pm</h5>
                    <p>Ish kunlari Dush-Shan <br> Dam olish : Yak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form action="http://barber.amusoft.uz/api/contacts" method="post">
              <div class="row">
                <div class="col-md-4 form-group">
                  <label for="name">F.I.O</label>
                  <input type="text" id="name" class="form-control" name="name">
                </div>
                <div class="col-md-4 form-group">
                  <label for="title">Mavzu</label>
                  <input type="text" id="title" class="form-control" name="title">
                </div>
                <div class="col-md-4 form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" class="form-control" name="email">
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Xabar yozish</label>
                  <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="submit" value="Saqlash" class="btn btn-primary">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Contact page'
    }
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
