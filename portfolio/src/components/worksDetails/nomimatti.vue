<template>
  <div id="" class="ecoloop">
    <DetailsHeader></DetailsHeader>
    <section class="ecoloop__content">
        <div class="ecoloop__content__top">
            <div class="ecoloop__content__top__titlebox titlebox">
                <h1 class="ecoloop__content__top__titlebox_title title"><span>nomimatti</span></h1>
            </div>
            <div class="ecoloop__content__top__production">
                <p class="ecoloop__content__top__production__text"><label for="">制作時期</label>2019年10月〜</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作時間</label>40時間</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作</label>個人制作</p>
                <p class="ecoloop__content__top__production__text"><label for="">担当箇所</label>すべて</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用言語</label>HTML、CSS、JavaScript、SASS</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用ソフト</label>XD、Photoshop、Illustrator</p>
            </div>
            <div class="ecoloop__content__top__photo">
                <div></div>
                <!-- <img src="" alt=""> -->
            </div>
        </div>
        <section class="ecoloop__content__backWarp">
            <h2 class="ecoloop__content__backWarp__title"><span>制作背景</span></h2>
            <div class="ecoloop__content__backWarp__concepttbox">
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「テーマ」</label>
                    <p>「小説」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「コンセプト」</label>
                    <p>「文字で読ませるデザイン」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「キーワード」</label>
                    <p>「文字」「シンプル」「わかりやすく」</p>
                </div>
            </div>
            <section class="ecoloop__content__backWarp__planning">
                <section class="ecoloop__content__backWarp__planning__category problembox">
                    <h3><span>現状問題</span></h3>
                    <p>
                        asasdasdasdasdasdasdas<br>
                        asasdasdasdasdasdasdas<br>
                        asasdasdasdasdasdasdas<br>
                        asasdasdasdasdasdasdas<br>
                    </p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category solutionbox">
                    <h3><span>解決案</span></h3>
                    <p>sdasdasdasdasd</p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category purposebox">
                    <h3><span>目的</span></h3>
                    <p>asdasdasd</p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category overviewbox">
                    <h3><span>概要</span></h3>
                    <p>asdasdasd</p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category meritbox">
                    <h3><span>メリット</span></h3>
                    <p>asdasda</p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category profitbox">
                    <h3><span>利益</span></h3>
                    <p>asdasdasdas</p>
                </section>
                <section class="ecoloop__content__backWarp__planning__category leadbox">
                    <h3><span>導線</span></h3>
                    <p>asasdasdasdasd</p>
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
                  width: 50%;
                  div{
                      width: 412px;
                      height: 326px;
                      background-color: red;
                      margin-left: auto;
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
                     h3{
                    text-align: center;
                    font-size: 24px;
                    color: #4D4D4D;
                }
                p{
                    font-size: 16px;
                    color: #A0A0A0;
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
