<template>
    <div class="Navigation clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
        <navi-banner></navi-banner>
        <div class="content">
            <vedio-list></vedio-list>
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
import VedioList from "./components/VedioList"

export default {
    name:"Notice",
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
       VedioList,
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
    top:4.1rem;
    left: 0;
    right: 0;
    bottom: 1rem;
    z-index: -3;
}
</style>

