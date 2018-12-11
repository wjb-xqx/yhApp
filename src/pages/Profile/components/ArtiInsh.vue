<template>
    <div class="shenpi clearfix">
        <h3>审批流程</h3>
        <ul>
            <li class="item">
                <h3>审查人意见</h3>
                <div class="text">
                    <div class="left">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="right">
                    <span>张顺德</span>
                    <span>【会长】</span>
                    <p>同意帮扶！同意帮扶同意帮扶同意帮扶同意帮扶</p>
                </div>
                </div>
            </li>
            <li class="item">
                <h3>审查人意见</h3>
                <div class="text">
                    <div class="left">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="right">
                    <span>张顺德</span>
                    <span>【会长】</span>
                    <p>同意帮扶！同意帮扶同意帮扶同意帮扶同意帮扶</p>
                </div>
                </div>
            </li>
            <li class="item">
                <h3>审查人意见</h3>
                <div class="text">
                    <div class="left">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="right">
                    <span>张顺德</span>
                    <span>【会长】</span>
                    <p>同意帮扶！同意帮扶同意帮扶同意帮扶同意帮扶</p>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.shenpi{
    >h3{
        line-height: .5rem;
        font-size: .4rem;
        padding: .2rem;
    }
    >ul{
        >.item{
            margin: .4rem;
            height: 2.8rem;
            line-height: .7rem;
            font-size: .4rem;
            border-bottom: .01rem solid #ccc;
            padding: .2rem;
            .text{
                  display: flex;
                >.left{
                flex: 1;
                >.img{
                    width: 1.8rem;
                    height: 1.8rem;
                    background-color: pink;
                    border-radius: 50%;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            >.right{
                flex: 3;
                
            }
            }

        }
    }
}
</style>

