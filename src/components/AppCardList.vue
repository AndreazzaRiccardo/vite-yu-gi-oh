<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
components: {
    AppCard
},
data() {
    return {
        store,
    }
}
}
</script>

<template>
<main>
    <div class="container p-5">
        <div class="total">Found {{ store.cardList.length }} cards</div>
        <div class="row row-cols-5">
           <div class="col g-4" v-for="card in store.cardList">
            <AppCard :card="card"/>
           </div>
        </div>
    </div>
</main>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

main {
    background-color: $bg-yellow;

    .container {
        background-color: white;

        .total {
            width: 100%;
            height: 80px;
            color: white;
            background-color: rgb(44, 44, 44);
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-weight: bolder;
            font-size: 1.3rem;
        }
    }
}
</style>