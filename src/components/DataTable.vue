<template>
  <!-- MAIN TABLE -->
  <table class="table-fixed shadow-2xl w-screen md:w-3/4">
    <!-- TABLE HEADER -->
    <thead>
      <tr class="bg-gray-300">
        <th class="border-b w-1/12 hide-on-mobile"></th>
        <th class="border-b py-1 font-bold">Country</th>
        <th class="border-b px-4 py-1 font-bold">Total Confirmed</th>
        <th class="border-b px-4 py-1 font-bold hide-on-mobile">Total Deaths</th>
        <th class="border-b px-4 py-1 font-bold hide-on-mobile">Total Recovered</th>
        <th class="border-b px-4 py-1 font-bold">Recovery Percentage</th>
      </tr>
    </thead>
    <!-- TABLE BODY -->
    <tbody>
      <!-- LOOP THROUGH COUNTRIES -->
      <tr v-for="(country, index) in covidData" :key="index" class="bg-gray-100 hover:bg-gray-200 hover:font-bold">
        <!-- ADD FLAG FROM countryflags.io API -->
        <td class="border-b hide-on-mobile"><img :src="'https://www.countryflags.io/' + country.code.toLowerCase() + '/flat/32.png'" :alt="country.name"></td>
        <td class="border-b py-1">{{ country.name }}</td>
        <td class="border-b">{{ numberWithCommas(country.latest_data.confirmed) }}</td>
        <td class="border-b hide-on-mobile">{{ numberWithCommas(country.latest_data.deaths) }}</td>
        <td class="border-b hide-on-mobile">{{ numberWithCommas(country.latest_data.recovered) }}</td>

        <!-- ADD STYLING CLASS DEPENDING ON THE DETERMINED RECOVERY PERCENTAGE -->
        <td class="border-b"
        :class="{
          'text-red-500': calcRecoveryPercentage(country) < 50,
          'text-yellow-500':calcRecoveryPercentage(country) >= 50 && calcRecoveryPercentage(country) < 70,
          'text-green-500':calcRecoveryPercentage(country) >= 70
        }">
        {{ calcRecoveryPercentage(country) || 0 }}%
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'DataTable',
  computed: {
    ...mapState(['covidData']) 
  },
  methods: {
    /* CALCULATES THE RECOVERY PERCENTAGE FOR A GIVEN COUNTRY */
    calcRecoveryPercentage(country) {
      return parseInt((country.latest_data.recovered/country.latest_data.confirmed) * 100);
    },
    /* USES REGEX TO FORMAT THE LARGER NUMBERS WITH COMMAS */
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style scoped>
  /* HIDES .hide-on-mobile WHEN SCREEN WIDTH <= 640PX */
  @media(max-width: 640px) {
    .hide-on-mobile {
      display: none;
    }
  }
</style>