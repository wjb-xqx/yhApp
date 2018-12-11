<template>
    <div class="pList">
            <div class="fund-text">
        <div class="text-l">分支后裔</div>
    </div>
    <ul class="fund-persons">
        <li class="item" v-for="(item,index) in List" :key="index">
            <div class="img">
                <img :src="item.Url" alt="">
            </div>
            <p class="name">{{item.name}}</p>
            <p class="money">{{item.money}}元</p>
            <span class="good icon">加关注</span> 
        </li>
    </ul>
    <!-- <div class="shang">
        <img src="@/assets/images/打赏@2x.png" alt="">
    </div> -->
    </div>
</template>

<script>
export default {
     data(){
        return{
            List:[{
                id:'0001',
                Url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=395752099,3903408757&fm=27&gp=0.jpg',
                name:'周星',
                money:'作家。编剧',
            },{
                id:'0002',
                Url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=395752099,3903408757&fm=27&gp=0.jpg',
                name:'张三',
                money:'作家。编剧',
            },{
                id:'0003',
                Url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=395752099,3903408757&fm=27&gp=0.jpg',
                name:'王五',
                money:'作家。编剧',
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.fund-text{
   margin: .2rem;
   display: flex;
   line-height: .5rem;
   .text-l{
       flex: 3;
       color:#000;
       font-size: .3rem;
   }
   .text-r{
            flex: 1;
            color:#ccc;
            font-size: .2rem;
            font-weight: 700;
            text-align: right;
        }
    }
.fund-persons {
    background-color: #ccc;
    margin: 0 .2rem;
    display: flex;
    height: 3.6rem;
    border: .02rem solid #ccc;
    box-shadow: .02rem .02rem #ccc;
    >.item{
        background-color: #fff;
          text-align: center;
         width: 33.23%;
         &:nth-child(2){
             margin: 0 .1rem;
             box-sizing: border-box;
         }
         >.img{
             width: 1rem;
             height: 1rem;
             background-color: pink;
             margin: .4rem auto;
             border-radius: 50%;
             >img{
                 width: 100%;
                 height: 100%;
             }
         }
         >.name{
             font-size: .3rem;
         }
         >.money{
             line-height: .8rem;
             color:#ccc;
         }
         .good{
             display: inline-block;
              color:#ccc;
              width: 1.2rem;
              height: 0.5rem;
              line-height: .5rem;
              text-align: center;
              background-color: red;
              border-radius: .3rem;
         }
         >.icon{
             padding-right: .1rem;
         }
    }
}
// .shang{
//     height: 3rem;
//     display: flex;
   
//     >img{
//         width: 1rem;
//         height: 1rem;
//          margin: 0 auto;
//          margin-top: 1rem;
        
//     }
// }
</style>
