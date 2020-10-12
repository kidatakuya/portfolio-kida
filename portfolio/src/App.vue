<template>
  <div id="app">
    <Header></Header>
    <Top></Top>
    <Profile></Profile>
    <Works></Works>
    <Training></Training>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Top from './components/top.vue'
import Profile from './components/profile.vue'
import Works from './components/works.vue'
import Training from './components/training.vue'
import Contact from './components/contact.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Top,
    Profile,
    Works,
    Training,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
@import "./css/ress";
#app {
  font-family: ヒラギノ明朝 ProN, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
