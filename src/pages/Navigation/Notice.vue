<template>
    <div class="Navigation clearfix">
        <navi-banner></navi-banner>
        <div class="content">
            <index-public></index-public>
            <no-friendship></no-friendship>
            <notice-info></notice-info>
        </div>
    </div>
</template>

<script>
import NaviBanner from "../../common/NaviBanner"
import IndexPublic from "../../common/IndexPublic"
import NoFriendship from "./components/NoFriendship"
import NoticeInfo from "./components/NoticeInfo"
export default {
    name:"Notice",
      data() {
         return {
             active: 0
            };
    },
    components:{
        NaviBanner,
        IndexPublic,
        NoFriendship,
        NoticeInfo,
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

