<template>
    <div class="sort clearfix">
        <ul class="clearfix">
            <li class="item">
                <div class="left">
                    <div class="img"></div>
                </div>
                <div class="t">
                    <span>周星</span>
                    <span>12</span>
                    <p>捐助1000元</p>
                </div>
                <div class="right">
                    <span>+关注</span>
                </div>
            </li>
             <li class="item">
                <div class="left">
                    <div class="img"></div>
                </div>
                <div class="t">
                    <span>周星</span>
                    <span>12</span>
                    <p>捐助1000元</p>
                </div>
                <div class="right">
                    <span>+关注</span>
                </div>
            </li>
             <li class="item">
                <div class="left">
                    <div class="img"></div>
                </div>
                <div class="t">
                    <span>周星</span>
                    <span>12</span>
                    <p>捐助1000元</p>
                </div>
                <div class="right">
                    <span>+关注</span>
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
.sort{
    position: absolute;
    top: 1rem;
    bottom: 3;
    left: 0;
    right: 0;
    margin-bottom: 1rem;
    >ul{
        >li{
            display: flex;
            height: 2rem;
            border-bottom: .01rem solid #ccc;
            padding: 0 .2rem;
            >.left{
                flex: 1;
                >.img{
                    margin-top: .2rem;
                     padding: .2rem;
                     box-sizing: border-box;
                    width: 1.2rem;
                    height: 1.2rem;
                    background-color: pink;
                    border-radius: 50%;
                    >img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            >.t{
                flex: 3;
                padding: .3rem;
                line-height: .4rem;
            }
            .right{
                flex: 1;
                >span{
                    width: 1.3rem;
                    height: 0.5rem;
                    border:.01rem solid red;
                    color:red;
                    display: inline-block;
                    line-height: .5rem;
                    margin-top: .3rem;
                    text-align: center;
                    border-radius: .3rem;
                }
            }
        }
    }
}
</style>
