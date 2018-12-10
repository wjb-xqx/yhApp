<template>
    <div class="NaviBanner">
        <van-swipe :autoplay="5000" indicator-color="red">
            <van-swipe-item>
                <ul >
                       <router-link tag="li" to="/IndustryDynamics" class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族产业</p>
                    </router-link>
                    <router-link tag="li" to="/Celebrity"  class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族名人</p>
                    </router-link>
                    <router-link tag="li" to="/Branch"  class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>祖先分支</p>
                    </router-link>
                    <router-link tag="li" to="/Vedioes"  class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族视频</p>
                    </router-link>
                 </ul>
            </van-swipe-item>
            <van-swipe-item>
                 <ul >
                    <router-link tag="li" to="/Notice" class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族公告</p>
                    </router-link>
                    <router-link tag="li" to="/IndustryDynamics" class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族动态</p>
                    </router-link>
                    <router-link tag="li" to="/Love" class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>慈善公益</p>
                    </router-link>
                     <router-link tag="li" to="/Culture" class="item">
                        <img src="@/assets/images/family.png" alt="">
                        <p>家族文化</p>
                    </router-link>
                 </ul>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:"NaviBanner"
}
</script>

<style lang="less" scoped>
.NaviBanner{
    position: fixed;
    top: 2rem;
    left: .2rem;
    right: .2rem;
    height: 2rem;
    background-color: #fff;
    border: .01rem solid #ccc;
    box-shadow: .02rem .02rem #ccc;
    /deep/.van-swipe{
        width: 100%;
        height: 100%;
    }
    ul{
        display: flex;
        height: 100%;
        >.item{
           width: 25%;
           text-align: center;
           >img{
               width: 1.2rem;
           } 
        }
    }
    /deep/.van-swipe__indicator{
        width: 0.5rem;
        border-radius: .4rem;
        background-color: #666;
    }
}
</style>
