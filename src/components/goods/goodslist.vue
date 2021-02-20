<template>
  <div class="goodslist">
    <Header />
    <Goodslistinfo />
  </div>
</template>

<script>
import Header from "../common/Header";
import Goodslistinfo from "../goods/Goodslistinfo";
export default {
  name: "goodslist",
  data() {
    return {};
  },
  components: {
    Header,
    Goodslistinfo,
  },
};
</script>

<style scoped>
</style>