<template>
    <div class="NaviContent clearfix">
        <div class="navi-title">
            <span>最新</span>
            <h3>中国家谱博物馆罗湖进-2017年亮相</h3>
        </div>
        <div class="navi-content">
            市张总会秘书处向市张总会各位历史、各位中组件书处书处向市张总会各位历史、各位中组件
            书处向市张总会各位历史、各位中组件书处向市张总会各位历史、各位中组件
            书处向市张总会各位历史、各位中组件向市张总会各位历史、各位中组件
        </div>
        <ul class="navi-imgs">
            <li class="item">
                <img src="@/assets/images/goose.png" alt="">
            </li>
            <li class="item">
                <img src="@/assets/images/goose.png" alt="">
            </li>
            <li class="item">
                <img src="@/assets/images/goose.png" alt="">
            </li>
        </ul>
        <div class="navi-text">
            <span>个人产业</span>
             <div class="lication-c">
                <van-icon name="location" />
                <span>江夏区</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"NaviContent"
}
</script>

<style lang="less" scoped>
.NaviContent{
    border-bottom: 1px solid #ccc;
    padding: .1rem .2rem;
    .navi-title{
        display: flex;
        line-height: 1rem;
        position: relative;
        >span{
           display: inline-block;
           width: .8rem;
           height: 0.6rem;
           line-height: .6rem;
           color:#fff;
           background-color: red;
           border: .01rem solid red;
           margin-top: .2rem;
           text-align: center;
        }
        >h3{
            font-size: .4rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .navi-content{
        color:#ccc;
        line-height: .4rem;
    }
    .navi-imgs{
        display: flex;
        >.item{
            width: 33.27%;
            &:nth-child(2){
                padding:0  .24rem;
            }
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .navi-text{
        display: flex;
        line-height: 1rem;
        >span{
        display: inline-block;
           width: 1.2rem;
           height: 0.4rem;
           line-height: .4rem;
           color:red;
           border: .01rem solid red;
           margin-top: .35rem;
           text-align: center;
        }
        >.lication-c{
            padding-left: .3rem;
            padding-top: .1rem;
            /deep/.van-icon{
                font-size: .4rem;
              
            }
        }
    }
}
</style>
