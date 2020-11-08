<template>
    <div class="cart">
      <Header/>
      <div class="main">
        <div class="cart-title">
          <h3>我的购物车 <span> 共2门课程</span></h3>
          <!-- <button v-on:click = 'getUserInfo'>获取数据</button> -->
          <el-table :data="courseData" style="width:100%">
            <el-table-column type="selection" label="" width="87"></el-table-column>
            <el-table-column prop="cityName" label="所在城市" width="100"></el-table-column>
            <el-table-column prop="goodsCode" label="商品编码" width="100"></el-table-column>
            <el-table-column prop="goodsName" label="商品名称" width="162"></el-table-column>
            <el-table-column prop="description" label="商品描述" width="450"></el-table-column>
            <el-table-column prop="price" label="价格" width="100"></el-table-column>
            <el-table-column label="操作" width="80"></el-table-column>
          </el-table>
        </div>
        <div calss="cart-info"></div>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Header from "./common/Header"
import Footer from "./common/Footer"

export default {
    name: "Cart",
    data(){
      return{
        courseData: []
      }
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo: function(){
        this.$http.get("http://192.168.50.110:9000/v1/goods/goodsInfos")
            .then(res => {
              
              this.courseData = res.data.response;

            })
            .catch(err => {
              alert("Wrong！！");
            })
      }
    },
    components:{Header,Footer}
}

</script>

<style scoped>
.main{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden; /* 解决body元素和标题之间的上下外边距的塌陷问题 */
}
.cart-title h3{
  font-size: 18px;
  color: #666;
  margin: 25px 0;
}
.cart-title h3 span{
  font-size: 12px;
  color: #d0d0d0;
  display: inline-block;
}
</style>