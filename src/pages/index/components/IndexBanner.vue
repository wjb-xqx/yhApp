<template>
    <div class="indexBanner">
        <van-swipe :autoplay="3000" indicator-color="red">
             <van-swipe-item v-for="(item,index) in images" :key="index">
                 <img :src="item.imgUrl" alt="">
             </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:"IndexBanner",
    data() {
    return {
        images:[{
            id:'001',
            imgUrl:'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
        },{
            id:'002',
            imgUrl:'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
        }]
        }
    }
}
</script>

<style lang="less" scoped>
.indexBanner {
    width: 94%;
    margin:0  .2rem;
    height: 4rem;
    background-color: skyblue;
    position: fixed;
    top: 3rem;
    z-index: 1;
    img{
        width: 100%;
        height: 4rem;
    }
}
</style>
