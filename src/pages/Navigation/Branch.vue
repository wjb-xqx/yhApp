<template>
    <div class="Celebrity">
        <navi-banner></navi-banner>
        <div class="content">
             <celebrity-nav></celebrity-nav>
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import CelebrityNav from "./components/CelebrityNav"

export default {
  name:"Celebrity",
    components:{
        NaviBanner,
        CelebrityNav,
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
