<template>
    <div class="Navigation clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
        <router-view></router-view>
        <love-donation></love-donation>
       <index-footer></index-footer>
    </div>
</template>

<script>
import IndexHeader from "../../common/Header"
import NavList from "../../common/NavList"
import IndexFooter from "../../common/Footer"
import LoveDonation from "../../common/LoveDonation"
export default {
    name:"IndustryDynamics",
      data() {
         return {
             active: 0
            };
    },
    components:{
        IndexHeader,
        NavList,
        LoveDonation,
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

