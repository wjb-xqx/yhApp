<template>
    <div class="index" >
        <index-header></index-header>
        <nav-list></nav-list>
        <common-address></common-address>
        <index-banner></index-banner>
        <div class="content">
            <index-public></index-public>  
            <index-survey></index-survey>
            <love-money></love-money>
            <index-fund></index-fund>
            <index-list></index-list>
            <info-list></info-list>
           <person-introduce></person-introduce>
        </div>
        <index-footer></index-footer>
    </div>
</template>

<script>
import IndexHeader from "../../common/Header"
import NavList from "../../common/NavList"
import IndexFooter from "../../common/Footer"
import CommonAddress from "../../common/Address"
import IndexBanner from "./components/IndexBanner"
import IndexPublic from "./components/IndexPublic"
import IndexSurvey from "./components/IndexSurvey"
import LoveMoney from "../../common/LoveMoney"
import IndexFund from "./components/IndexFund"
import IndexList from "./components/IndexList"
import infoList from "../../common/infoList"
import PersonIntroduce from "../../common/PersonIntroduce"
// import BScroll from 'better-scroll'
export default {
    name:"index",
    components:{
        IndexHeader,
        NavList,
        CommonAddress,
        IndexBanner,
        IndexPublic,
        IndexSurvey,
        LoveMoney,
        IndexFund,
        IndexList,
        infoList,
        PersonIntroduce,
        IndexFooter
    }
}
</script>

<style>
body{
    /* background-color: #fff; */
}
.content {
    position: absolute;
    top:7.2rem;
    left: 0;
    right: 0;
    bottom: 0rem;
    z-index: -3;
}
</style>

