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
import Header from './homes/header.vue'
import Top from './homes/top.vue'
import Profile from './homes/profile.vue'
import Works from './homes/works.vue'
import Training from './homes/training.vue'
import Contact from './homes/contact.vue'
import Footer from './homes/footer.vue'

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
  },
  
}
</script>
