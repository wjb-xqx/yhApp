<template>
    <div class="indexNews clearfix">
        <div class="news-text">
            <h3><span>最新</span>中国家谱博物馆罗湖进-2017年亮相</h3>
        </div>
        <div class="news-content">
            <p>
                法定防守打法发的萨芬萨芬撒十大萨芬撒发的反倒是手法都是是东方时尚发颠倒是非大师傅暗室逢灯法定防守打法发的萨芬萨芬撒十大萨芬撒发的反倒是手法都是是东方时尚发
            </p>
        </div>
        <div class="news-img">
            <div class="item">1</div>
            <div class="item">1</div>
            <div class="item">1</div>
        </div>
        <div class="news-addess">
            <span class="info">个人产业</span>
            <span class="address"> <van-icon name="location" />湖北是武汉市大篷车</span>

        </div>
    </div>
</template>

<script>
export default {
    name:"IndexNews"
}
</script>

<style lang="less" scoped>
.indexNews{
    border-bottom: 1px solid #ccc;
    margin-top: .1rem;
    padding: 0 .2rem .3rem ; 
    .news-text{
        width: 100%;
        height: .42rem;
        >h3{
            font-size: .35rem;
            color:#333;
            position: relative;
            padding-left: .9rem;
            >span{
                width: 0.8rem;
                line-height: .42rem;
                background-color: red;
                font-size: .25rem;
                color:#fff;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: .3rem;
                text-align: center;
            }
        }
    }
    .news-content{
        text-align: left;
        color: #767676;
        font-size: 0.26rem;
        margin: 0.2rem 0 0 0;
        letter-spacing: 0.02rem;
    }
    .news-img{
        display: flex;
        .item {
            flex: 1;
            background-color: red;
            width: 2.3rem;
            height: 1.45rem;
            margin: 0.28rem 0 0.22rem 0.1rem;
        }
    }
    .news-addess{
        position: relative;
        .info{
               width: 1.5rem;
                line-height: .42rem;
                font-size: .25rem;
                color:red;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                text-align: center; 
                border: 1px solid red;
        }
        .address{
            padding-left: 2rem;
            color:#ccc;
            font-size: .3rem;
            line-height: .5rem;
        }
    }
}
</style>

