<template>
    <div class="Organization">
        <ul class="list">
            <li class="item" v-for="(item,index) in List" :key="index">
                <div class="item-t">
                    <div class="item-img">
                        <img :src="item.Url" alt="">
                    </div>
                    <div class="item-title">
                        <span>{{item.name}}</span>
                        <span>【{{item.zhiw}}】</span>
                        <p>{{item.lx}}</p>
                        <p>{{item.number}}万粉丝关注</p>
                    </div>
                    <div class="item-index"><span>个人首页</span></div>
                </div>
                <div class="item-text">
                    {{item.text}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name:"Organization",
  data(){
      return{
          List:[{
              id:'0001',
              Url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935031747,3615097944&fm=27&gp=0.jpg",
              name:'周星',
              zhiw:'会长',
              lx:'慈善达人',
              number:'125',
              text:'周星是中国紫衫名人帮第一人，是中国慈善加年度中里欧昂及榜单人物之一'
          },{
              id:'0002',
              Url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935031747,3615097944&fm=27&gp=0.jpg",
              name:'周星',
              zhiw:'会长',
              lx:'慈善达人',
              number:'125',
              text:'周星是中国紫衫名人帮第一人，是中国慈善加年度中里欧昂及榜单人物之一'
          },{
              id:'0003',
              Url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935031747,3615097944&fm=27&gp=0.jpg",
              name:'周星',
              zhiw:'会长',
              lx:'慈善达人',
              number:'125',
              text:'周星是中国紫衫名人帮第一人，是中国慈善加年度中里欧昂及榜单人物之一'
          },{
              id:'0004',
              Url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935031747,3615097944&fm=27&gp=0.jpg",
              name:'周星',
              zhiw:'会长',
              lx:'慈善达人',
              number:'125',
              text:'周星是中国紫衫名人帮第一人，是中国慈善加年度中里欧昂及榜单人物之一'
          }]
      }
  }
    
}
</script>

<style lang="less" scoped>
  .Organization{
      .list{
          height: 100%;
         .item{
             margin-top: .3rem;
             height: 100%;
             border-bottom: .01rem solid #ccc;
             padding: 0 .2rem .3rem;
             >.item-t{
                 display: flex;
                 height: 2rem;
                >.item-img{
                    flex:1;
                    width: 1.4rem;
                    height: 2rem;
                    >img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                } 
               >.item-title{
                 flex: 2;
                 padding: .2rem;
                 padding-left: .1rem;
                    >span:nth-child(1){
                        font-size: .6rem;
                    }
                     >span:nth-child(2){
                        font-size: .4rem;
                        color:blue;
                    }
                    >p{
                        font-size: .35rem;
                        color:#cccc;
                        line-height: .5rem;
                    }
               }
               >.item-index{
                margin-top: .3rem;
                 flex: 1;
                 width: 1.2rem;
                 height: 0.7rem;
                 color:red;
                 border:.01rem solid red;
                 border-radius: .3rem;
                 line-height: .7rem;
                 text-align: center;
                 font-size: .4rem;
               }
             }
             .item-text{
                 line-height: .6rem;
                 color:#979797;
                 font-size: .4rem;
             }
           
         } 
      }
  }
</style>
