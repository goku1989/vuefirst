<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  body,h3,ul,p{
    padding: 0;
    margin:0;
    font-weight: normal;
  }
  body{
    margin-top: 80px;
  }
  a{
    text-decoration: none;
    color: #4a4a4a;
  }
  a:hover{
    color: #000;
  }

  ul{
    list-style: none;
  }

  img{
    width: 100%;
  }

  .header .el-menu li .el-submenu__title{
    height: 26px!important;
    line-height: 26px!important;
  }
  .el-menu--popup{
    min-width: 140px;
  }
</style>