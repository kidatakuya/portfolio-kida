<template>
  <section id="" class="training conteiner">
     <div class="training__titlebox titlebox">
       <h2 class="training__titlebox__title title">トレーニング</h2>
    </div>
    <div class="training__warp">
      <div class="training__warp__stady">
        <h3 class="training__warp__stady__title">vue勉強</h3>
        <p></p>
      </div>
      <div class="training__warp__animationStady">
        <h3 class="training__warp__stady__title">アニメーション勉強</h3>
       <ul class="training__warp__animationStady__box">
         <!-- item01 -->
         <li v-for="item in items" :key="item.item" class="training__warp__animationStady__box__item">
           <h4>{{item.item}}アニメーション</h4>
           <div class="training__warp__animationStady__box__item__text">
             <div class="training__warp__animationStady__box__item__text__screen">
               <p>aaaaa</p>
             </div>
           </div>
         </li>
       </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {item:1},
        {item:2},
        {item:3},
        {item:4},
        {item:5},
        {item:6},
        {item:7},
        {item:8},
        {item:9},
        {item:10},
      ]
      
    }
  },
  components: {
   
  }
}
</script>

<style lang="scss" scoped>
  .training{
    margin-top: 160px;
     padding: 80px 0 0 0;
    &__warp{
      width: 78%;
      margin: 40px auto;
      &__stady{
        text-align: center;
         &__title{
          text-align: center;
          font-size: 24px;
        }
      }
      &__animationStady{
        &__box{
          width: 100%;
          padding: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          &__item{
            width: 310px;
            height: 224px;
            box-shadow: 0 3px 6px  rgba(0,0,0,0.16);
            position: relative;
            list-style: none;
            margin-bottom: 40px;
            
            h4{
              width: 100%;
              height: 36px;
              font-size: 20px;
              text-align: center;
            }
            &__text{
              width: 100%;
              height: 188px;
              background: grey;
              overflow: hidden;
               &:hover > div{
                  transform: translateY(0);
                }
              &__screen{
                width: 100%;
                height: 188px;
                background-color: rgba($color: #000000, $alpha: 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-100%);
                transition: 0.2s;
                
                p{
                  font-size: 20px;
                  color: #FFF;
                }

              }
            }
            
          }
        }
      }
    }
  }
</style>
