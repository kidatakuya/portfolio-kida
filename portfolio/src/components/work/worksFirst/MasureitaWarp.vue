<template>
  <div id="" class="work">
    <h3 class="work__title">~ 喫茶マスリータ ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/Masureita.png" alt="マスリータイメージ">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">筋肉 × カフェ</h4>
            <p  class="work__content__textWarp__text">
              この店は新しい形、筋肉のためのカフェです。<br>
              身体作りをしている方々に、より良いサービス、より良い空間、より良い料理提供を行なっています。高カロリーから低カロリー、高タンパクのメニューをたくさん用意しております。皆様のご来店を心よりお待ちしております。
            </p>
            <p  class="work__content__textWarp__category"><label for="">個人制作</label><label for="">１年前期</label></p>
            <router-link @click="scrollBehavior" to="/masureita" class="work__content__textWarp__link">サイト詳細</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
       scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          // return savedPosition
          return { x: 0, y: 0 }
        } else {
          return { x: 0, y: 0 }
        }
      }
    
  }
  
 
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
        // width: 319px;
        // height: 252px;
        // background-color: grey;
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
