<template>
  <div class="list_body">
    <el-menu :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            active-text-color="#0080ff"
            >
        <el-menu-item index="1">全部商品分类</el-menu-item>
        <el-menu-item index="2">时尚商品</el-menu-item>
        <el-menu-item index="3">美妆馆</el-menu-item>
        <el-menu-item index="4">超市</el-menu-item>
        <el-menu-item index="5">生鲜</el-menu-item>
        <el-menu-item index="6">国际货运</el-menu-item>
        <el-menu-item index="7">闪购</el-menu-item>
    </el-menu>
    <div class="result-span">
        <span slot="title" style="font-size: 15px;">全部结果 > </span>
    </div>
    <div class="result-tag">
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
            <el-divider direction="vertical"></el-divider>
            
            <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
            </el-tag>

            <el-divider></el-divider>
        </div>
    </div>
    <div>
        <el-row>
            <!-- <el-col :span="4" v-for="(project, index)in allprojects" :key="index" :offset="1">
                <el-card :body-style="{ padding: '0px' }"> -->
                    <!-- <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"> -->
                    <!-- <div style="padding: 14px;">
                        <span>{{project.pname}}</span>
                        <div class="card_bottom">
                            <el-button-group class="but_button_group">
                                <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini">对比</el-button>
                                <el-button type="primary" icon="el-icon-star-off" size="mini"> 关注</el-button>
                                <el-button type="primary" icon="el-icon-shopping-cart-full" size="mini">
                                    <span class="cart_span">加入购物车</span>
                                </el-button>
                            </el-button-group>
                        </div>
                    </div>
                </el-card>
            </el-col> -->
        </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Goodslistinfo",
    data(){
      return {
        activeIndex: '1',
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: '' },
          { name: '标签三', type: '' },
          { name: '标签四', type: '' },
          { name: '标签五', type: '' }
        ],
        allprojects:[
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            },
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            },
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            },
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            },
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            },
            {
                pid:'123',
                pname:'pname',
                pcname:'pcname',
                pdatesave:'2018-4-9 11:11:11',
                ppageview:10
            }
        ]
      }
    },
    methods: {
        
      }
  }
</script>


<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom: solid 2px #0080ff;
}
 .result-span {
    position:relative;
    top: 15px;
 }
 .result-tag {
    position:relative;
    top: 25px;
 }
 .image {
     height: 240px;
     width: 240px;
 }
 .card_bottom {
    position:relative;
    top: 5px;
 }

.el-button--primary {
    color: #727272;
    background-color: #e4e4e4;
    border-color: #ececec;
}
.el-button--mini, .el-button--small {
    font-size: 6px;
    border-radius: 3px;
}
.el-button--mini, .el-button--mini.is-round {
    padding: 7px 8px;
}
.cart_span {
    color: #ff0000;
}

</style>