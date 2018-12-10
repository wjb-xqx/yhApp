<template>
  <div class="indexFund">
    <div class="dynamic">
        <div class="text">
            <span class="dt-text">家族<span class="dt">动</span>态</span>
            <span class="dt-info">
              2018年11月9日星期五，毛农历十月初二【狗】
           </span>
        </div>
        <div class="dt-content">
            <div class="text">
                    <p class="txt">中国家谱博物馆罗湖进-2017年亮相</p>
                    <div class="dt-project">
                        <span>家族动态</span>
                        <span>30条评价</span>
                        <span>652142评价</span>
                    </div>
            </div>
            <div class="img">
                <img src="@/assets/images/goose.png" alt="">
            </div>
        </div>
    </div>
  </div>
    
</template>

<script>
export default {
    name:"IndexFund"
}
</script>

<style lang="less" scoped>
    .dynamic{
        >.text{
            padding-left: .2rem;
            display: flex;
            line-height: 0.8rem;
            >.dt-text{
                font-size: .4rem;
                padding-right: .2rem;
                >.dt{
                    color:red;
                }
            }
            >.dt-info{
                color:ccc;
                font-size: .25rem;
                line-height: .8rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    .dt-content{
            width: 100%;
            display: flex;
            padding: 0 .2rem;
            border-bottom: 1px solid #ccc;
            >.text{
                flex: 2;
                >.txt{
                    font-size: .32rem;
                    line-height: .5rem;
                }
                >.dt-project{
                    color:#ccc;
                    line-height: 0.8rem;
                    font-size: .2rem;
                    >span:nth-child(1){
                        color:red;
                        width: 1.2rem;
                        height: 0.4rem;
                        line-height: .4rem;
                        border: .01rem solid red;
                        display: inline-block;
                        text-align: center;
                    }
                    >span:nth-child(2){
                        padding-left: .1rem;
                    }
                    >span:nth-child(3){
                        padding-left: .1rem;
                    }
                }
               
            }
            .img{
                padding-right: .2rem;
                flex:1;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>

