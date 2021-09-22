<template>
    <nav class="fixed bottom-0 left-0 w-screen h-16 z-20 items-center flex flex-row justify-evenly">
        <a href="../"><img src="../../assets/Backward.svg" alt=""></a>
        <router-link to="/forum"><img src="../../assets/Home.svg" alt=""></router-link>
        <a href=""><img src="../../assets/User.svg" alt=""></a>
    </nav>
</template>

<style scoped>


@media only screen and (max-width: 600px) {
nav {
    background-color: #E8E8E8;
    filter: drop-shadow(0 -3px 5px #818181);
}
}
@media only screen and (min-width: 601px) {
nav {
    display: none;
}
}
</style>