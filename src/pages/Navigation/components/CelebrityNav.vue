<template>
    <div class="celebrityNav">
         <van-tabs >
             <!-- v-model="active" -->
            <van-tab title="家族长老">
               <person-introduce></person-introduce>
            </van-tab>
            <van-tab title="家族栋梁">
               内容 3
            </van-tab>
            <van-tab title="组织结构">
                 <Organization></Organization>
            </van-tab>
            <van-tab title="族长">
                内容 4
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Organization from '../../JobRank/Organization'
import PersonIntroduce from "../../../common/PersonIntroduce"
export default {
    name:"CelebrityNav",
    data(){
        return{
            
        }
    },
    components:{
        Organization,
        PersonIntroduce
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
