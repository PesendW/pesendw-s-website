<template>
  <div id="hamburger-menu">
    <header id="box-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>全部CSS Demos</el-breadcrumb-item>
        <el-breadcrumb-item>Hamburger Menu</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <div class="phone-box">
      <header id="menu-header">
        <input type="checkbox" id="displayControl">
        <label for="displayControl">
          <div id="menu-icon">
            <span></span>
            <span></span>
          </div>
        </label>
        <i id="title">Hamburger Menu Demo</i>
        <nav id="menu-items">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ES6</li>
            <li>Vue2.x</li>
          </ul>
        </nav>
      </header>
      <article>
        单击左上角menu icon进行菜单的展开/关闭
      </article>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#hamburger-menu {
  header#box-header {
    margin-bottom: 5px;
  }

  .phone-box {
    #menu-header {
      position: relative;
      padding: 0 16px;
      height: 44px;
      background-color: #000;
      i#title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-style: normal;
        color: #fff;
      }

      #displayControl {
        display: none;
      }
      // 展开样式
      #displayControl:checked + label #menu-icon {
        span:nth-child(1) {
          transform: rotate(45deg);
          top: 4px;
          transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
        }
        span:nth-child(2) {
          transform: rotate(-45deg);
          top: -4px;
          transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
        }
      }
      #displayControl:checked ~ nav#menu-items {
        transform: scaleY(1);
        opacity: 1;
      }

      #menu-icon {
        position: relative;
        width: 20px;
        height: 20px;
        top: 16px;
        span {
          position: relative;
          display: block;
          height: 1px;
          background-color: #fff;
          transition: transform .3s ease-in-out, top .3s ease-in-out .3s;
          top: 0;
          &:nth-child(2) {
            margin-top: 7px;
          }
        }
      }

      nav#menu-items {
        position: absolute;
        top: 44px;
        left: 0;
        width: 100%;
        height: 556px;
        background-color: rgba(0, 0, 0, .82);
        transform: scaleY(0);
        transition: transform .3s ease-in-out, opacity .3s ease-in-out .3s;
        transform-origin: 50% 0;
        opacity: 0;
        ul {
          margin-top: 1em;
          li {
            padding: 0 18px;
            color: #fff;
            line-height: 1.5em;
          }
        }
      }
    }

    article {
      padding: 18px;
    }
  }
}
</style>
