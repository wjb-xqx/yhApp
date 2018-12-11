<template>
    <div class="Navigation clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
       <navi-banner></navi-banner>
        <div class="content">
            <love-money></love-money>
            <van-tabs @click="onClick">
                <van-tab title="时间">
                    <csort></csort>
                </van-tab>
                <van-tab title="金额"></van-tab>
            </van-tabs>
            
        </div>
        <love-donation></love-donation>
       <index-footer></index-footer>
    </div>
</template>

<script>
import IndexHeader from "../../common/Header"
import NavList from "../../common/NavList"
import NaviBanner from "../../common/NaviBanner"
import IndexFooter from "../../common/Footer"
import LoveDonation from "../../common/LoveDonation"
import LoveMoney from "../../common/LoveMoney"
import Csort from "./components/Csort"

export default {
    name:"Csperson",
      data() {
         return {
            

            };
    },
    components:{
        IndexHeader,
        NavList,
        NaviBanner,
        LoveDonation,
        LoveMoney,
        Csort,
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
    position: absolute;
    /* overflow: hidden; */
    top:4.1rem;
    left: 0;
    right: 0;
    bottom: 1rem;
    z-index: -3;
    // height: 1500px;
}
/deep/.van-tab{
    flex: 0 0 2rem;
}
</style>

