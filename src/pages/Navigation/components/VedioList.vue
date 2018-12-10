<template>
    <div class="vedioList clearfix">
        <ul class="list clearfix">
            <li class="item" v-for="(item,index) in List" :key="index">
                <h3>{{item.title}}</h3>
                <div class="img">
                    <img :src="item.Url" alt="">
                </div>
                <div class="footer">
                    <span>视频</span>
                    <span>{{item.number}}条评论</span>
                    <span>{{item.vedio}}次播放</span>
                    <span>{{item.time}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'VedioList',
    data(){
        return{
            List:[{
                id:'0001',
                title:'中国家谱博物馆罗湖进-2017年亮相',
                Url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3534289497,3677101726&fm=27&gp=0.jpg',
                number:'30',
                vedio:'555',
                time:'2018-10-11'
            },{
                id:'0001',
                title:'中国家谱博物馆罗湖进-2017年亮相',
                Url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg',
                number:'30',
                vedio:'555',
                time:'2018-10-11'
            },{
                id:'0001',
                title:'中国家谱博物馆罗湖进-2017年亮相',
                Url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3534289497,3677101726&fm=27&gp=0.jpg',
                number:'30',
                vedio:'555',
                time:'2018-10-11'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.vedioList{
    margin-top: .4rem;
    >.list{
        >.item {
            border-bottom: .01rem solid #ccc;
             padding: 0 .2rem;
             margin-top: .3rem;
            >h3{
                line-height: 1rem;
                font-size: .5rem;
            }
            >.img{
                height: 3.6rem;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .footer{
                display: flex;
                margin-top: .2rem;
                margin-bottom: .2rem;
                font-size: .3rem;
                >span{
                    padding-left: .2rem;
                    line-height: .4rem;
                    color:#ccc;
                    &:nth-child(1){
                        width: 0.9rem;
                        height: 0.4rem;
                        border: .01rem solid blue;
                        color:blue;
                        display: inline-block;
                        line-height: .4rem;
                    }
                }
            }
        }
    }
}
</style>
