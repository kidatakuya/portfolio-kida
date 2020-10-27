<template>
    <header class="header">
        <nav class="header__warp">
            <ul class="header__warp__navbox">
                <li class="header__warp__navbox__nav nav">
                    <router-link to="/">Top戻る</router-link>
                </li>
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
   top: 0;
   z-index: 100;
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
     width: 78%;
     margin: 0 auto;

     &__navbox{
       display: flex;
    //    justify-content: right;
       list-style: none;
       &__nav{
        display: inline-block;
         width: 120px;
         height: 32px;
         display: flex;
         align-items: center;
         justify-content: center;
        margin-left: auto;
         line-height: 0;
         a{
           width: 100%;
           height: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           color: #4D4D4D;
           text-decoration-line: none;
         }
        
       }
     }
   }
  }
</style>
