<template>
  <div id="" class="work">
    <h3 class="work__title">~ のみもん ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/nomimon.png" alt="">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">ゲームでポイ捨て問題解決</h4>
            <p class="work__content__textWarp__text">
              ドリンク容器のポイ捨てが社会問題になっており、タピオカがSNSでブームになったのを機にさまざまな場所でプラスチック容器のゴミが問題になりました。<br>
              また、ゴミを捨てるにも、容器がゴミ箱に入らない、またはゴミ箱がどこにあるかわからないという問題から、結局ゴミを放置するという結果になっているそんな人達の為にゲームを楽しんでもらいながら容器をゴミ箱に捨ててもらうというサービスを考えました。
            </p>
            <p  class="work__content__textWarp__category"><label for="">個人制作</label><label for="">個人制作</label><label for="">個人制作</label></p>
            <router-link to="/nomimon" class="work__content__textWarp__link">サイト詳細</router-link>
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
            &::before{
              content: "";
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              border: 1px solid #707070;
            }
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
