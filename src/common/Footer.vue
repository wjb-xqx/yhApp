<template>
    <div class="footer">
        <ul class="footer-tab">
            <router-link to="/" class="item">
                <img src="@/assets/images/home.png" alt="">
                <span>首页</span>
            </router-link>
            <router-link class="item" to="/chat">
               <img src="@/assets/images/tab_icon_chat_default@3x.png" alt="">
                <span>聊天</span>
            </router-link>
            <router-link class="item item3" to="/addition">
               <img src="@/assets/images/addition.png" alt="">
            </router-link>
            <router-link class="item" to="/video">
                <img src="@/assets/images/video.png" alt="">
                <span>视频</span>
            </router-link>
             <router-link class="item" to="/personage">
               <img src="@/assets/images/personage.png" alt="">
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.footer{
    z-index: 999;
    width: 100%;
    height: 1rem;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left:0;
    right: 0;
    border-top: 1px solid#DEDDDD;
    overflow: hidden;
    box-sizing:border-box;
    .footer-tab {
        display: flex;
        width: 100%;
         height: 1rem;
    .item{
         box-sizing: border-box;
         position: relative;
        flex: 1;
        line-height: 1rem;
        text-align: center;
        >img{
            width: 0.44rem;
             position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0.1rem;
        }
        >span{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0.3rem;
            color:#DADADA;
        }
    }
    
}
}
.footer .footer-tab .item3 > img[data-v-e258c2fa] {
    width: 0.7rem;
    top: .15rem;
}

</style>

