<template>
    <div class="profile">
       <pheader></pheader>
       <PInfo></PInfo>
       <div class="container">
           <Pzipai></Pzipai>
           <PList></PList>
           <com-shang></com-shang>
           <Pyan></Pyan>
           <pfooter></pfooter>
       </div>
    </div>
</template>

<script>
import Pheader from './components/header'
import PInfo from './components/PInfo'
import Pzipai from './components/Pzi'
import PList from './components/PList'
import ComShang from './components/ComShang'
import Pyan from './components/Pyan'
import Pfooter from './components/footer'
export default {
    name:"Profile",
    components:{
        Pheader,
        PInfo,
        Pzipai,
        ComShang,
        PList,
        Pyan,
        Pfooter
    }
}
</script>

<style lang="less" scoped>
.container{
    position: absolute;
    top: 8.4rem;
    bottom: 1rem;
    // background-color: #000;
    left: 0;
    right: 0;
}
</style>
