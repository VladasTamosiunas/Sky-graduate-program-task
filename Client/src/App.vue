<template>
  <div id="app">
    <!--<img class="skyMainImage" src="https://s-media-cache-ak0.pinimg.com/originals/4b/63/c3/4b63c36727316b69711dc1a43557784a.jpg">-->
    <div class="hello">
      <div class="box firstBox">
        <div class="skyLogoBox">
          <img src="https://www.sky.com/assets/masthead/images/sky-logo.png" alt="SkyLogo" height="110" width="110">
        </div>
        <div class="moodSliderText is-centered">
          <h2 class=" is-1 is-spaced">Sky Moodslider App</h2>
        </div>
        <br>
        <div class="titleBarBox">
          <h2>
            <router-link to="/">
              <a class="button is-light  is-active" >Moodlisder</a>
            </router-link>
            <router-link to="/upload">
              <a class="button is-light is-active">Upload content</a>
              </router-link>
          </h2>
        </div>
        <br>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    height: 100vh;
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  h1,
  h6 {
    font-family: 'Open Sans';
    font-weight: 300;
    text-align: center;
    position: absolute;
    top: 45%;
    right: 0;
    left: 0;
  }
  #app {
  font-family: Sky Text,Helvetica,Arial,sans-serif;
  /*background: linear-gradient(#ffffff, #dedede);*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    padding-top: 50px;
    padding-bottom: 50px;
  /*margin-top: 60px;*/
}

.hello{
  max-width: 960px;
  margin:0px auto;
}
.firstBox{
  margin:0px auto;
  max-width: 850px;
  height: 530px;
  overflow: hidden;
  background: linear-gradient(#ffffff, #dedede);
  background: rgba(0, 73, 175, 0.3);
}
.box{
  overflow: hidden;


}
.skyLogoBox {
  float:left;
  /*background-image: url('https://dm8eklel4s62k.cloudfront.net/images/sky-logo-b90e8c9.jpg');*/
  /*background-color: #cccccc;*/
  margin-bottom: 2px;
  margin-left: auto;

}
/*.titleBarBox{*/
  /*display: inline-block;*/
  /*border: 1px solid green;*/
  /*box-sizing: border-box;*/
  /*width: 400px;*/
  /*height: 40px;*/
  /*line-height: 0px;*/

  /*margin:0px auto;*/

/*}*/
  .moodSliderText{
    font: normal 48px/1.4 Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: powderblue;
  }
  .is-spaced{

    position: relative;
    left: -50px;

  }
</style>
