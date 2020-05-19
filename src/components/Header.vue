<template>
  <div class="main-div w-full">
      <h1 class="text-4xl text-white py-4 mx-auto font-semibold">Covid 19 Statistics</h1>
      <h1 class="font-bold">🌍 Global Statistics 🌍</h1>
      <GlobalStats class="mx-auto"/>
      <h1 class="mx-auto text-gray-900">Developed By: <a href="https://github.com/mehtaabgill" target="blank" class="underline">Mehtaab Gill</a></h1>
  </div>
</template>

<script>
import GlobalStats from '@/components/GlobalStats.vue'
export default {
    name:'Header',
    components: {
      GlobalStats
    }
}
</script>

<style scoped>
  .main-div {
    /*background: #3dccad; linear-gradient(180deg, #3bbfa2 0, #4dffd8 100%);*/
    background: linear-gradient(180deg, #41d3b3 0, #4dffd8 100%);
  }

  @media(max-width: 640px) {
    .main-div {
      height: 75vh;
    }
  }
</style>