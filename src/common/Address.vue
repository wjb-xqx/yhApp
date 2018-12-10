<template>
    <div class="address">
        <div class="location">
            <div class="lication-l item">
                <span>选择地区</span>
                <van-icon name="arrow-down" />
            </div>
            <div class="lication-c item">
                <van-icon name="location" />
                <span>江夏区</span>
            </div>
            <div class="lication-r item">关注</div>
        </div>
        <div class="addressInfo">湖北省闫宁市</div>
    </div>
</template>

<script>
export default {
    name:"Address"
}
</script>

<style lang="less" scoped>
.address{
    padding-top: .3rem;
    box-sizing: border-box;
    position: fixed;
    top: 1.3rem;
    left: 0;
    height: 2.5rem;
    background-color:#D2211B;
    width: 100%;
    .location{
        height: 0.5rem;
        line-height: .5rem;
        margin: 0 .2rem;
        .item{
            float: left;
            color:#eee;
        }
        >.lication-r{
            width: 0.9rem;
            float: right;
            border: .01rem solid #eee;
            text-align: center;
            border-radius: .2rem;
        }
        >.lication-c{
            padding-left: 40%;
            transform: translateX(-40%)
        }
    }
    .addressInfo{
            line-height: 0.7rem;
            font-size: .35rem;
            color:#fff;
            text-align: center;
        }
}
</style>
