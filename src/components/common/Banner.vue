<template>
  <div class="main-body">
    <div class="inner-body">
      <el-row :gutter="10">
        <el-col :span="4">
          <el-menu default-active="0" class="el-menu-vertical-demo">
            <el-submenu
              v-for="item in menuList"
              :key="item.name"
              :index="item.name"
            >
              <template slot="title"
                ><span>{{ item.name }}</span></template
              >
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="10">
          <el-carousel trigger="click" height="480px">
            <el-carousel-item
              v-for="banner in banner_list"
              v-bind:key="banner.id"
            >
              <a :href="banner.link"
                ><img width="100%" :src="banner.img" class="banner_img" alt=""
              /></a>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="4">
          <div><img :src="right_img1" class="right_img" /></div>
          <div><img :src="right_img2" class="right_img" /></div>
          <div><img :src="right_img3" class="right_img" /></div>
        </el-col>
        <el-col :span="4">
          <el-card class="box-card">
            <div class="demo-basic--circle">
              <div class="face_icon">
                <el-avatar :size="40" ></el-avatar>
                <i class="el-icon-user-solid"></i>
                <span class="face_icon_span">Hi! {{nickName}}</span>
                <i class="el-icon-s-tools"> 设置</i>
              </div>
            </div>
            <el-divider></el-divider>
            <div>
              <span class="span_mid_top">一点资讯</span>
              <i class="el-icon-more right"></i>
            </div>
            <div>
              <span class="span_mid_main">倍思 三合一数据线5A/6A...</span>
            </div>
            <div>
              <span class="span_mid_main">趣多多 香脆巧克力味曲奇...</span>
            </div>
            <div>
              <span class="span_mid_main">全套20册小学生作文书大...</span>
            </div>
            <div>
              <span class="span_mid_main">HUAWEI Hilink华为智选A...</span>
            </div>
            <el-divider class="divider_top"></el-divider>
            <div>
              <i class="el-icon-mobile-phone posi"></i>
              <i class="el-icon-s-promotion posi"></i>
              <i class="el-icon-office-building posi"></i>
            </div>
            <div>
              <span class="icon_bottom11">话费</span>
              <span class="icon_bottom12">机票</span>
              <span class="icon_bottom13">酒店</span>
            </div>
            <div>
              <i class="el-icon-film posi"></i>
              <i class="el-icon-toilet-paper posi"></i>
              <i class="el-icon-present posi"></i>
            </div>
            <div>
              <span class="icon_bottom21">电影</span>
              <span class="icon_bottom22">卫浴</span>
              <span class="icon_bottom23">礼品</span>
            </div>
            <div>
              <i class="el-icon-burger posi"></i>
              <i class="el-icon-mic posi"></i>
              <i class="el-icon-bicycle posi"></i>
            </div>
            <div>
              <span class="icon_bottom31">美食</span>
              <span class="icon_bottom32">娱乐</span>
              <span class="icon_bottom33">运动</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/javascript " src="../../js/app.js"></script>
<script>
import axios from "axios";
import { constUrl } from "../../js/url.js";
export default {
  name: "Banner",
  data() {
    return {
      menuList: [],
      userInfo: {},
      nickName: '游客',
      right_img1: require("../../assets/11.jpg"),
      right_img2: require("../../assets/13.jpg"),
      right_img3: require("../../assets/12.jpg"),
      banner_list: [
        { link: "http://www.baidu.com", img: "/static/banner/1.jpg" },
        { link: "http://www.baidu.com", img: "/static/banner/2.jpg" },
        { link: "http://www.baidu.com", img: "/static/banner/3.jpg" },
        { link: "http://www.baidu.com", img: "/static/banner/4.jpg" },
      ],
    };
  },
  created() {
    this.getMenuList();
    this.judgeUserLoginStatus();
  },
  methods: {
    judgeUserLoginStatus() {
      var userCookie = constUrl.getCookie("USERTOKEN");
      if (userCookie != null && userCookie != undefined && userCookie != "") {
      var authorityUrl = constUrl.authorityUrl;
      var url = authorityUrl + "/v1/user/getUserByToken";
        
        axios.defaults.withCredentials = true;
        axios.get(url)
          .then((res) => res.data)
          .then((data) => {
            if (data.code === "200") {
              console.log(data);
              this.nickName = data.data.nickName
            }
          });
        
      }
    },
    getMenuList() {
      var goodsUrl = constUrl.goodsUrl;
      var url = goodsUrl + "goodsCategory/getCategories";

      axios.defaults.withCredentials = true;
      axios.get(url)
        .then((res) => res.data)
        .then((data) => {
          if (data.code === "200") {
            this.menuList = data.data;
          }
        });
    },
   
  },
};
</script>

