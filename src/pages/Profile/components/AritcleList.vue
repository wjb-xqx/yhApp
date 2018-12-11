<template>
    <div class="AritcleList">
        <h3>相关推荐</h3>
        <ul>
            <li class="item">
                <div class="left">
                    <h5>家谱的内容要素主要包括什么，都有什么标准</h5>
                    <p>崇阳联谊会官网</p>
                </div>
                <div class="right">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
            </li>
              <li class="item">
                <div class="left">
                    <h5>家谱的内容要素主要包括什么，都有什么标准</h5>
                    <p>崇阳联谊会官网</p>
                </div>
                <div class="right">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
            </li>
              <li class="item">
                <div class="left">
                    <h5>家谱的内容要素主要包括什么，都有什么标准</h5>
                    <p>崇阳联谊会官网</p>
                </div>
                <div class="right">
                    <div class="img">
                        <img src="" alt="">
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
.AritcleList{
    >h3{
        line-height: .5rem;
        font-size: .4rem;
        border-bottom: .01rem solid #ccc;
          padding: .2rem;
    }
    >ul{
        >.item{
            display: flex;
            height: 1.8rem;
             border-bottom: .01rem solid #ccc;
             padding: .2rem;
            .left{
                flex: 3;
                >h5{
                line-height: .6rem;
                font-size: .4rem;
             }
             >p{
                 line-height: .6rem;
             }
            }
            .right{
                flex: 1;
                >.img{
                    width: 1.4rem;
                    height: 1.4rem;
                    background-color: pink;
                    border-radius: 50%;
                    padding: .1rem;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>

