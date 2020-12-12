<template>
  <div class="banner">
      <el-carousel trigger="click" height="506px">
        <el-carousel-item v-for="banner in banner_list" v-bind:key="banner.id">
          <a :href="banner.link"><img width="100%" :src="banner.img" alt=""></a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
  export default {
    name:"Banner",
    data(){
      return {
        banner_list:[
          {link:"http://www.baidu.com",img:"/static/banner/ironman1.jpg"},
          {link:"http://www.baidu.com",img:"/static/banner/ironman2.jpeg"},
          {link:"http://www.baidu.com",img:"/static/banner/ironman3.jpg"},
        ]
      };
    }
  }
</script>

<style >

</style>