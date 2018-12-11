<template>
    <div class="artin">
        <div class="left">
            <p>申请帮扶金额</p>
            <p>$50000</p>
        </div>
        <div class="right">
            <p>经办人：周星</p>
            <p>审核通过</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.artin{
    height: 1.5rem;
    display: flex;
    border: .01rem solid #ccc;
    box-shadow: .002rem .003rem #ccc;
    margin: .4rem .2rem;
    padding: .2rem;
    >.left{
        flex: 1;
        line-height: .8rem;
        font-size: .3rem;
        >p{
            &:nth-child(2){
                color:red;
            }
        }
    }
    >.right{
         flex:1;
         line-height: .8rem;
         font-size: .4rem;
    }
}
</style>
