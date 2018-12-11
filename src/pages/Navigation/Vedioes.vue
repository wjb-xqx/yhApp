<template>
    <div class="Navigation clearfix">
        <navi-banner></navi-banner> 
        <div class="content">
            <vedio-list></vedio-list>
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import VedioList from "./components/VedioList"

export default {
    name:"Notice",
      data() {
         return {
             active: 0
            };
    },
    components:{
        NaviBanner,
       VedioList,
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

