<template>
<div id="app">
  <router-view/>
</div>


</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
}
</script>

<style>
  /*栅格*/
*{
  margin: 0;
  padding: 0;
  border: 0;
}
 /* 禁用系统默认滚动条*/
html body{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
