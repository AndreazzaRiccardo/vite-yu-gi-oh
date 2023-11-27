<script>
export default {

}
</script>

<template>
    <section>
        <div class="container">
            <select class="form-select fw-bolder" name="deck-list" id="decks">
                <option value="alien">Alien</option>
            </select>
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
}
</style>