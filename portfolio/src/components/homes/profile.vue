<template>
  <section id="" class="profile conteiner">
    <div class="profile__titlebox titlebox">
      <h2 class="profile__titlebox__title title">プロフィール</h2>
      <p class="profile__titlebox__subtitle subtitle">〜程良くマッチョのエンジニア〜</p>
    </div>
    <div class="profile__textbox">
      <div class="profile__textbox__innerwarp">
        <div class="profile__textbox__innerwarp__namebox">
          <label for="">氏名</label>
          <p class="profile__textbox__innerwarp__namebox__name">木田匠哉<span class="profile__textbox__innerwarp__namebox__name__E">Kida Takuya</span></p>
        </div>
        <div class="profile__textbox__innerwarp__careerbox">
          <p class="profile__textbox__innerwarp__careerbox__text">ECCコンピュータ専門学校</p>
          <p class="profile__textbox__innerwarp__careerbox__text">マルチメディア研究学科</p>
          <p class="profile__textbox__innerwarp__careerbox__text">WEBデザインコース</p>
          <p class="profile__textbox__innerwarp__careerbox__text">2022年卒業予定</p>
          <p class="profile__textbox__innerwarp__careerbox__text">
            <label>生年月日</label>
            1997年4月25日
          </p>
          <p class="profile__textbox__innerwarp__careerbox__text">
            <label>趣味</label>
            筋トレ、アニメ、漫画
          </p>
        </div>
        <div class="profile__textbox__innerwarp__careerbox__skillbox">
          <p class="profile__textbox__innerwarp__careerbox__skillbox__text"><label for="">使える言語</label>HTML、CSS、JavaScript、Vuejs</p>
          <p class="profile__textbox__innerwarp__careerbox__skillbox__text"><label for="">勉強中</label>React、PHP、Python、Flutter</p>
        </div>
      </div>
      <div class="profile__textbox__photo">
        <img src="../../assets/img/KidaImg.jpeg" alt="">
      </div>
    </div>
    
    <div class="profile__details">
      <p class="profile__details__text">
        私は中学校卒業後、工業高校の機械工学科へ入学し、旋盤を使った機械加工、鋳造、溶接など工業について学びました。高校卒業後は自動車の組み立てに使う工具（インパクレンチなど）を作る会社へ入社し、工具の部品を作る仕事していました。<br>
      入社から２年ほど経過した頃、デジタルでつくるモノづくりへの興味や魅力が膨らみ、転職を考え始めました。その時、転職活動中に使っていたWEBサイトに興味を持ち、インターネット業界の様々な表現や可能性に満ちた世界にとても魅力を感じ、専門学校へ行く決意をし、ECCコンピュータ専門学校のWEBデザインコースへ入学しました。<br>
      専門学校では、WEBのデザインやプログラミングについて学び、現在はフロントエンドを中心に勉強をしています。<br>
      多くの言語、技術触れ、どんなリクエストが来ても即座に対応できるようなエンジニアを目指しています。将来はフロント、バック、インフラ、垣根のないエンジニアのスペシャリストになりたいと考えています。
      </p>
    </div>
    <button class="profile__btn btn" type="button" v-on:click="Switch">{{DetailsBtnText}}</button>
    <div class="profile__lifewarp">
      <transition v-if="test">
        <ProfileDetails></ProfileDetails>
      </transition>
    </div>
  </section>
</template>

<script>
import ProfileDetails from './../profileDetails/profileDetails.vue'
export default {
  data(){
    return{
      test:false,
      DetailsBtnText:'もっと詳しく',
    }
  },
  methods:{
    Switch:function(){
      this.test = ! this.test;
      if(this.test){
        // this.test = false;
       this.DetailsBtnText = '閉じる';

      }else{
        // this.test = true;
       this.DetailsBtnText = 'もっと詳しく';
      }
    },
    // check:()=>{
    //   this.test = !this.test;
    //    DetailsSwitch()
    // }
  },
  components: {
    ProfileDetails,
  }
}
</script>
<style lang="scss" scoped>
  .profile{
    scroll-snap-align: start;
    padding: 80px 0 0 0;
    &__textbox{
      width: 78%;
      margin: 104px auto 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // border: 1px solid #000;
      &__innerwarp{
        width: 38%;
        // border: 1px solid #000;
        &__namebox{
          font-size: 3.2em;
          color: #4D4D4D;
          border-bottom: 1px solid #CBCBCB;
           label{
            font-size: 16px;
            color: #A0A0A0;
            }//label
            &__name{
            &__E{
              font-size: 20px;
              color: #A0A0A0;
              margin-left: 8%;
            }//&__E
          }//&__name
        }// &__namebox
        &__careerbox{
          font-size: 16px;
          color: #4D4D4D;
          margin-top: 32px;
          label{
            margin-right: 16px;
          }//label
          &__text{
            padding: 8px 0 0;
          }//&__text
          &__skillbox{
          font-size: 16px;
          color: #4D4D4D;
          margin-top: 32px;
          label{
              margin-right: 16px;
            }//label
          }
        }//&__careerbox
      }//&__innerwarp
      &__photo{
        width: 440px;
        height: 330px;
        background-color: #E8E8E8;
        img{
          width: 100%;
          transform: translate(-30px,30px);
        }
      }// &__photo
    }//&__textbox
    &__details{
      width: 78%;
      margin: 104px auto 0;
      font-size: 16px;
      line-height: 30px;
      color: #A0A0A0;
    }//&__details
  &__btn{
    width: 119px;
    height: 32px;
     font-size: 16px;
     display: block;
     margin: 72px auto 0;
  }//&__btn
  &__lifewarp{
    width: 78%;
    margin: 64px auto 0;
    transition: 0.3s;
  }
  }// .profile
</style>
