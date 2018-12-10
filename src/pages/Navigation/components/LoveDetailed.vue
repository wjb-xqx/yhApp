<template>
    <div class="loveDetail clearfix">
        <h5 class="title">交易明细</h5>
        <ul class="info" v-for="(item,index) in List" :key="index">
            <li class="info-item">
                <div class="time">
                    <span>{{item.data}}</span>
                    <p>{{item.nian}}</p>
                </div>
                <div class="effect">
                    <span></span>
                    {{item.effect}}
                </div>
                <div class="price">+{{item.price}}</div>
            </li>
        </ul>
        <div class="pay">
            <div class="title">
                <span>支出明细</span>
                <div class="text">中国家谱博物馆罗湖进-2017年亮相</div>
            </div>
            <p>家谱是拉萨大海刘德华你的就拉上看到汉武帝拉萨大海刘德华你的就拉上看到汉拉萨大海刘德华你的就拉上看到汉拉萨大海刘德华你的就拉上看到汉拉萨大海刘德华你的就拉上看到汉</p>
            <div class="footer">
                <span>30条评价</span>
                <span>624254浏览</span>
                <span>刚刚</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"LoveDetailed",
    data(){
        return{
            List:[{
                id:'0001',
                data:'10.1',
                nian:'2018',
                effect:'家族组学使用',
                price:'1500'
            },{
                id:'0002',
                data:'10.1',
                nian:'2018',
                effect:'家族组学使用',
                price:'1500'
            },{
                id:'0003',
                data:'10.1',
                nian:'2018',
                effect:'家族组学使用',
                price:'1500'
            },{
                id:'0004',
                data:'10.1',
                nian:'2018',
                effect:'家族组学使用',
                price:'1500'
            },{
                id:'0005',
                data:'10.1',
                nian:'2018',
                effect:'家族组学使用',
                price:'1500'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.loveDetail{
    >.title{
        line-height: .8rem;
        font-size: .5rem;
         padding: .2rem;
    }
    >.info{
        margin-top: .3rem;
        >.info-item{
            border-bottom: 1px solid #ccc;
            display: flex;
            height: 1.2rem;
            font-size: .4rem;
             padding: 0 .2rem;
            >.time{
                flex: 1;
                line-height: .5rem;
                >p{
                    color:#ccc;
                }
            }
            >.effect{
                >span{
                    display: inline-block;
                    width: 0.2rem;
                    height: 0.2rem;
                    background-color: red;
                    border-radius: 50%;
                }
            }
            >.price{
                flex: 1;
                color:red;
               text-align: right;
            }
        }
        
    }
}
.pay{
    margin-top: .5rem;
    height: 4rem;
    border-bottom: 1px solid #ccc;
    padding: 0 .2rem;
    >.title{
        display: flex;
        >span{
            width: 1.5rem;
            height: 0.6rem;
            background-color: red;
            color: #fff;
            border-radius: .2rem;
            text-align: center;
            line-height: .6rem;
        }
        >.text{
            font-size: .5rem;
            line-height: .6rem;
            padding: .1rem;
        }
    }
    >p{
        font-size: .4rem;
        line-height: .6rem;
        color:#333;
    }
    .footer{
        color:#ccc;
        line-height: .8rem;
        >span:nth-child(2){
            padding: 0 .1rem;
        }
    }
}
</style>
