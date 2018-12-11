<template>
    <div class="Love clearfix">
        <navi-banner></navi-banner>
        <div class="content">
            <love-money></love-money>
             <love-list></love-list>
            <love-detailed></love-detailed>
            <income-info></income-info>
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import LoveMoney from "../../common/LoveMoney"
import LoveDetailed from "./components/LoveDetailed"
import LoveList from "./components/LoveList"
import IncomeInfo from "../../common/IncomeInfo"
export default {
    name:"Love",
      data() {
         return {
             active: 0
            };
    },
    components:{
        NaviBanner,
        LoveMoney,
        LoveDetailed,
        LoveList,
        IncomeInfo,
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

