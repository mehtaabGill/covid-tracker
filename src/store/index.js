import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covidData: {},
    errors:[],
    globalData: {totalConfirmed:0, totalRecovered:0, totalDeaths:0}
  },
  mutations: {
    SET_DATA(state, data) {
      state.covidData = data;
    },
    ADD_ERROR(state, error) {
      state.errors.push(error);
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
    SET_GLOBAL_DATA(state, {totalConfirmed, totalRecovered, totalDeaths}) {
      state.globalData.totalConfirmed = totalConfirmed;
      state.globalData.totalRecovered = totalRecovered;
      state.globalData.totalDeaths = totalDeaths;
    }
  },
  actions: {
    //LOADS DATA FROM corona-api.com AND SORTS THE ARRAY
    async loadData() {
      this.dispatch('clearErrors');
      
      try {
        let response = await axios.get('https://corona-api.com/countries');

        let dataArray = response.data.data.sort((countryA, countryB) => {
          const A = countryA.name.toUpperCase();
          const B = countryB.name.toUpperCase();
          
          if (A > B) return 1;
          else if (A < B) return -1;
          else return 0;
        });

        let totalConfirmed = 0, totalRecovered = 0, totalDeaths = 0;
        
        //CALCULATE GLOBAL TOTALS
        dataArray.forEach(country => {
          totalConfirmed = totalConfirmed + country.latest_data.confirmed;
          totalRecovered = totalRecovered + country.latest_data.recovered;
          totalDeaths = totalDeaths + country.latest_data.deaths;
        });

        //COMMIT CHANGES
        this.commit('SET_DATA', dataArray);
        this.commit('SET_ERRORS', []);
        this.commit('SET_GLOBAL_DATA', {totalConfirmed, totalRecovered, totalDeaths});
      }
      catch(err) {
        //CATCH ANY ERROR AND COMMIT DEFAULT VALUES
        this.commit('ADD_ERROR', `Error fetching statistics. Please try again. (${err})`);
        this.commit('SET_DATA', []);
        this.commit('SET_GLOBAL_DATA', {totalConfirmed:0, totalRecovered:0, totalDeaths:0});
      }
    },

    clearErrors() {
      this.commit('SET_ERRORS', []);
    },
    
    addError(error) {
      this.commit('ADD_ERROR', error);
    }
  },
  modules: {
  }
})
