<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <router-link v-if="!item.children" class="item" :to="item.url" :style="getPadding">
        {{ item.title }}
      </router-link>
      <span v-else class="item" :style="getPadding">
        {{ item.title }}
      </span>
      <component-tree
        v-if="item.children"
        :items="item.children"
        :level="level + 1"/>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Appnav',
  components: {
    'component-tree': () => import('./Tree'),
  },
  props: {
    items: {
      type: Array,
      default() { return []; },
    },
    level: {
      type: Number,
      default() { return 0; },
    },
  },
  computed: {
    getPadding() {
      return {
        'padding-left': `${this.level * 5 + 20}px`,
      };
    },
  },
});
</script>
