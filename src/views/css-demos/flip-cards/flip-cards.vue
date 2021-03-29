<template>
  <div id="flip-cards">
    <header id="box-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>全部CSS Demos</el-breadcrumb-item>
        <el-breadcrumb-item>Flip Cards</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <div class="content-box">
      <div class="flip-card-item">
        <div class="side cover-side">Hover here to flip</div>
        <div class="side back-side">WOW!<br>HTML</div>
      </div>
      <div class="flip-card-item">
        <div class="side cover-side">Hover here to flip</div>
        <div class="side back-side">WOW!<br>CSS</div>
      </div>
      <div class="flip-card-item">
        <div class="side cover-side">Hover here to flip</div>
        <div class="side back-side">WOW!<br>JavaScript</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#flip-cards {
  header#box-header {
    margin-bottom: 5px;
  }

  .content-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .flip-card-item {
      position: relative;
      width: 300px;
      height: 400px;
      perspective: 1000px;
      .side {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        transition: transform .3s ease-in-out;
        text-align: center;
        font-size: 2rem;
        color: #fff;
        border-radius: .4rem;
        box-shadow: 0 .2rem .5rem rgba(0, 0, 0, .18);
        text-shadow: 0 .15rem .2rem rgba(0, 0, 0, .2);
        &.cover-side {
          background-color: skyblue;
          transform: rotateY(0deg);
        }
        &.back-side {
          background-color: tomato;
          transform: rotateY(-180deg);
        }
      }
      &:hover {
        .cover-side {
          transform: rotateY(180deg);
        }
        .back-side {
          transform: rotateY(0deg);
        }
      }
    }
  }
}
</style>
