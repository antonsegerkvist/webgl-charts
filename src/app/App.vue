<template>
  <div id="app">
    <header class="sysbar">
      <h1 class="logo">WebGL Charts</h1>
    </header>
    <main class="main">
      <div class="appnav">
        <div class="tree">
          <component-tree :items="menuItems"/>
        </div>
      </div>
      <div class="appbody">
        <div class="appbar">
        </div>
        <div class="appcontent">
          <router-view/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import MenuItems from '@/app/data/menu-items.json';
import Tree from './components/Tree.vue';

export default Vue.extend({
  name: 'App',
  components: {
    'component-tree': Tree,
  },
  data() {
    return {
      menuItems: MenuItems,
    };
  },
});
</script>

<style lang="less">
@import "../public/webgl-charts/style.less";
@import "./assets/style.less";
</style>
