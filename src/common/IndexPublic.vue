<template>
    <div class="IndexPublic clearfix">
        <div class="public-t">
            <img src="@/assets/images/z5_r2_c2.png" alt="">
             <span></span>
             <h5>崇阳联谊在某地召开崇阳联谊在某地召开</h5>
        </div>
        <div class="public-text">
            崇阳联谊在某联谊在某崇阳联谊阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联谊在某地召开崇阳联
        </div>
    </div>
</template>

<script>
export default {
    name:"IndexPublic"
}
</script>

<style lang="less" scoped>
.IndexPublic{
     width: 96%;
     margin:0  .2rem;
    // height: 4rem;
    border: .01rem solid #ccc;
    box-shadow: 0.03rem 0.03rem #ccc;
    margin: .1rem;
    .public-t{
        display: flex;
        margin: .2rem;
        >span{
            width: 0.03rem;
            height: 2rem;
            background-color: #ccc;
        }
        >h5{
            font-size: .5rem;
            line-height: .8rem;
            color:#424242;
            padding-left: 0.2rem;
        }
    }
    .public-text{
        font-size: .4rem;
        line-height: .6rem;
        color:#ccc;
        margin: .2rem;
    }
}
</style>
