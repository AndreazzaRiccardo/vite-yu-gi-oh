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
    searchCard() {
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
          params: {
            num: 20,
            archetype: this.store.searchText,
            offset: 0,
          }
        })
        .then((resp) => {
          this.store.cardList = resp.data.data;
        })
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppSelect @search="searchCard" />
  <AppCardList />
</template>

<style lang="scss">
@use "./style/general.scss";

body {
  font-family: 'roboto', sans-serif;
}
</style>