<style scoped>
.inner-body {
  position: relative;
  top: 10px;
  left: 50px;
}
.main-body {
  position: relative;
  width: 95%;
  background: #f5f5f5;
}
.el-row {
  margin-bottom: 10px;
}
.el-col {
  border-radius: 4px;
}
.el-menu-item {
  height: 35px;
  line-height: 35px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

.banner_img {
  height: 456px;
  width: 590px;
}
.right_img {
  height: 149px;
  width: 210px;
}
.el-icon-user-solid {
  position: relative;
  top: -25px;
  left: 15px;
  font-size: 20px;
  color: #84c0f1;
}
.face_icon_span {
  position: relative;
  top: -25px;
  left: 15px;
}
.el-icon-s-tools {
  position: relative;
  top: -15px;
  left: 120px;
  color: #5d6063;
  font-size: 17px;
}
.el-icon-mobile-phone {
  position: relative;
  top: -45px;
  left: 20px;
  color: #0080ff;
  font-size: 30px;
}
.el-icon-s-promotion {
  position: relative;
  top: -45px;
  left: 45px;
  color: #ff8800;
  font-size: 30px;
}
.el-icon-office-building {
  position: relative;
  top: -45px;
  left: 70px;
  color: #00ff40;
  font-size: 30px;
}
.el-icon-film {
  position: relative;
  left: 20px;
  top: -25px;
  color: #ff1100;
  font-size: 30px;
}
.el-icon-toilet-paper {
  position: relative;
  left: 45px;
  top: -25px;
  color: #1eff00;
  font-size: 30px;
}
.el-icon-present {
  position: relative;
  left: 70px;
  top: -25px;
  color: #0080ff;
  font-size: 30px;
}
.el-icon-burger {
  position: relative;
  left: 20px;
  top: -5px;
  color: #ff8800;
  font-size: 30px;
}
.el-icon-mic {
  position: relative;
  left: 45px;
  top: -5px;
  color: #0080ff;
  font-size: 30px;
}
.el-icon-bicycle {
  position: relative;
  left: 70px;
  top: -5px;
  color: #ff1100;
  font-size: 30px;
}
.icon_bottom11 {
  position: relative;
  top: -40px;
  left: 20px;
  font-size: 15px;
}
.icon_bottom12 {
  position: relative;
  top: -40px;
  left: 45px;
  font-size: 15px;
}
.icon_bottom13 {
  position: relative;
  top: -40px;
  left: 70px;
  font-size: 15px;
}

.icon_bottom21 {
  position: relative;
  top: -20px;
  left: 20px;
  font-size: 15px;
}
.icon_bottom22 {
  position: relative;
  top: -20px;
  left: 45px;
  font-size: 15px;
}
.icon_bottom23 {
  position: relative;
  top: -20px;
  left: 70px;
  font-size: 15px;
}

.icon_bottom31 {
  position: relative;

  left: 20px;
  font-size: 15px;
}
.icon_bottom32 {
  position: relative;

  left: 45px;
  font-size: 15px;
}
.icon_bottom33 {
  position: relative;

  left: 70px;
  font-size: 15px;
}

.box-card {
  position: relative;
  height: 456px;
}

.span_mid_top {
  position: relative;
  top: -20px;
}
.el-icon-more {
  position: relative;
  left: 100px;
  top: -20px;
}
.span_mid_main {
  position: relative;

  top: -10px;
  font-size: 10px;
}
.divider_top {
  position: relative;
  top: -30px;
}
.el-submenu {
  height: 42px;
}
</style>