<template>
  <div class="mx-auto py-4">
    <!-- LOOPS THROUGH ERRORS AND CREATES A CARD FOR EACH ONE -->
    <div class="mx-auto bg-red-100 border-2 border-red-400 text-red-500 py-2 rounded-md my-1 max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl" v-for="(error, index) in errors" :key="index">
      {{ error }}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name:'Errors',
    computed: {
      ...mapState(['errors'])
    }
}
</script>