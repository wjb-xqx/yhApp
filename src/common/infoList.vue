<template>
    <div class="infoList">
        <div class="dt-content" v-for="(item,index) in List" :key="index">
            <div class="text" >
                    <p class="txt">{{item.text}}</p>
                    <div class="dt-project">
                        <span class="jd">{{item.dj}}</span>
                        <span>{{item.number}}条评价</span>
                        <span>{{item.liuL}}评价</span>
                    </div>
            </div>
            <div class="img">
                <img :src="item.Url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"InfoList",
    data(){
        return{
            List:[{
                id:"0001",
                Url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3802969978,402387430&fm=202&mola=new&crop=v1",
                text:"中国家谱博物馆罗湖进-2017年亮相博物罗湖进-",
                dj:"传说典故",
                number:"66",
                liuL:"8888"
            },{
                id:"0002",
                Url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3802969978,402387430&fm=202&mola=new&crop=v1",
                text:"中国家谱博物馆罗湖进-2017年亮相博物罗湖进-",
                dj:"传说典故",
                number:"66",
                liuL:"8888"
            },{
                id:"0003",
                 Url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3802969978,402387430&fm=202&mola=new&crop=v1",
                text:"中国家谱博物馆罗湖进-2017年亮相罗湖进-",
                dj:"传说典故",
                number:"66",
                liuL:"8888"
            },{
                id:"0004",
                Url:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3802969978,402387430&fm=202&mola=new&crop=v1",
                text:"中国家谱博物馆罗湖进-2017年亮相罗湖进-",
                dj:"传说典故",
                number:"66",
                liuL:"8888"
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.dt-content{
    margin-top: .2rem;
    height: 1.8rem;
     display: flex;
     padding: .2rem;
     border-bottom: 1px solid #ccc;
      >.text{
          padding-right: .1rem;
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
      >.img{
          flex:1;
          >img{
              width: 100%;
              height: 100%;
          }
      }
        }
    /deep/element.style{
         transition-duration:0;
    }
</style>

