<template>
  <div id="" class="ecoloop">
    <DetailsHeader></DetailsHeader>
    <section class="ecoloop__content">
        <div class="ecoloop__content__top">
            <div class="ecoloop__content__top__titlebox titlebox">
                <h1 class="ecoloop__content__top__titlebox_title title"><span>puzzle</span></h1>
            </div>
            <div class="ecoloop__content__top__production">
                <p class="ecoloop__content__top__production__text"><label for="">制作時期</label>2019年10月〜</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作時間</label>40時間</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作</label>個人制作</p>
                <p class="ecoloop__content__top__production__text"><label for="">担当箇所</label>フロントエンド</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用言語</label>HTML、CSS、JavaScript、SASS</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用ソフト</label>XD、Photoshop、Illustrator</p>
            </div>
            <div class="ecoloop__content__top__photo">
                <img src="../../assets/img/puzzle.png" alt="">
            </div>
        </div>
        <section class="ecoloop__content__backWarp">
            <h2 class="ecoloop__content__backWarp__title"><span>制作背景</span></h2>
            <div class="ecoloop__content__backWarp__concepttbox">
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「テーマ」</label>
                    <p>「先輩と交流して、悩みを解決」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「コンセプト」</label>
                    <p>「輪を広げよう」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「キーワード」</label>
                    <p>「つながり」「問題解決」「ピース」</p>
                </div>
            </div>
            <section class="ecoloop__content__backWarp__planning">
                <section class="ecoloop__content__backWarp__planning__category overviewbox">
                    <h3><span>概要</span></h3>
                    <p>
                         学校でわからないことがあっても、先生以外聞く人がいない。資格を取ろうと考えた時、どう勉強したら良いかわからない。そんな人が質問を投稿し、先輩とあって答えてもらう。<br>先輩後輩との交流を増やし質問答えてもらうマッチング方の問題解決サービスです。
                    </p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category problembox">
                    <div class="ecoloop__content__backWarp__planning__category__inner problembox__inner">
                        <h3><span>現状問題</span></h3>
                        <p>
                            ・質問がしたいけど、誰に聞けばいいかわからないし、質問する機会がない。<br>
                            ・先輩が何が得意でどういう技術を持ってるかわからない。
                        </p>
                    </div>
                    <div class="ecoloop__content__backWarp__planning__category__inner problembox__inner">
                        <h3><span>解決案</span></h3>
                        <p>
                            事前に何が得意か登録でき、質問投稿や実際にあって質問できるような、学内のマッチング方問題解決サービスを作る。
                        </p>
                    </div>
                </section>
                <section class="ecoloop__content__backWarp__planning__category purposebox">
                    <div class="ecoloop__content__backWarp__planning__category__inner purposebox__inner">
                        <h3><span>目的</span></h3>
                        <p>
                            ・疑問点の問題解決<br>
                            ・先輩との交流の機会を作る
                        </p>
                    </div>
                    <div class="ecoloop__content__backWarp__planning__category__inner purposebox__inner">
                        <h3><span>メリット</span></h3>
                        <p>
                            ・先輩の得意なことがわかる<br>
                            ・先輩と交流はできる。<br>
                            ・問題が解決する。
                        </p>
                    </div>
                </section>
            </section>
        </section>
    </section>
    <section class="ecoloop__access">
        <ul class="ecoloop__access__navbox">
            <li class="ecoloop__access__navbox__nav">
                <a>
                    <label for="">Web</label>
                    <p>サイトをみる</p>
                </a>
            </li>
            <li class="ecoloop__access__navbox__nav">
                <a href="">
                    <label for="">Mobile</label>
                    <p>サイトを見る</p>
                </a>
            </li>
        </ul>
            <a href=""></a>
            <a href=""></a>
        
    </section>
<Footer></Footer>
  </div>
</template>

<script>
import DetailsHeader from"./detailsHeader"
import Footer from"./../homes/footer"
export default {
  
  components: {
   DetailsHeader,
   Footer
  }
}
</script>

<style lang="scss" scoped>
  .ecoloop{
      padding: 80px 0 0 0 ;
      &__content{
          width: 78%;
          margin: 0 auto;
          &__top{
              display: flex;
              flex-wrap: wrap;
              &__titlebox{
                  margin-bottom: 64px;
              }
              &__production{
                  width: 50%;
                   padding-top: 40px;
                  &__text{
                      color: #A0A0A0;
                      font-size: 18px;
                      margin-bottom: 16px;
                      label{
                          display: inline-block;
                          width: 116px;
                      }
                  }
              }
              &__photo{
                  width: 40%;
                  img{
                      width: 100%;
                  }
                  
              }
          }
          &__backWarp{
              &__title{
                  color: #707070;
                  text-align: center;
                    font-size: 24px;
                    position: relative;
                    width: 60%;
                    margin: 128px auto 40px;
                     &::before{
                    content: "";
                    display: block;
                    width: 28%;
                    height: 1px;
                    background-color: #707070;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
                &::after{
                    content: "";
                    display: block;
                    width: 28%;
                    height: 1px;
                    background-color: #707070;
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
              }
            &__concepttbox{
                text-align: center;
                &__theme{
                    font-size: 22px;
                    color: #A0A0A0;
                    margin-bottom: 16px;
                    label{
                        font-size: 14px;
                    }
                }
            }
            &__planning{
                margin-top: 124px;
                &__category{
                    margin-bottom: 56px;
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    &__inner{
                        width: 45%;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                     h3{
                    text-align: center;
                    font-size: 24px;
                    color: #4D4D4D;
                    margin-bottom: 40px;
                    width: 100%;
                    h4{
                        margin-bottom: 24px;
                        width: 100%;
                        text-align: center;
                    }
                }
                p{
                    font-size: 16px;
                    color: #A0A0A0;
                    display: inline-block;
                    width: auto;
                   
                    
                }
                }
                .problembox{

                }
                .overviewbox{
                    p{
                       
                        display: inline-block;
                        padding: 0 auto;
                        margin: 0 auto;
                    }
                }
            }
          }
      }
    &__access{
        width: 100%;
       height: 128px;
        background-color: rgba($color: #000000, $alpha: 0.7);
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        &__navbox{
            width: 50%;
            display: flex;
            justify-content: center;
            &__nav{
                list-style: none;
                width: 192px;
                height: 64px;
                a{
                    font-size: 16px;
                     text-decoration: none;
                     color: #FFF;
                     text-align: center;
                    label{
                        display: block;
                        width: 100%;
                        text-align: center; 
                    }
                }
            }
        }
    }
  }
</style>
