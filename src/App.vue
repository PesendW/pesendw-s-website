<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@font-color: #2c3e50;
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  &:visited {
    color: @font-color;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @font-color;
}
</style>
