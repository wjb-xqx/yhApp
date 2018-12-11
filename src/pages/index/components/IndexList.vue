<template>
    <div class="indexList clearfix">
        <ul>
            <div class="item" v-for="(item,index) in list" :key="index">
               <router-link to="/IndustryDynamics" tag="div">
                    <img :src="item.Url" alt="">
                     <p>{{item.desc}}</p>
               </router-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name:"IndexList",
    data(){
        return {
            list:[{
                id:"0001",
                Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族公告"
            },{
                id:"0002",
                Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族动态"
            },{
                id:"0003",
               Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"慈善公益"
            },{
                id:"0004",
               Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族文化"
            },{
                id:"0005",
               Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族产业"
            },{
                id:"0006",
               Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族名人"
            },{
                id:"0007",
                Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族分支"
            },{
                id:"0008",
               Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544366615407&di=42fee4660fc703f5869ae1d111c266cc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8213ed079dfd03738da977e83e.jpg",
                desc:"家族视频"
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.indexList{
    margin: .3rem 0;
    width: 100%;
    height: 3.5rem;
    >ul{
        width: 100%;
        height: 100%;
        .item{
             width:25%;
             height: 50%;
             float: left;
             padding: .3rem;
             box-sizing: border-box;
             img{
                 width: 1rem;
             }
         }
    }
}
</style>
