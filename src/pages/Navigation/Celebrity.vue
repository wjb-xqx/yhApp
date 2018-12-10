<template>
    <div class="Celebrity">
         <index-header></index-header>
        <nav-list></nav-list>
        <navi-banner></navi-banner>
        <div class="content">
             <celebrity-nav></celebrity-nav>
             <person-introduce></person-introduce>
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
import CelebrityNav from "./components/CelebrityNav"
import LoveDonation from "../../common/LoveDonation"
import PersonIntroduce from "../../common/PersonIntroduce"

export default {
  name:"Celebrity",
    components:{
        IndexHeader,
        NavList,
        NaviBanner,
        CelebrityNav,
       LoveDonation,
      PersonIntroduce,
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
