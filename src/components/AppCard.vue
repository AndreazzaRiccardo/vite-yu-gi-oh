<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-text text-center">{{ card.name.toUpperCase() }}</h5>
            <p class="text-center fw-bold">{{ card.archetype }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;
.card {
    .card-body {
        background-color: $bg-yellow;
        height: 120px; 

        h5 {
            color: white;
        }
    }
}
</style>