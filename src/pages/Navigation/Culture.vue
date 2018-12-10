<template>
    <div class="Navigation clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
        <navi-banner></navi-banner>
        <div class="content">
            <van-tabs v-model="active">
            <van-tab title="家族祠堂"></van-tab>
            <van-tab title="源流"></van-tab>
            <van-tab title="序"></van-tab>
            <van-tab title="宗规族约"></van-tab>
            <van-tab title="传说典故"> </van-tab>
        </van-tabs>
        <info-list></info-list>
        </div>
        <love-donation></love-donation>
       <index-footer></index-footer>
    </div>
</template>

<script>
import IndexHeader from "../../common/Header"
import NavList from "../../common/NavList"
import IndexFooter from "../../common/Footer"
import NaviBanner from "../../common/NaviBanner"
import LoveDonation from "../../common/LoveDonation"
import infoList from "../../common/infoList"

export default {
    name:"Culture",
      data() {
         return {
             active: 0
            };
    },
    components:{
        IndexHeader,
        NavList,
        NaviBanner,
        LoveDonation,
        infoList,
        IndexFooter
    }
}
</script>

<style lang="less" scoped>
    .navList[data-v-2ecd55b6] {
        height: 2rem;
        padding-top: .3rem
    }
    .content {
        padding: .2rem;
        position: absolute;
        top:4.1rem;
        left: 0;
        right: 0;
        bottom: 1rem;
        z-index: -3;
     }
     /deep/ .van-tab{
        font-size: .35rem;
        }
         /deep/.van-tab--active{
           color:red;
       }
        /deep/.van-tabs__line{
          background: none;
         }
        /deep/ .van-icon {
            position: absolute;
            right: .2rem;
            top:.4rem;
            z-index: 99;
            color:#fff;
            font-size: .3rem;
        }
         /deep/ .van-hairline--top-bottom::after {
            border: none;
        }
        /deep/.van-tabs__wrap--scrollable .van-tab{
            flex: 0;
        }
</style>

