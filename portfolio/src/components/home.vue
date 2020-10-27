<template>
  <div class="home">
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
   mounted(){
    const nav = document.getElementsByClassName("nav");
    const conteiner = document.getElementsByClassName("conteiner");
    let arrow = document.getElementsByClassName("works__navbox__inner__nav__arrow")
    arrow = Array.from(arrow);
    const year = document.getElementsByClassName("works__navbox__inner__nav__text")
     arrow[0].style.transform="translateY(0)";
    for(let i=0;i<=nav.length-1;i++){
       nav[i].onclick=()=>{
          // スクロール
          conteiner[i].scrollIntoView({behavior: "smooth"});
      }
    }
    for(let i=0;i<=year.length-1;i++){
      year[i].onclick=()=>{
        arrow.forEach(element => {
          element.style.transform="translateY(-200%)";
        });
        arrow[i].style.transform="translateY(0)";
      }
    }
   },
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
<style lang="scss" scoped>
.home{
  scroll-snap-type: y mandatory;
  overflow: auto;
}
</style>