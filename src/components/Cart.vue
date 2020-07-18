<template>
    <div class="cart">
      <Header/>
      <div class="main">
        <div class="cart-title">
          <h3>我的购物车 <span> 共2门课程</span></h3>
          <el-table :data="courseData" style="width:100%">
            <el-table-column type="selection" label="" width="87"></el-table-column>
            <el-table-column prop="title" label="课程" width="540"></el-table-column>
            <el-table-column prop="expire" label="有效期" width="216"></el-table-column>
            <el-table-column prop="price" label="单价" width="162"></el-table-column>
            <el-table-column label="操作" width="162"></el-table-column>
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
        courseData:[
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
          {title:"课程标题一",expire:"2016",price:"12.00"},
        ]
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