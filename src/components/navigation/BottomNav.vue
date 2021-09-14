<template>
    <nav>
        <a href="../"><img src="../../assets/Backward.svg" alt=""></a>
        <router-link to="/forum"><img src="../../assets/Home.svg" alt=""></router-link>
        <a href=""><img src="../../assets/User.svg" alt=""></a>
    </nav>
</template>

<style scoped>
nav {
    display: none;
}

@media only screen and (max-width: 600px) {
nav {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    background-color: #E8E8E8;
    height: 4rem;
    z-index: 100;
    justify-content: space-evenly;
    align-items: center;
    filter: drop-shadow(0 -3px 5px #818181);
}
}
</style>