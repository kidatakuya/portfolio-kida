<template>
  <div id="" class="work">
    <h3 class="work__title">~ puzzle ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/puzzle.png" alt="">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">先輩たちと交流を</h4>
            <p  class="work__content__textWarp__text">
              学校でわからないことがあっても、先生以外聞く人がいない。資格を取ろうと考えた時、どう勉強したら良いかわからない。そんな人が質問を投稿し、先輩とあって答えてもらう。先輩後輩との交流を増やし質問答えてもらうマッチング方の問題解決サービスです。
            </p>
            <p  class="work__content__textWarp__category"><label for="">グループ制作</label><label for="">１年</label><label for="">フロントエンド</label></p>
            <router-link to="/puzzle" class="work__content__textWarp__link link">サイト詳細</router-link>
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
          width: 400px;
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
