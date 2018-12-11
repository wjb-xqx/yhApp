<template>
    <div class="pinfo">
        <div class="title">
            <div class="img">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg" alt="">
            </div>
            <div class="info">
                <span>于小鱼</span>
                <p class="js">企业家、慈善家</p>
                <p class="lx">千支同源</p>
            </div>
        </div>
        <h3>基本简介</h3>
        <p>俞敏洪，请问我后地板奶酪酥打卡时就我后地板奶酪酥打卡时不会带队吧您稍等会玩我路段获利千万的成本哈售楼处留着看春晚我了U盾那老板娘的蚕丝 </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.pinfo{
    position: fixed;
    top: 2rem;
    left: .2rem;
    right: .2rem;
    height: 5.5rem;
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
                font-size: .5rem;
                color: #000;
                font-weight: 900;
            }
            >.js{
                color:#ccc;
                line-height: .5rem;
            }
            >.lx{
                width: 2rem;
                height: 0.7rem;
                background-color: red;
                color:#fff;
                display: inline-block;
                line-height: .7rem;
                text-align: center;
                font-size: .4rem;
                border-radius: .3rem;
            }
        }
    }
    >h3{
        margin-top: .3rem;
        font-size: .5rem;
        line-height: 1rem;
    }
    >p{
        line-height: .6rem;
        font-size: .3rem;
    }
}
</style>

