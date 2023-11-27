<script>
import { store } from '../store';
import AppLoader from './AppLoader.vue';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppCard,
        AppLoader,
    }
}
</script>

<template>
    <main>
        <AppLoader v-if="store.loading" />
        <div class="container p-5" v-else>
            <div>
                <div class="total">Found {{ store.cardList.length }} cards</div>
                <div class="row row-cols-5">
                    <div class="col g-4" v-for="(card, i) in store.cardList" :key="i">
                        <AppCard :card="card" />
                    </div>
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
    min-height: 80vh;

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