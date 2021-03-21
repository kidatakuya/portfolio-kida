<template>
  <section id="" class="contact conteiner">
    <div class="contact__titlebox titlebox">
      <h2 class="contact__titlebox__title title">お問い合わせ</h2>
    </div>
   
    <div class="contact__warp">
      <p class="contact__warp__text">気軽にご連絡ください</p>
      <p class="contact__warp__text">Gmail</p>
      <p class="contact__warp__address">kida.takuya.1234@gmail.com</p>
      <p class="contact__warp__text">GutHubアカウント</p>
      <a href="https://github.com/kidatakuya" target="_blank" class="contact__warp__address">https://github.com/kidatakuya</a>
      <p class="contact__warp__text">GutHubポートフォリオ</p>
      <a href="https://github.com/kidatakuya/portfolio-kida.github.io/tree/master/portfolio" target="_blank" class="contact__warp__address">https://github.com/kidatakuya/portfolio-kida.github.io/tree/master/portfolio</a>
    </div>
    <div>
      <!-- <h3>今後の参考にしたいのでコメントよろしくお願いします</h3> -->
    </div>
  </section>
</template>

<script>
export default {
  
  components: {
   
  }
}
</script>

<style lang="scss">
.contact{
  &__titlebox__title{
    margin-bottom: 80px;
  }
  padding: 80px 0;
  &__warp{
    width: 78%;
    margin: 0 auto;
    text-align: center;
       a{
         transition: 0.3s;
          &:hover{
          opacity: 0.5;
        }
      }
    &__text{
      font-size: 20px;
      margin-top: 30px;
      color: #A0A0A0;
    }
    &__address{
       font-size: 26px;
        // margin-top: 16px;
        color: #4D4D4D;
    
       
    }
  }
}
</style>
