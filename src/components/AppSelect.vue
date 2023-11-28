<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="pt-5 pb-4" v-if="store.loading === false">
        <div class="container">
            <select v-model="store.searchText" @change="$emit('search')" class="form-select fw-bolder" name="deck-list"
                id="decks">
                <option value="">Seleziona un Archetipo</option>
                <option v-for="arche in store.archetypeArray" :value="`${arche}`">{{ arche.toLocaleUpperCase() }}</option>
            </select>
            <div class="ms_container">
                <select class="form-select" @change="$emit('select-page')" name="select-page" id="page" v-model="store.select">
                    <option value="">n. Page</option>
                    <option v-for="(page, i) in 644" :value="`${i}`">{{ i }}</option>
                </select>
                <div class="buttons d-flex align-items-center">
                    <button class="btn btn-light ms-4" @click="$emit('prewPage')" v-if="store.indexCard >= 20">BACK PAGE</button>
                    <button class="btn btn-light ms-4" @click="$emit('nextPage')" v-if="store.indexCard < 12860">NEXT PAGE</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

section {
    background-color: $bg-yellow;

    select {
        max-width: 300px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ms_container {
            display: flex;
            align-items: center;
        }

        button {
            min-width: 150px;
        }

        select {
            min-width: 150px;
        }
    }
}
</style>