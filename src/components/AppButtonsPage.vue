<script>
import axios from "../../node_modules/axios";
import { store } from '../store';
export default {
    data() {
        return {
            store,
            indexCard: 0,
            select: ""
        }
    },
    methods: {
        nextPage() {
            this.indexCard += 20
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.indexCard}`).then((resp) => {
                this.store.cardList = resp.data.data;
            })
        },
        prewPage() {
            this.indexCard -= 20
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.indexCard}`).then((resp) => {
                this.store.cardList = resp.data.data;
            })
        },
        selectPage() {
            this.indexCard = this.select * 20
            axios
                .get("https://db.ygoprodeck.com/api/v7/cardinfo.php" , {
                    params: {
                        num: 20,
                        offset: this.indexCard
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
    <div class="ms_container">
        <select class="form-select" @change="selectPage" name="select-page" id="page" v-model="select">
            <option v-for="(page, i) in 644" :value="`${i}`">{{ i }}</option>
        </select>
        <div class="buttons d-flex align-items-center">
            <button class="btn btn-light ms-4" @click="prewPage" v-if="indexCard >= 20">BACK PAGE</button>
            <button class="btn btn-light ms-4" @click="nextPage">NEXT PAGE</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

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
</style>