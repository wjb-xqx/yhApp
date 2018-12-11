<template>
        <div class="zipai">
           <ul>
              <li>
                  <p>郡望</p>
                  <p class="fb">福永振江之</p>
              </li>
              <li>
                 <p>字派</p>
                  <p class="fb"> 福永振江之</p>
              </li>
              <li>
                <p>堂号</p>
                  <p class="fb">福永振江之</p>
              </li>
           </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.zipai{
    margin: .5rem 0;
   height: 1.2rem;
  >ul{
    display: flex;
    text-align: center;
    font-size: .4rem;
    color:#000;
    li{
        flex: 1;
        >.fb{
           font-size: .3rem;
           color:#ccc;
           line-height: .7rem;
        }
    }
  }
    
}
</style>

