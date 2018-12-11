<template>
    <div class="Navigation clearfix">
       <index-header></index-header>
       <nav-list></nav-list>
         <common-address></common-address>
        <div class="content">
            
        </div>
        <love-donation></love-donation>
       <index-footer></index-footer>
    </div>
</template>

<script>
import IndexHeader from "../../common/Header"
import NavList from "../../common/NavList"
import CommonAddress from "../../common/Address"
import IndexFooter from "../../common/Footer"
import LoveDonation from "../../common/LoveDonation"
export default {
    name:"IndustryDynamics",
      data() {
         return {
            
            };
    },
    components:{
        IndexHeader,
        NavList,
        LoveDonation,
        IndexFooter,
        CommonAddress
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
.address[data-v-b1fb286e]{
        height: 1.5rem;
        top: 1.8rem
}
</style>

