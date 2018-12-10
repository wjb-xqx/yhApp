<template>
    <div class="Love clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
        <navi-banner></navi-banner>
        <div class="content">
            <love-money></love-money>
            <love-detailed></love-detailed>
            <income-info></income-info>
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
import LoveMoney from "../../common/LoveMoney"
import LoveDetailed from "./components/LoveDetailed"
import IncomeInfo from "../../common/IncomeInfo"
import LoveDonation from "../../common/LoveDonation"
export default {
    name:"Love",
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
        LoveMoney,
        LoveDetailed,
        IncomeInfo,
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
</style>

