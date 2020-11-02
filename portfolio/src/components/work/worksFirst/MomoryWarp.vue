<template>
  <div id="" class="work">
    <h3 class="work__title">~ momory ~</h3>
    <div class="work__content">
        <div class="work__content__img">
            <img src="../../../assets/img/momory.png" alt="momoryImg">
        </div>
        <div class="work__content__textWarp">
            <h4  class="work__content__textWarp__subTitle">同窓会をもっと楽に</h4>
            <p  class="work__content__textWarp__text">
              このサービスは同窓会を簡単い開催するための、同窓会支援サービスです。<br>
              近年、「同窓会が参加したことがある」という声が減少傾向にあり、原因が「予定が合わない」、「開催されない」、「連絡方法がない」と、言うふうになっています。<br>
              これらの問題を解決し、もっと気楽に集まれるようにサポートすることを目的としています。
            </p>
            <p  class="work__content__textWarp__category"><label for="">個人制作</label><label for="">個人制作</label><label for="">個人制作</label></p>
            <router-link to="/momory" class="work__content__textWarp__link">サイト詳細</router-link>
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
