<template>
    <div class="celebrityNav">
         <van-tabs >
            <van-tab :title="item.title" v-for="(item,index) in List" :key="index">
                
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name:"CelebrityNav",
    data(){
        return{
            List:[
                {
                    id:"0001",
                    title:"家族长老",
                    // content:'111'
                },{
                    id:"0002",
                    title:"家族结构"
                },{
                    id:"0003",
                    title:"家族结构"
                },{
                    id:"0004",
                    title:"家族结构"
                },{
                    id:"0005",
                    title:"族长"
                }
                
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.celebrityNav{
   margin: 0 .2rem;
    /deep/.van-tab--active{
          color:red;
     }
    /deep/.van-tabs__line{
      background: none;
     }
}
</style>
