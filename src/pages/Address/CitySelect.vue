<template>
 <div class="city-select">
    <div class="address">
        <van-icon name="arrow-left" />
        <div>当前地区-湖北省-仙灵石松阳县</div>
    </div>
    <div class="select-city">
         <select v-model="selectedProvince" name="province" class="item">
           <option v-for="(item, index) in provinces"
             v-if="item.level === 1"
             :value="item">
             {{ item.name }}
           </option>
         </select>
         <select v-model="selectedCity" name="city" class="item">
           <option
             v-for="(item, index) in cities"
             :value="item">
               {{ item.name }}
             </option>
           </select>
           <select v-model="selectedBlock" name="block" class="item">
        <option
           v-for="(item, index) in blocks"
           :value="item">
           {{ item.name }}
         </option>
            </select>
    </div>
 </div>
</template>
<script>
/**
*  省 市 区/县城  三联动选择器
*/
import provinces from './provinces.js'
import Vue from 'vue'
export default {
 name: 'CitySelect',
 created() {
   // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
   let beijing = this.provinces.slice(0, 19)
   this.cities = beijing.filter(item => {
     if (item.level === 2) {
       return true
     }
   })
   this.selectedCity = this.cities[0]
   this.blocks = beijing.filter(item => {
     if (item.level === 3) {
       return true
     }
   })
   this.selectedBlock = this.blocks[0]
 },
 watch: {
   selectedProvince(newVal, oldVal) {
     // 港澳台数据只有一级,特殊处理
     if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
       this.cities = [newVal]
       this.blocks = [newVal]
     } else {
       this.cities = this.provinces.filter(item => {
         if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
           return true
         }
       })
     }
     // 此时在渲染DOM,渲染结束之后再选中第一个
     Vue.nextTick(() => {
       this.selectedCity = this.cities[0]
       this.$emit('input', this.info)
     })
   },
   selectedBlock() {
     Vue.nextTick(() => {
       this.$emit('input', this.info)
     })
   },
   selectedCity(newVal) {
     // 选择了一个市,要选择区了 di是城市的代表,sheng
     if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
       this.blocks = [newVal]
       this.cities = [newVal]
     } else {
       this.blocks = this.provinces.filter(item => {
         if (item.level === 3 && item.sheng && item.sheng == newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
           return true
         }
       })
     }
     Vue.nextTick(() => {
       this.selectedBlock = this.blocks[0]
       // 触发与 v-model相关的 input事件
       this.$emit('input', this.info)
     })
   }
 },
 computed: {
   info() {
     return {
       province: this.selectedProvince,
       city: this.selectedCity,
       block: this.selectedBlock
     }
   }
 },
 data() {
     return {
       selectedProvince: provinces[0],
       selectedCity: 0,
       selectedBlock: 0,
       cities: 0,
       provinces,
       blocks: 0
     }
   }
}
</script>

<style lang="less" scoped>
.city-select{
    .address{
        padding: 0 .2rem;
        display: flex;
        margin-top: .5rem;
        /deep/.van-icon{
            font-size: .8rem;
        }
        >div{
            flex: 3;
            font-size: .5rem;
            padding-left: .2rem;
            line-height: .7rem;
        }
    }
    .select-city{
        margin-top: .4rem;
        >.item{
            width: 3rem;
            height: 1rem;
            border:.01rem solid #ccc;
            font-size: .4rem;
        }

    }
}
 .city-select select{
     outline: 0;
 }
</style>

