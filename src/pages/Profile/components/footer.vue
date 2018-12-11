<template>
    <div class="footer">
        <van-icon name="edit" /><input type="text" placeholder="我来说两句">
        <img src="@/assets/images/图层-1352@2x.png" alt="" class="img">
         <div class="r">
             <van-icon name="pending-orders" />
         </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    z-index: 33;
    display: flex;
    >input{
        flex: 1;
        border: .01rem solid #ccc;
         margin: 0 .5rem 0 .1rem;
         border-radius: .4rem;
         font-size: .4rem;
         padding-left: 1rem;
    }
    >.img{
        flex: 0 0 .8rem;
        width: .8rem;
        height: 0.8rem;
        margin-top: .1rem;
        padding-right: .4rem;
    }
    >.r{
       flex: 0 0 .8rem;
        width: .8rem;
        height: 0.8rem;
        /deep/.van-icon{
            font-size: .6rem;
            text-align: center;
            line-height: 1rem;
        }
    }
    /deep/.van-icon-edit{
        position: fixed;
        bottom: .3rem;
        left: .5rem;
        font-size: .5rem;
    }
}
</style>
