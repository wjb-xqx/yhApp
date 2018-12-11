<template>
    <div class="LoveMoney">
         <div class="fund">
            <div class="fund-l">
            <h5>公益基金</h5>
            <p>总金额</p>
            <span>￥888888.58</span>
         </div>
             <div class="fund-r">
            <img src="@/assets/images/solid.png" alt="">
            <div>捐助</div>
          </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name:"LoveMoney",
   
}
</script>

<style lang="less" scoped>
 .fund{
         margin:.2rem;
         height: 2.5rem;
         background: url("../assets/images/cpf.png");
         display: flex;
         padding-left: .34rem;
         box-sizing: border-box;
         color:#fff;
         .fund-r{
             flex: 1;
             height: 100%;
            >img{
                width: 1rem;
                margin-top: .3rem;
            }
            >div{
                padding-left: .2rem;
                padding-top: .2rem;
            }
         }
         .fund-l{
             padding-left: .5rem;
             flex: 3;
             h5{ 
                font-size: .5rem;
                line-height: 1rem;  
            }
            >p{
                font-size: .3rem;
                line-height: .1rem;
            }
            >span{
                font-size: .6rem;
                line-height: 1.2rem;
            }
         }
    }

</style>
