<template>
    <div class="AInfo">
        <div class="title">
            <div class="img">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg" alt="">
            </div>
            <div class="info">
                <span>JY124653周星</span>
                <p class="js">粉丝：2456152</p>
                <p class="js">文章：2456152</p>
            </div>
            <div class="right">
                 <p class="lx">千支同源</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"AInfo"
}
</script>

<style lang="less" scoped>
.AInfo{
    position: fixed;
    top: 2rem;
    left: .2rem;
    right: .2rem;
    height: 3rem;
    box-shadow: .02rem .03rem #ccc;
    background-color: #fff;
    z-index: 99;
    padding: .4rem;
    >.title{
        box-sizing: border-box;
        display: flex;
        height: 2.2rem;
        >.img{
            flex:1;
            width: 2.2rem;
            height: 100%;
            background-color: pink;
            border-radius: .2rem;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        >.info{
            padding-left: .5rem;
            flex: 2;
            >span{
                line-height: 1rem;
                font-size: .4rem;
                color: #000;
                font-weight: 900;
            }
            >.js{
                color:#ccc;
                line-height: .5rem;
            }
        }
        .right{
            flex: 1;
            >.lx{
                width: 1.2rem;
                margin-top: .5rem;
                height: 0.7rem;
                background-color: red;
                color:#fff;
                display: inline-block;
                line-height: .7rem;
                text-align: center;
                font-size: .3rem;
                border-radius: .3rem;
            }
        }
    }
}
</style>

