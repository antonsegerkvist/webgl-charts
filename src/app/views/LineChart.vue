<template>
  <div class="line-chart">
    <div class="row">
      <div class="tile xl-6">
        <div ref="line-chart-standard">
        </div>
      </div>
      <div class="tile xl-6">
      </div>
    </div>

    <div class="row">
      <div class="tile xl-6">
      </div>
      <div class="tile xl-6">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { LineChart } from '@/public/webgl-charts';

export default Vue.extend({
  name: 'line-chart',
  data() {
    return {
      scripts: [],
    };
  },
  mounted() {
    this.scripts = [
      this.default(),
    ];
  },
  methods: {
    default() {
      const lineChart = new LineChart({
        element: this.$refs['line-chart-standard'],
      });
      lineChart.init();
      return lineChart;
    },
  },
});
</script>
