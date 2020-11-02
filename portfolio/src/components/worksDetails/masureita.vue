<template>
  <div id="" class="ecoloop">
    <DetailsHeader></DetailsHeader>
    <section class="ecoloop__content">
        <div class="ecoloop__content__top">
            <div class="ecoloop__content__top__titlebox titlebox">
                <h1 class="ecoloop__content__top__titlebox_title title"><span>喫茶マスリータ</span></h1>
            </div>
            <div class="ecoloop__content__top__production">
                <p class="ecoloop__content__top__production__text"><label for="">制作時期</label>2019年4月〜</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作時間</label>40時間</p>
                <p class="ecoloop__content__top__production__text"><label for="">制作</label>個人制作</p>
                <p class="ecoloop__content__top__production__text"><label for="">担当箇所</label>すべて</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用言語</label>HTML、CSS</p>
                <p class="ecoloop__content__top__production__text"><label for="">使用ソフト</label>Photoshop、Illustrator</p>
            </div>
            <div class="ecoloop__content__top__photo">
                <img src="../../assets/img/Masureita.png" alt="">
            </div>
        </div>
        <section class="ecoloop__content__backWarp">
            <h2 class="ecoloop__content__backWarp__title"><span>制作背景</span></h2>
            <div class="ecoloop__content__backWarp__concepttbox">
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「テーマ」</label>
                    <p>「カフェ×筋肉」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「コンセプト」</label>
                    <p>「成長の手助け」</p>
                </div>
                <div class="ecoloop__content__backWarp__concepttbox__theme">
                    <label for="">「キーワード」</label>
                    <p>「トレーニング後」「回復」「タンパク質」</p>
                </div>
            </div>
            <section class="ecoloop__content__backWarp__planning">
                <section class="ecoloop__content__backWarp__planning__category overviewbox">
                    <h3><span>概要</span></h3>
                    <p>
                        この作品は、学校入学後の最初の作品で、「カフェ×何か」をテーマに制作したWebサイトです。<br>
                        喫茶マスリータ は、普通の喫茶店と違い筋肉作りをしている人、ダイエットをしている人の手助けになるような低脂肪高タンパクの食事をはじめ、プロテインや、基礎代謝を上げてくれるメニューまで揃っています。
                        サービスはトレーニングで書いた汗を流すための温泉や、ボディービルやフィジークの大会情報などを教えてくれたりします。<br>
                        内装はトレーニング後にぴったりの、心身ともに落ち着けるような落ち着いた空間になっています。
                    </p>
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
                &:last-child{
                    margin-bottom: 120px;
                }
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
