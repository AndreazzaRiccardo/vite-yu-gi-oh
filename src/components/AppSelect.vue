<script>
import { store } from '../store';
import AppButtonsPage from './AppButtonsPage.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppButtonsPage
    }
}
</script>

<template>
    <section class="pt-5 pb-4" v-if="store.loading === false">
        <div class="container">
            <select v-model="store.searchText" @change="$emit('search')" class="form-select fw-bolder" name="deck-list"
                id="decks">
                <option value="alien">Alien</option>
                <option value="ally of justice">Ally of Justice</option>
                <option value="ancient gear">Ancient Gear</option>
            </select>
            <AppButtonsPage />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

section {
    background-color: $bg-yellow;

    select {
        max-width: 200px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>