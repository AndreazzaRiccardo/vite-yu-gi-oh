<script>
import axios from "axios";
import { store } from './store';
import AppHeader from "./components/AppHeader.vue"
import AppSelect from "./components/AppSelect.vue"
import AppCardList from "./components/AppCardList.vue"
export default {
  created() {
    this.store.loading = true
    setTimeout(() => {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((resp) => {
        this.store.cardList = resp.data.data
        this.store.loading = false
      })
    }, 2000)
  },
  data() {
    return {
      store,
      error: false
    }
  },
  components: {
    AppHeader,
    AppSelect,
    AppCardList
  },
  methods: {
    apiCall(num, offset, archetype) {
      this.error = false;
      this.store.loading = true;
      const params = {
        num: num,
        offset: offset,
      }

      if(archetype) {
        params.num = 100;
        params.archetype = this.store.searchText;
      }
      
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
          params,
        })
        .then((resp) => {
          this.store.cardList = resp.data.data;
        })
        .catch((err) => {
          this.error = true;
        })
        .finally(() => {
          this.store.loading = false;
        });
    },
    searchCard() {
      this.store.indexCard = 0;
      this.apiCall(20, 0, this.store.searchText);
    },
    nextPage() {
      this.store.select = "";
      this.store.indexCard += 20;
      this.apiCall(20, this.store.indexCard);
    },
    prewPage() {
      this.store.select = "";
      this.store.indexCard -= 20;
      this.apiCall(20, this.store.indexCard);
    },
    selectPage() {
      this.store.indexCard = this.store.select * 20;
      this.apiCall(20, this.store.indexCard);
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppSelect @search="searchCard" @select-page="selectPage" @prew-page="prewPage" @next-page="nextPage"/>
  <h2 class="text-center mt-5" v-if="error">RICERCA NON VALIDA</h2>
  <AppCardList v-else/>
</template>

<style lang="scss">
@use "./style/general.scss";

body {
  font-family: 'roboto', sans-serif;
}
</style>
