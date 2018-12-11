<template>
    <div class="Navigation clearfix">
        <navi-banner></navi-banner>
        <div class="content">
            <van-tabs v-model="active">
            <van-tab title="家族祠堂">
                <info-list></info-list>
            </van-tab>
            <van-tab title="源流">2</van-tab>
            <van-tab title="序">3</van-tab>
            <van-tab title="宗规族约">4</van-tab>
            <van-tab title="传说典故"> 5</van-tab>
        </van-tabs>
        
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import infoList from "../../common/infoList"

export default {
    name:"Culture",
      data() {
         return {
             active: 0
            };
    },
    components:{
        NaviBanner,
        infoList
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
         font-size: .3rem!important;
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
         /deep/.van-tab--active{
           color:red;
       }
     
</style>

