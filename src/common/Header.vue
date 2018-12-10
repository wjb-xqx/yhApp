<template>
    <div class="header">
        <img src="@/assets/images/logo@2x.png" class="header-logo" alt="">
        <div class="header-input">
            <div class="header-icon iconfont">&#xe62b;</div>
            <input type="text" placeholder="炎黄统谱网" class="input" />
        </div>
    </div>
</template>

<script>
export default {
    name:'IndexHeader'
}
</script>

<style lang="less" scoped>
  .header{
      position: fixed;
      display: flex;
      width: 100%;
      height: .6rem;
      background-color: #D2211B;
      .header-logo{
          width: .6rem;
          height: .6rem;
          padding: 0 .2rem 0 .2rem;
      }
      .header-input{
          flex: 1;
          margin-right: .2rem;
          color:#fff;
          .input {
              width: 100%;
              height: 100%;
               border-radius: .5rem;
             background-color: #DC5450;
             text-align: center;
             font-size:.3rem;
             color:#fff;
          }
          .header-icon{
              position: absolute;
              top: .1rem;
              left: 40%;
              font-size:.4rem;
          }
      }
       input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: white;
      }
  } 
</style>
