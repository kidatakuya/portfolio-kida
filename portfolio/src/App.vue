<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/home.vue'
// import test from './components/profileDetails/workDetails/test.vue'

// const router = new Router({
//   // routes: [...],
//   scrollBehavior (to, from, savedPosition) {
//     return{ x: 0, y: 0 }
//     // 望みのポジションを返す
//   }
// })

export default {
  // components: {
  //   Home,
  //   Text,
    
  // },
  name: 'App',
  
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }


}
</script>

<style lang="scss">
@import "./assets/css/ress";
// body{
//   scroll-snap-type: y mandatory;
//   overflow: auto;
// }

#app {
   font-size: 62.5%;
  font-family: ヒラギノ明朝 ProN, sans-serif;
}
.titlebox{
    width: 65%;
    margin: 0 auto;
    text-align: center;
    .title{
      color: #707070;
      font-size: 32px;
      position: relative;
      &::before{
        content: "";
        display: block;
        width: 28%;
        height: 1px;
        background-color: #707070;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
      &::after{
        content: "";
        display: block;
        width: 28%;
        height: 1px;
        background-color: #707070;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
    .subtitle{
      font-size: 26px;
      color: #A0A0A0;
    }
  }
</style>
