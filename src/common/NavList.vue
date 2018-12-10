<template>
    <div class="navList clearfix">
        <van-tabs v-model="active">
            <van-tab title="关注"></van-tab>
            <van-tab title="全国张氏"></van-tab>
            <van-tab title="省级张氏"></van-tab>
            <van-tab title="崇阳张氏"></van-tab>
            <van-tab title="标签 1"> </van-tab>
            <van-tab title="标签 2"> </van-tab>
            <van-tab title="标签 3"> </van-tab>
            <van-tab title="标签 4"> </van-tab>
        </van-tabs>
        <van-icon name="wap-nav"  />
    </div>
</template>

<script>
export default {
    name:"NavList",
      data() {
    return {
      active: 0
    };
  }
}
</script>

<style lang="less" scoped>
    .navList{
        position: fixed;
        margin-top: .6rem;
        width: 100%;
        background-color: #D2211B;
        /deep/ .van-tab{
            background-color:#D2211B;
           color:#fff;
           font-size: .35rem;
        }
         /deep/.van-tab--active{
           color:#F19C12;
       }
        /deep/.van-tabs__line{
          background: none;
         }
        /deep/ .van-icon {
            position: absolute;
            right: .2rem;
            top:.4rem;
            z-index: 99;
            color:#fff;
            font-size: .3rem;
        }
         /deep/ .van-hairline--top-bottom::after {
            border: none;
        }
    }
      
</style>

