import { reactive  } from "vue";

export const store = reactive({
    cardList: [],
    loading: false,
    searchText: "",
    indexCard: 0,
    select: "",
    archetypeArray: ["alien","ally of justice","ancient gear","exodia","dark magician","blue-eyes","harpie"]
})