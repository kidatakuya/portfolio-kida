<template>
  <div id="profileDetails">
    <h2 class="profileDetails__subTitle">〜 人生 〜</h2>
    <div class="profileDetails__content">
        <div class="profileDetails__content__textWarp" v-for="profileText in profileTexts" :key="profileText">
            <h3 class="profileDetails__content__textWarp__title">
              <span class="profileDetails__content__textWarp__title__year">{{profileText.year}}年</span>
              <span class="profileDetails__content__textWarp__title__line"></span>
              <span class="profileDetails__content__textWarp__title__text">{{profileText.title}}</span>
              </h3>
            <p class="profileDetails__content__textWarp__mainText">{{profileText.mainText}}</p>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          profileTexts:[
            { 
              year:"1997",
              title:"奈良県にて誕生。",
              mainText:"母の実家で生まれて住所は兵庫県"
            },
            { 
              year:"2004",
              title:"小学校入学。サッカーを始める",
              mainText:"サッカーか水泳のどちらか習えと言われ、サッカーを選んだ。"
            },
            { 
              year:"2010",
              title:"小学校卒業、中学校入学。サッカー部に入る。",
              mainText:"小学校の時に入っていたサッカースクールは小学校までで、中学でサッカー部に入り、中学の学生時代はサッカーにほとんどの時間を費やした。夏は合宿で車で20分もかかる山道を走って登り、冬は雪で氷水のようになっているグラウンドで走っていた。中学時代を振り返ると、修学旅行や体育大会の事より部活で仲間と走り回ったことを思い出す。（消去法で始めたサッカーが好きになっていた）"
            },
            { 
              year:"2013",
              title:"中学校卒業、高校入学。サッカー部に入る。",
              mainText:"正直、工業には興味はなかったが、就職が強いという理由で入学した。高校でもそのままサッカー部へ入部。中学と違い、緩く楽しく部活に取り組んでいた。工業高校では、鋳造、溶接、旋盤での加工など専門的な事を中心に勉強していた。卒業制作ではグループで「セグウェイ」を制作した。（２年の後半に筋トレを友人と始める）"
            },
            { 
              year:"2016",
              title:"工業高校卒業、会社に入社。",
              mainText:"高校卒業後、自社製品の自動車の組み立てに使う工具（インパクトレンチ、オイルパルスレンチ）などパワーツールを作る会社へ入社。機械加工係へ配属され、CNC旋盤を使い、製品の部品を作る仕事についた。"
            },
            { 
              year:"2018",
              title:"会社を辞め、専門学校へ行く事を決める。",
              mainText:"2年ほど働いた頃、「これが自分のしたかった仕事なのか」と、疑問に思い始め、転職を考えるようになる。仕事をしつつ、転職活動を始めたが、自然の現職と同じ業種ばかりに応募していることに気づき、「これでは、問題の解決になっていない」と考え、どうしようかと、悩んでいた所、その時、転職活動に使っていたWEBサイトに興味を持ち、WEBデザイナーという職業目指す。だが、自分はパソコンに苦手意識を持っており、いきなりWEBデザイナーを目指すにはハードルが高かった。そこで、転職ではなく専門学校へ行くことを決めた。両親に反対されたがWEBデザイナーになりたいという、強い意志を示し、専門学校へ入ることを許してもらう。（人生の分岐点）"
            },
            { 
              year:"2019",
              title:"ECCコンピュータ専門学校へ入学。",
              mainText:"専門学校では企画、デザイン、プログラミングの勉強を中心に行っており、自分はタイピングが遅かった事もあり、プログラミングに苦手意識を持っていたので、デザイナーを目指そうと思っていた。プログラミングの面白さに気づき、エンジニアを目指すようになる。（将来的には、デザインもプログラミングも出来るようになりたい。）"
            },
          ]
            
          }
        
        },
    
        components: {
        
        }
    }
</script>

<style lang="scss" scoped>
.fade-enter{
    // 現れる時の最初の状態
    opacity: 0;
  }
  .fade-enter-active{
    // 現れる時のtransitionの状態
    transition: opacity 0.5s;
  }
  .fade-enter-to{
    // 現れる時の最後の状態
     opacity: 1;
  }
  .fade-leave{
    // 消える時の最初の状態
    opacity: 1;
  }
  .fade-leave-active{
    // 消える時とこのtransitionの状態
    transition: opacity 0.5s;
  }
  .fade-leave-to{
    // 消えるときの最後の状態
    opacity: 0;
  }
.profileDetails{
  &__subTitle{
    font-size: 26px;
    text-align: center;
    margin-bottom: 56px;
    color: #A0A0A0;
  }
  &__content{
    font-size: 22px;
    color: #4D4D4D;
    width: 100%;
    &__textWarp{
       padding: 40px 0;
     &__title{
        width: 100%;
        display: flex;
        &__year{
          display: inline-block;
          width: 12%;
        }
        &__line{
           display: inline-block;
          width: 15%;
          position: relative;
          &::before{
            content: "";
            display: block;
            width: 50%;
            height: 1px;
            background-color: #707070;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
          }
        }
        &__text{
          width: 73%;
        }
     }
     &__mainText{
       width: 73%;
       margin: 0 0 0 auto;
       font-size: 16px;
        color: #A0A0A0;
        padding: 16px 0;
     }

    }

  }
}
</style>
