<template>
  <header id="header" class="header">
    <nav class="header__warp">
      <h2 class="header__warp__logo nav"><img src="" alt=""></h2>
      <ul class="header__warp__navbox">
        <li class="header__warp__navbox__nav nav">プロフィール</li>
        <li class="header__warp__navbox__nav nav">作品</li>
        <li class="header__warp__navbox__nav nav">トレーニング</li>
        <li class="header__warp__navbox__nav nav">お問い合わせ</li>
      </ul>
    </nav>
  </header>
</template>

<script>


export default {
  
  components: {
   
  }
}
</script>

<style lang="scss" scoped>
  .header{
    font-size: 16px;
    width: 100vw;
    height: 56px;
    background-color: rgba($color: #FFF, $alpha: 0.7);
   position: fixed;
   z-index: 100;
  //  top: -5.6em;
   display: flex;
   align-items: center;
   .nav{
      cursor: pointer;
      transition: 0.2s;
       &:hover{
            opacity: 0.6;
          }
    }
   &__warp{
     width: 100%;
     height: 100%;
     padding: 12px 4em;
    //  border: 1px solid #000;
     display: flex;
     justify-content: space-between;
     &__logo{
       width: 7rem;
       height: 100%;
       background-color: #707070;
     }
     &__navbox{
       display: flex;
       list-style: none;
       &__nav{
        //  font-size: 16px;
        color: #4D4D4D;
        display: inline-block;
         width: 120px;
        //  padding: 0.8em 0;
         display: flex;
         align-items: center;
         justify-content: center;
         line-height: 0;
        
       }
     }
   }
  }
</style>
