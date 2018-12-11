<template>
    <div class="heep">
        <h3>帮扶详情</h3>
         <div class="item">
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
                    <div class="imgs">
                      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2168427908,4072089613&fm=200&gp=0.jpg" alt="">
                      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2168427908,4072089613&fm=200&gp=0.jpg" alt="">
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .heep{
     >h3{
         padding: .2rem;
         font-size: .5rem;
         line-height: .4rem;
     }
     >.item{
            margin: .4rem;
            height: 5rem;
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
                .imgs{
                    display: flex;
                    >img{
                        width: 3rem;
                        height: 3rem;
                        padding-left: .2rem;
                    }
                }
            }
            }
        }
 }
</style>

