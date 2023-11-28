<script>
export default {}
</script>

<template>
    <div class="loader">
        <p>STIAMO CARICANDO LA LISTA</p>
        <div class="loadbar">
            <div class="load"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

.loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    font-size: 3rem;
    padding: 2rem;

    .loadbar {
        // animation: rotation 5s linear infinite reverse;
        height: 50px;
        background-color: white;
        width: 60%;
        display: flex;
        border-radius: 10px;

        .load {
            background-color: rgb(48, 48, 48);
            height: 100%;
            animation: add-width 2s linear infinite;
            width: 0;
            border-radius: 10px;
        }
    }
    
    @keyframes add-width {
        20% {
            width: 20%;
        }

        40% {
            width: 40%;
        }

        60% {
            width: 60%;
        }

        80% {
            width: 80%;
        }

        100% {
            width: 100%;
        }
    }
}
</style>