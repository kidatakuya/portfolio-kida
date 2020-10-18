<template>
  <section id="top" class="top conteiner">
    <div class="top__titlebox">
      <h1 class="top__titlebox__title">ポートフォリオ</h1>
      <p class="top__titlebox__subtitle">〜 機械工学からWEBエンジニアを目指す男 〜</p>
    </div>
     <div class="top__scroll-box">
        <p class="top__scroll-box__item"></p> 
        <p class="top__scroll-box__text">scroll</p>
      </div>
  </section>
</template>

<script>


export default {
  components: {
   
   
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &__titlebox{
      text-align: center;
      &__title{
        font-size: 40px;
        color: #4D4D4D;
      }
     &__subtitle{
       color: #A0A0A0;
       font-size: 32px;
       margin-top: 10px;
     }
    }
    &__scroll-box{
      position: absolute;
      bottom: 5%;
      text-align: center;
      width: 64px;
      height: 64px;
      // border: solid 1px #000;
      &__item{
        width: 24px;
        height: 40px;
        border: 1px #707070 solid;
        border-radius: 2.4em;
        margin: 0 auto;
        position: relative;
        &::before{
          content: "";
          opacity: 0;
          display: block;
         width: 16px;
          height: 16px;
          border: 1px #707070 solid;
          border-radius: 16px;
          position: absolute;
          top: 2px;
          right: 0;
          left: 0;
          margin: 0 auto;
          animation: scrollAnimation infinite 1.4s;
        }
      }
      &__text{
        font-size: 14px;
      }
    }
  }
  @keyframes scrollAnimation{
    0%{
      opacity: 0;
      transform: translateY(0);
    }
    40%{
      opacity: 1;
    }
    60%{
      opacity: 1;
    }
    100%{
       transform: translateY(18px);
       opacity: 0;
    }
  }

</style>
