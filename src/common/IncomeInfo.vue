<template>
    <div class="noticeInfo clearfix">
        <ul class="info">
            <li class="item" v-for="(item,index) in List" :key="index">
                <div class="info-t">
                    <span>{{item.lx}}</span>
                    <div class="text">{{item.text}}</div>
                </div>
                <div class="pj">
                    <span>{{item.project}}条评论</span>
                    <span>{{item.liul}}浏览量</span>
                    <span>{{item.time}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"NoticeInfo",
    data(){
        return{
            List:[{
                id:'0001',
                lx:"收入明细",
                text:"中国家博物馆罗湖进-2017年亮相",
                project:'30',
                liul:'5555',
                time:'刚刚'

            },{
                id:'0002',
                lx:"收入明细",
                text:"中国家博物馆罗湖进-2017年亮相",
                project:'30',
                liul:'5555',
                time:'刚刚'

            },{
                id:'0003',
                lx:"收入明细",
                text:"中国家博物馆罗湖进-2017年亮相",
                project:'30',
                liul:'5555',
                time:'刚刚'

            },{
                id:'0004',
                lx:"收入明细",
                text:"中国家博物馆罗湖进-2017年亮相",
                project:'30',
                liul:'5555',
                time:'刚刚'

            }]
        }
    }
}
</script>

<style lang="less" scoped>
.noticeInfo{
    height: 5rem;
    .info{
        >.item{
            padding: 0 .2rem;
            margin-top: .3rem;
            border-bottom: .01rem solid #ccc;
            height: 1.6rem;
            >.info-t{
                display: flex;
                line-height: .8rem;
                font-size: .4rem;
                position: relative;
                >span{
                    font-size: .3rem;
                     color:#fff;
                     width: 1.8rem;
                     height: 0.6rem;
                    line-height: .6rem;
                    background-color: red;
                    display: inline-block;
                    text-align: center;
                    border-radius: .2rem;
                    margin-top: .1rem;
                }
                >.text{
                    flex: 1;
                    padding-bottom: .1rem;
                }
            }
            >.pj{
                color: #ccc;
                >span:nth-child(2){
                    padding: 0 .2rem;
                }
            }
        }
    }
}
</style>
