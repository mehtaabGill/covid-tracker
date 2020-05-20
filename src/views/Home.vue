<template>
  <div class="home">
    <Header class="mx-auto"/>
    <Errors class="mx-auto"/>
    <h1 class="mx-auto text-gray-800" v-if="isNarrow()">*please view the site on a laptop or pc for the best view*</h1>
    <DataTable class="mx-auto"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from '@/components/DataTable.vue'
import Header from '@/components/Header.vue'
import Errors from '@/components/Errors.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    DataTable,
    Header,
    Errors,
    Footer
  },
  mounted() {
    this.$store.dispatch('loadData');
  },
  methods: {
    /* CHECKS IF DOCUMENT WIDTH < 640px */
    isNarrow() {
      return document.body.offsetWidth < 640;
    }
  }
}
</script>
