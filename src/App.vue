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
  }
}
</script>

<template>
  <AppHeader />
  <AppSelect />
  <AppCardList />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
