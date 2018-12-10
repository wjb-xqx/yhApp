<template>
    <div class="indexcelebrity clearfix">
        <div class="celebrity" v-for="(item,index) in List" :key="index">
            <div class="info">
                 <div class="img">
                     <img :src="item.Url" alt="">
                 </div>
                 <div class="name">
                     <h3>{{item.name}}</h3>
                     <p>{{item.lx}}</p>
                     <span>{{item.number}}万人粉丝关注</span>
                 </div>
                    <div class="guanzhu">+关注
                         <slot></slot>
                    </div>
                </div>
            <div class="text">{{item.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PersonIntroduce",
    data(){
        return{
            List:[{
                id:'0001',
                name:"周星",
                lx:"慈善名人",
                Url:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3926363739,3756538336&fm=58&bpow=806&bpoh=1160",
                number:"12555",
                content:"周星是中国紫衫人员第一人中国慈善家杂周星是中国紫衫人员第一人中国慈善家杂志年度重量人事志年度重量人事."

            },{
                id:'0002',
                name:"王岚",
                lx:"慈善名人",
                Url:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3926363739,3756538336&fm=58&bpow=806&bpoh=1160",
                number:"12555",
                content:"周星是中国紫衫人员第一人中国慈善家杂周星是中国紫衫人员第一人中国慈善家杂志年度重量人事志年度重量人事."

            },{
                id:'0003',
                name:"王岚",
                lx:"慈善名人",
                Url:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3926363739,3756538336&fm=58&bpow=806&bpoh=1160",
                number:"12555",
                content:"周星是中国紫衫人员第一人中国慈善家杂周星是中国紫衫人员第一人中国慈善家杂志年度重量人事志年度重量人事."

            }]
        }
    }
}
</script>

<style lang="less" scoped>
.indexcelebrity{
    
   .celebrity{
        margin-top: .3rem;
         border-bottom: 1px solid #ccc;
         padding: 0 .2rem;
       .info{
         display: flex;
         position: relative;
         >.img{
           padding: 0.01rem;
           width: 1.5rem;
            height: 1.5rem;
           >img{
               width: 100%;
               border-radius: 50%;
           }
         }
         >.name{
           flex: 1;
           padding-left: .1rem;
        >h3{
            line-height: 0.5rem;
            font-size: .4rem;
        }
        >p{
            color:#ccc;
            line-height: 0.7rem;
        }
        >span{
            color:#ccc;
             line-height: 0.5rem;
        }
         }
         .guanzhu{
           position: absolute;
           right: .5rem;
           top: .4rem;
           width: 1.5rem;
           height: 0.6rem;
           border-radius: .4rem;
           border: .01rem solid red;
           text-align: center;
           color:red;
           line-height: .6rem;
         }

        } 
        .text{
         padding: .3rem 0;
         font-size: .3rem;
         line-height: .4rem;
       }
      }
   }
</style>
