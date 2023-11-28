import { reactive  } from "vue";

export const store = reactive({
    cardList: [],
    loading: false,
    searchText: "",
    indexCard: 0,
})