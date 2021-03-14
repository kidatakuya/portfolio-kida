<template>
  <section id="" class="training conteiner">
     <div class="training__titlebox titlebox">
       <h2 class="training__titlebox__title title">トレーニング</h2>
    </div>
    <div class="training__warp">
      <div class="training__warp__stady">
        <h3 class="training__warp__stady__title">React勉強</h3>
        <a href="https://github.com/kidatakuya/Udemy-React-Redux-training" target="_blank">https://github.com/kidatakuya/Udemy-React-Redux-training</a>
      </div>
      <div class="training__warp__animationStady">
        <h3 class="training__warp__stady__title">アニメーション勉強</h3>
       <ul class="training__warp__animationStady__box">
         <!-- item01 -->
         <li v-for="trainingItem in trainingItems" :key="trainingItem.img" class="training__warp__animationStady__box__item">
           <a v-bind:href="`http://click.ecc.ac.jp/ecc/tkida/portfolio/web/training/${trainingItem.link }`" target="_blank">
           <h4>{{trainingItem.title}}</h4>
           <div class="training__warp__animationStady__box__item__text" v-bind:style="{'background-image':'url(' + trainingItem.img + ')'}">
             <div class="training__warp__animationStady__box__item__text__screen">
               <p>{{trainingItem.text}}</p>
             </div>
           </div>
           </a>
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
      trainingItems:[
        {
          title:"アコーディオンメニュー",
          img:require("../../assets/img/accordion.png"),
          text:"JavaScriptのアコーディオンメニュー",
          link:"accordion"
        },
         {
          title:"クリック切り替え",
          img:require("../../assets/img/click.png"),
          text:"JavaScriptで表示切り替え",
          link:"click"
        },
         {
          title:"ゲーム",
          img:require("../../assets/img/game.png"),
          text:"JavaScriptの練習style操作",
          link:"game"
        },
         {
          title:"ハンバーガーメニュー",
          img:require("../../assets/img/Hamburger-menu.png"),
          text:"JavaScriptとCSSで作成",
          link:"Hamburger-menu"
        },
         {
          title:"ホバーアニメーション01",
          img:require("../../assets/img/hover01.png"),
          text:"navのhoverアニメーション01",
          link:"hover01"
        },
         {
          title:"ホバーアニメーション02",
          img:require("../../assets/img/hover02.png"),
          text:"navのhoverアニメーション02",
          link:"hover02"
        },
         {
          title:"ホバーアニメーション03",
          img:require("../../assets/img/hover03.png"),
          text:"navのhoverアニメーション03",
          link:"hover03"
        },
         {
          title:"inputのホバーアニメーション",
          img:require("../../assets/img/input-hover.png"),
          text:"オシャレなinputのホバーアニメーション",
          link:"input-hover"
        },
         {
          title:"ローディングアニメーション",
          img:require("../../assets/img/loading.png"),
          text:"@keyframesアニメーション",
          link:"loading"
        },
         {
          title:"ページ内リンク",
          img:require("../../assets/img/page-link.png"),
          text:"JavaScriptのページ内リンク",
          link:"page-link"
        },
         {
          title:"ページ移動アニメーション",
          img:require("../../assets/img/page-move.png"),
          text:"JavaScriptでtransform制御、ページ移動",
          link:"page-move"
        },
         {
          title:"桜降るアニメーション",
          img:require("../../assets/img/sakura.png"),
          text:"pugとsassを使った桜降るアニメーション",
          link:"sakura"
        },
         {
          title:"スクロールアニメーション01",
          img:require("../../assets/img/scroll-animetion01.png"),
          text:"スクロールイベント、特定の座標に来たら出てくる",
          link:"scroll-animetion01"
        },
         {
          title:"スクロールアニメーション02",
          img:require("../../assets/img/scroll-animetion02.png"),
          text:"スクロールイベント、要素内の特定の座標に来たらフェードイン、フェードアウトする",
          link:"scroll-animetion02"
        },
         {
          title:"スライドショーアニメーション01",
          img:require("../../assets/img/slide01.png"),
          text:"JavaScriptで要素の生成と消去でスライドショー",
          link:"slide01"
        },
         {
          title:"スライドショーアニメーション02",
          img:require("../../assets/img/slide02.png"),
          text:"JavaScriptで親要素を動かすスライドショー",
          link:"slide02"
        },
         {
          title:"スライドショーアニメーション03",
          img:require("../../assets/img/slide03.png"),
          text:"JavaScriptで要素１つ１つ動かし制御するスライドショー",
          link:"slide03"
        },
        
      ]
    }
  },
   mounted(){
    
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
        margin-bottom: 24px;
         &__title{
          text-align: center;
          font-size: 24px;
        }
        a{
          font-size: 18px;
          color: #a0a0a0;
          transition: 0.3s;
          &:hover{
            color: #3c3c3c;
          }
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
            a{
              text-decoration: none;
            }
            
            h4{
              width: 100%;
              height: 36px;
              font-size: 20px;
              text-align: center;
              color: #a0a0a0;
              
            }
            &__text{
              width: 100%;
              height: 188px;
              overflow: hidden;
              background-size: contain;
              &:hover > div{
                  transform: translateY(0%);
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
                padding: 0 16px;
                
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
