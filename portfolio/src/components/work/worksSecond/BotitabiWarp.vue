<template>
  <div id="" class="work">
    <h3 class="work__title">~ ぼちたび ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/nomimatti.png" alt="nomimatti-img">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">旅行プラン共有</h4>
            <p  class="work__content__textWarp__text">
              このサービスで旅行プランを共有することで、目的地は決まっているが具体的にどこに行くか決まっていない人のコースの参考に使う事ができます。
              このサービスには、地図機能があり、有名では無いが、良いと思った場所に穴場ピンを立てる事ができ、投稿をどこが穴場なのか見ることのできるようになっています。
              旅行すると、バッチがもらえるようになっており、バッチの数でどのくらい旅行しているかわかるようになっています。
            </p>
            <p  class="work__content__textWarp__category"><label for="">グループ制作</label><label for="">２年前期</label></p>
            <router-link to="/botitabi" class="work__content__textWarp__link">サイト詳細</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  

}
</script>

<style lang="scss" scoped>
  .work{
    padding: 80px 0 56px;
     border-bottom: 1px dashed #B5B5B5;
    &__title{
      font-size: 32px;
      color: #707070;
      text-align: center;
    }
    &__content{
      margin-top: 64px;
      display: flex;
      justify-content: space-around;
      &__img{
        img{
          width: 320px;
        }
      }
      &__textWarp{
        width: 50%;
        &__subTitle{
          color: #707070;
          font-size: 24px;
          margin-bottom: 12px;
        }
        &__text{
          font-size: 16px;
          color: #A0A0A0;
          margin-bottom: 20px;
        }
        &__category{
          font-size: 14px;
          color: #A0A0A0;
           display: flex;
            align-items: center;
            margin-bottom: 48px;
          label{
            margin-right: 8px;
            display: flex;
            align-items: center;
             background: rgb(133, 170, 58);
            color: #fff;
            padding: 0 8px;
            // &::before{
            //   content: "";
            //   display: inline-block;
            //   width: 6px;
            //   height: 6px;
            //   border-radius: 50%;
            //   border: 1px solid #707070;
            // }
          }
        }
        &__link{
          font-size: 14px;
          color: #fff;
          background-color: #000;
          padding: 12px 56px;
          text-decoration: none;
        }
      }
    }
  }
</style>
