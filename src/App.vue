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
      store
    }
  },
  components: {
    AppHeader,
    AppSelect,
    AppCardList
  },
  methods: {
    apiCall(num, offset, archetype) {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
          params: {
            num: num,
            archetype: archetype,
            offset: offset,
          }
        })
        .then((resp) => {
          this.store.cardList = resp.data.data;
        })
    },
    searchCard() {
      this.apiCall(100, 0 , this.store.searchText);
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
  <AppSelect @search="searchCard" @select-page="selectPage" @prewPage="prewPage" @nextPage="nextPage"/>
  <AppCardList />
</template>

<style lang="scss">
@use "./style/general.scss";

body {
  font-family: 'roboto', sans-serif;
}
</style>
