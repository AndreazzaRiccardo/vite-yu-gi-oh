<script>
export default {
    props: {
        card: Object
    },
    computed: {
        archetype() {
            return this.card.archetype ? this.card.archetype : "Nessun Archetipo";
        }
    }
}
</script>

<template>
    <div class="card border-5 rounded-3"
        :class="{ 'border-danger': card.type.includes('Monster') }, { 'border-primary': card.type.includes('Card') }">
        <img :src="card.card_images[0].image_url" class="card-img-top" :alt="`Immagine di ${card.name}`">
        <div class="card-body">
            <h5 class="card-text text-center">{{ card.name.toUpperCase() }}</h5>
            <p class="text-center fw-bold">{{ archetype }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.card {


    .card-body {
        background-color: $bg-yellow;
        height: 150px;

        h5 {
            color: white;
        }
    }

    img {
        transition: all .3s ease-in-out;
        z-index: 1;

        &:hover {
            cursor: zoom-in;
            z-index: 2;
            transform: scale(2);
            transition: all .3s ease-in-out;
        }
    }
}
</style>