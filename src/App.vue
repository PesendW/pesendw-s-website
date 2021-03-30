<template>
  <div id="app">
    <router-view />
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

// 手机展示框
.phone-box {
  margin: auto;
  width: 375px;
  height: 600px;
  border: 1px solid #ddd;
}
// 内容展示框
.content-box {
  width: 100%;
  height: 600px;
  border: 1px solid #ddd;
}
// 列表
ul.rounded-list {
  counter-reset: li;
  li {
    position: relative;
    padding-left: 30px;
    margin: 10px 0;
    height: 30px;
    line-height: 30px;
    background-image: radial-gradient(
      circle at 10px 15px,
      transparent 0%,
      transparent 25px,
      #ddd 26px
    );
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      content: counter(li);
      counter-increment: li;
      text-align: center;
      line-height: 30px;
      font-weight: 700;
      background-color: skyblue;
      color: #fff;
      transform: rotate(0deg);
      transition: all 0.3s ease-in-out;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding-left: 12px;
    }
    &:hover {
      background-image: radial-gradient(
        circle at 10px 15px,
        transparent 0%,
        transparent 25px,
        #444 26px
      );
      a {
        color: #fff;
      }
      &::before {
        background-color: deepskyblue;
        transform: rotate(360deg);
      }
    }
  }
}
</style>
