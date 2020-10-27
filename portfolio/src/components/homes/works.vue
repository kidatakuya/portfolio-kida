<template>
  <section id="" class="works conteiner">
    <div class="works__titlebox titlebox">
       <h2 class="works__titlebox__title title">作品</h2>
       <p class="works__titlebox__subTitle subtitle">〜 是非、見てください 〜</p>
    </div>
    <nav class="works__navbox">
      <ul class="works__navbox__inner">
        <li class="works__navbox__inner__nav"><span class="works__navbox__inner__nav__text" @click="allSwitch">すべて</span><span><img class="works__navbox__inner__nav__arrow" src="../../assets/img/arrow.svg" alt=""></span></li>
        <li class="works__navbox__inner__nav"><span class="works__navbox__inner__nav__text" @click="firstSwitch">1年</span><span><img class="works__navbox__inner__nav__arrow" src="../../assets/img/arrow.svg" alt=""></span></li>
        <li class="works__navbox__inner__nav" @click="secondSwitch"><span class="works__navbox__inner__nav__text" @click="secondSwitch">2年</span><span><img class="works__navbox__inner__nav__arrow" src="../../assets/img/arrow.svg" alt=""></span></li>
        <li class="works__navbox__inner__nav" @click="thirdSwitch"><span class="works__navbox__inner__nav__text" @click="thirdSwitch">3年</span><span><img class="works__navbox__inner__nav__arrow" src="../../assets/img/arrow.svg" alt=""></span></li>
      </ul>
    </nav>
    <div class="works__warp">
      <transition-group tag="div" name="work">
        <components v-for="work in works" :key="work" :is="work"></components>
      </transition-group>
    </div>
  </section>
</template>

<script>
import WorkFirst from './../work/workFirst.vue'
import WorkSecond from './../work/workSecond.vue'
import WorkThird from './../work/workThird.vue'
export default {
  data(){
    return{
      works:[
          "WorkFirst","WorkSecond","WorkThird",
        
      ]
    }
  },
  // mounted() {
  //   mounted()内はページレンダー後、に読み込まれる。
  //   JavaScriptをここに書ける
  // },
  methods:{
    allSwitch:function(){
       this.works.splice(0)
        this.works.push("WorkFirst","WorkSecond","WorkThird")
       
    },
     firstSwitch:function(){
      this.works.splice(0)
        this.works.push("WorkFirst")
    },
     secondSwitch:function(){
      this.works.splice(0)
        this.works.push("WorkSecond")
    },
     thirdSwitch:function(){
      this.works.splice(0)
      this.works.push("WorkThird")
    },
  },
  components: {
    WorkFirst,
    WorkSecond,
    WorkThird,

  }
}
</script>
<style lang="scss" scoped>
.works{
   padding: 80px 0 0 0;
  &__navbox{
    width: 78%;
    margin: 0 auto;
    border-bottom: 1px solid #E6E6E6;
    &__inner{
       list-style: none;
       display: flex;
       justify-content: space-between;
       width: 60%;
       margin: 0 auto;
       &__nav{
        font-size: 20px;
        color: #707070;
        width: 20%;
        margin-top: 80px;
        text-align: center;
        span{
          display: inline-block;
          width: 100%;
          overflow: hidden;
        }
        &__text{
          cursor: pointer;
          transition: 0.2s;
          &:hover{
            opacity: 0.6;
          }
        }
        &__arrow{
          transform: translateY(-210%);
          transition: 0.2s;
        }
       }
    }
  }
  &__warp{
    width: 78%;
    margin: 0 auto;
  }
}
</style>
