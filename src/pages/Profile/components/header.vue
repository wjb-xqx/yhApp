<template>
     <div class="herader">
           <div class="back">
              <van-icon name="arrow-left" />
              <span class="title">人物介绍</span>
               <van-icon name="pending-orders" />
           </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.herader{
    width: 100%;
    position: fixed;
    height: 5rem;
    z-index: 55;
    background-color: #D2211B;
    .back{
         display: flex;
        padding: 0.2rem;
        height: 1.5rem;
        font-size: .6rem;
        color:#fff;
        /deep/.van-icon-arrow-left{
            float: left;
        }
        >.title{
           flex: 1;
           text-align: center;

        }
        /deep/.van-icon-pending-orders{
            float: right;
        }
    }
}
</style>