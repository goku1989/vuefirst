<template>
  <div class="hello">
    {{ msg }}   
    {{ info }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!',
      info: 'This is my first vue written by goku'
    }
  }
}
</script>


