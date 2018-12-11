<template>
    <div class="ArticleIndex">
         <pheader></pheader>
         <article-info></article-info>
         <div class="container">
           <ariticlie-wen></ariticlie-wen>  

            <art-in></art-in>
            <ArtiInsh></ArtiInsh>
            <arti-heep></arti-heep>

           <com-shang></com-shang>
           <aritcle-list></aritcle-list>
           <pyan></pyan>
           <pfooter></pfooter>
         </div>
    </div> 
</template>

<script>
import Pheader from './components/header'
import ArticleInfo from './components/ArticleInfo'
import AriticlieWen from './components/AriticlieWen'
import ComShang from './components/ComShang'
import AritcleList from './components/AritcleList'
import Pyan from './components/Pyan'
import Pfooter from './components/footer'
import ArtIn from './components/ArtIn'
import ArtiInsh from './components/ArtiInsh'
import ArtiHeep from './components/ArtiHeep'


export default {
    name:"ArticleIndex",
    components:{
        Pheader,
        ArticleInfo,
        AriticlieWen,
        ComShang,
        AritcleList,
        Pyan,
        Pfooter,
        ArtIn,
        ArtiInsh,
        ArtiHeep
    }
}
</script>

<style lang="less" scoped>
.container{
    position: absolute;
    top: 6rem;
    bottom: 1rem;
    // background-color: #000;
    left: 0;
    right: 0;
    .liuy {
        margin-top: .5rem;
    }
}
</style>