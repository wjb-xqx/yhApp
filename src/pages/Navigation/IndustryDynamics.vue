<template>
    <div class="Navigation clearfix">
        <navi-banner></navi-banner>
        <div class="content">
             <navi-content></navi-content>
             <info-list></info-list>
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import NaviContent from "./components/NaviContent"
import infoList from "../../common/infoList"
export default {
    name:"IndustryDynamics",
      data() {
         return {
             active: 0
            };
    },
    components:{
        NaviBanner,
        NaviContent,
        infoList,
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

