<script>
import axios from "../../node_modules/axios";
import { store } from '../store';
export default {
    data() {
        return {
            store,
            indexCard: 0,
        }
    },
    methods: {
        nextPage() {
            this.indexCard += 20
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.indexCard}`).then((resp) => {
                this.store.cardList = resp.data.data
            })
        },
        prewPage() {
            this.indexCard -= 20
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.indexCard}`).then((resp) => {
                this.store.cardList = resp.data.data
            })
        }
    }
}
</script>

<template>
    <section class="pt-5 pb-4">
        <div class="container">
            <select class="form-select fw-bolder" name="deck-list" id="decks">
                <option value="alien">Alien</option>
            </select>
            <div class="buttons">
                <button class="btn btn-light" @click="prewPage" v-if="indexCard >= 20">BACK PAGE</button>
                <button class="btn btn-light" @click="nextPage">NEXT PAGE</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

section {
    padding: 1rem;
    background-color: $bg-yellow;

    select {
        max-width: 200px;
    }

    .container {
        display: flex;
        justify-content: space-between;

        .buttons {
            button {
                margin-left: 1rem;
            }
        }
    }
}
</style>