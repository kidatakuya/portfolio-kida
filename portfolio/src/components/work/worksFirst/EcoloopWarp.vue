<template>
  <div id="" class="work">
    <h3 class="work__title">~ ECOLOOP ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/Ecoloop.png" alt="">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">生ゴミの再利用で綺麗な街づくり</h4>
            <p  class="work__content__textWarp__text">
              今、世界中でゴミの量の多さが問題視されている。それは日本も例外ではありません。日本でも生ゴミの排出量が大きな問題になっている。そのため、日本では生ゴミによるバイオマス、バイオガス発電のプロジェクトに取り組む市や街が存在する。<br>
              ECO LOOPでは、上記のプロジェクトに取り組む市や街をサポートする、街が一体となってエコ活動をしているという意識を持てるようなにするサービスです。
            </p>
            <p  class="work__content__textWarp__category"><label for="">個人制作</label><label for="">１年後期</label></p>
            <router-link to="/ecoloop" class="work__content__textWarp__link">サイト詳細</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
  components: {
   
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
