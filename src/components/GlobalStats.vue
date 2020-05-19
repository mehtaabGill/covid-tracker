<template>
  <!-- MAIN GRID WITH 1 COLUMN -->
  <div class="grid grid-cols-1 py-1">
      <!-- WRAPPER CLASS TO SEPARATE EACH STATISTIC -->
      <div class="wrapper py-4">
        <!-- STATS MAIN DIV -->
        <div class="flex mx-auto max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-md font-bold bg-green-100 border-2 border-green-400 text-green-500 content-center shadow-2xl">
            <!-- DIV FOR TEXT -->
            <div class="align-middle mx-auto p-6 m-0">Total Confirmed: {{ numberWithCommas(globalData.totalConfirmed) }}</div>
        </div>
      </div>
      
      <div class="wrapper py-4">
        <div class="flex mx-auto max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-md font-bold bg-yellow-100 border-2 border-yellow-400 text-yellow-500 content-center shadow-2xl">
            <div class="align-middle mx-auto p-6 m-0">Total Recovered: {{ numberWithCommas(globalData.totalRecovered) }}</div>
        </div>
      </div>

      <div class="wrapper py-4">
        <div class="flex mx-auto max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-md font-bold bg-red-100 border-2 border-red-400 text-red-500 content-center shadow-2xl">
            <div class="align-middle mx-auto p-6 m-0">Total Deaths: {{ numberWithCommas(globalData.totalDeaths) }}</div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name:'GlobalStats',
    computed: {
      ...mapState(['globalData'])
    },
    methods: {
      /* RETURNS NUMBER WITH COMMAS FOR LARGER NUMBERS */
      numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
}
</script>