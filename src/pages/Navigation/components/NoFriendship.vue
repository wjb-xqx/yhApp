<template>
    <div class="nofriendship clearfix">
        <div class="friend clearfix">
            <h3>联谊概况</h3>
            <div class="content clearfix">
                <div class="left ">
                    <p>堂：请荷塘</p>
                    <p>石倩祖：太史公号</p>
                    <p>负责人：周星</p>
                    <p>电话：181012457454</p>
                </div>
                <div class="right">
                    <img src="@/assets/images/图层-2440-拷贝@2x.png" alt="">
                </div>
            </div>
            <div class="footer">
                    <img src="@/assets/images/praise.png" alt="">
                    586
                    <img src="@/assets/images/heart.png" alt="">
                    586
            </div>
        </div>
        <div class="introduction clearfix">
            <h3>简介</h3>
            <span>长相十足最早活动㔿设计师炯炯掉的奇偶四等奖最早活师炯炯掉的奇动㔿设计师炯炯掉的奇偶最早活动㔿设计师炯炯掉的奇偶最早活动㔿设计师炯炯掉的奇偶</span>
            <div class="number">
                总谱人数：<span>4525</span>人
            </div>
            <div class="info">
                <div class="left">
                    <p>本族男丁：525人</p>
                    <p>最大年龄：98岁</p>
                </div>
                <div class="right">
                    <p>本族女丁：525人</p>
                    <p>最小年龄：12个月</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"NoFriendship"
}
</script>
<style lang="less" scoped>
.nofriendship{
    .friend{
         margin: .2rem .2rem 0; 
         border: .03rem solid #ccc;
         border-bottom: 1px dashed #ccc;
         border-radius: .3rem;
         padding: 0.3rem .65rem;
         height: 4.5rem;
         >h3{
             line-height: 0.8rem;
             text-align: center;
             font-size: .5rem;
             font-weight: 900;
         }
         >.content{
             display: flex;
             padding: 0 .6rem;
             >.left{
                 flex: 2;
                 >p{
                     line-height: .7rem;
                     font-size: .4rem;
                     color:#B7B7B7;
                 }
             }
             .right{
                 flex: 1;
                 >img{
                     width: 1.8rem;
                 }
             }
         }
         .footer{
             line-height: 6.2rem;
             >img{
                     width: 0.5rem;
                     padding-left: .5rem;
                 }
         }
    }
    .introduction{
        box-shadow: .03rem .03rem #ccc;
        margin: 0 .2rem;
        border: .01rem solid #ccc;
        border-radius: .3rem;
        padding: 0 .3rem;
        color:#B7B7B7;
        >h3{
            line-height: 1.5rem;
             text-align: center;
             font-size: .5rem;
             font-weight: 900;
        }
        >span{
            line-height: .7rem;
            font-size: .4rem;
            
        }
        >.number{
            margin-top: .5rem;
            >span{
                color:red;
                line-height: .8rem;
            }
        }
        >.info{
            display: flex;
            div{
                flex: 1;
                line-height: .6rem;
            }
            .right{
                padding-bottom: .8rem;
            }
        }
    }
}
</style>

