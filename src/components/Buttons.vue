<template>
    <div class="local-container">
    <a class="btn__full-guide">
        <p class="btn__full-guide-txt">Full Guide</p>
    </a>
    
    <button class="btn__sugg-edit">
        <p class="btn__sugg-edit-txt">Suggest edit</p>
        <img class="btn__sugg-edit-icon" src="@/assets/icons/Edit.svg" alt="">
    </button>

    <button class="btn__filter">
        <p class="btn__filter-txt">Filter</p>
        <div class="btn__filter-arrow"></div>
    </button>

    <button class="btn__gray">
        <p class="btn__gray-txt">Filter</p>
        <div class="btn__gray-line"></div>
    </button>

    <button class="btn__gray-ver">
        <p class="btn__gray-txt">Filter</p>
        <div class="btn__gray-line-ver"></div>
    </button>

    <a class="btn__num-one" href="">
        <p class="btn__num-txt">1</p>
    </a>

    <button class="btn__rating">
        <img class="btn__rating-icon" src="@/assets/icons/Star.svg" alt="">
        <img class="btn__rating-icon-filled" src="@/assets/icons/Star-filled.svg" alt="">
        <p class="btn__rating-txt">420</p>
    </button>

    <a class="btn__learn-how" href="">
        <p class="btn__learn-how-txt">Learn how</p>
        <img class="btn__learn-how-icon" src="@/assets/icons/forward-arrow-green.svg" alt="">
    </a>    
    <div class="logo-test">
        <img src="@/assets/icons/logo.svg" alt="">
    </div>
        <div class="logo-test-light">
        <img src="@/assets/icons/logo-light.svg" alt="">
    </div>
    </div>

</template>

<style scoped>

button {
    margin: 2rem 0;
}

a {
    margin: 2rem 0;
}

.local-container {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.btn__full-guide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: var(--color-brand);
    height: 3rem;
    width: 10rem;
    padding: 0rem 2rem;
    border-radius: .5rem;
    color: var(--color-white);
    font-size: 1.2rem;
    transition: all .2s ease-in-out;
}

.btn__full-guide:hover {
    background-color: var(--color-light-black);
}

.btn__sugg-edit {
    display: flex;
    align-items: center;
    background-color: var(--color-light);
    width: 10rem;
    border: solid .15rem var(--color-brand);
    border-radius: .5rem;
    height: 3rem;
}

.btn__sugg-edit-txt {
    padding: 0rem .8rem;
    color: var(--color-brand);
    font-size: 1rem;
}

.btn__sugg-edit-icon {
    width: 2rem;
    font-weight: 500;
}

.btn__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: var(--color-brand);
    height: 3rem;
    width: 8rem;
    padding: 0rem 1rem;
    border-radius: .5rem;
    color: var(--color-white);
    font-size: 1.2rem;
    transition: all .2s ease-in-out;
}

.btn__filter-arrow {
    width: 1rem;
    height: 1rem;
    border-bottom: solid .15rem var(--color-white);
    border-right: solid .15rem var(--color-white);
    transform: rotate(45deg);
    margin: 0rem 0rem .5rem 1rem;
}

.btn__filter-txt {
    padding: .3rem;
}

.btn__filter:hover {
    background-color: var(--color-white);
    color: var(--color-brand);
    outline:solid .15rem var(--color-brand);
    outline-offset: -.15rem;
}

.btn__filter:hover .btn__filter-arrow{
    border-bottom: solid .15rem var(--color-brand);
    border-right: solid .15rem var(--color-brand);
}

.btn__gray, .btn__gray-ver {
    height: 3rem;
    background-color: var(--color-dark-gray);
    width: 10rem;
    color: var(--color-white);
    font-size: 1.2rem;
    position: relative;
    transition: all .3s ease-in-out;    

}

.btn__gray-line {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .4rem;
    background-color: var(--color-gray);
}

.btn__gray:focus {
    background-color: var(--color-light-black);
}

.btn__gray:hover, .btn__gray-ver:hover {
    background-color: var(--color-light-black);
}

.btn__gray-line-ver {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: .4rem;
    background-color: var(--color-gray);
    
}

.btn__gray:focus .btn__gray-line, .btn__gray-ver:focus .btn__gray-line-ver {
    background-color: var(--color-brand);
}

.btn__num-one {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    background-color: var(--color-light-gray);
    border-radius: .5rem;
    font-size: 1.2rem;
    transition: all .3s ease-in-out;    
}

.btn__num-one:hover {
    background-color: var(--color-gray);
    color: var(--color-white);
}

.btn__num-one:focus {
    background-color: var(--color-brand);
    color: var(--color-white);
}

.btn__rating {
    width: 8rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid .15rem var(--color-orange);
    border-radius: .5rem;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: var(--color-black);
}

.btn__rating-icon {
    transition: transform .3s ease-in-out;

}

.btn__rating:hover .btn__rating-icon {
    transform: rotate(90deg);
}

.btn__rating-icon-filled {
    display: none;
}

.btn__rating:focus .btn__rating-icon{
    display: none;
}

.btn__rating:focus .btn__rating-icon-filled{
    display: flex;
    transform: rotate(90deg);
}

.btn__learn-how {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    height: 3rem;
    color: var(--color-black);
    background-color: var(--color-light);
    border: solid .15rem var(--color-green);
    border-radius: .5rem;
    transition: all .3s ease-in-out;    
}

.btn__learn-how-txt {
    padding-left: 1rem;
}

.btn__learn-how-icon {
    height: 3rem;
}

.btn__learn-how:hover {
    background-color: var(--color-green);
    color: var(--color-white);
}

.logo-test {
    width: 20rem;
    height: auto;
    padding: 1rem;
    margin: 2rem 0;
}

.logo-test-light {
    width: 20rem;
    height: auto;
    padding: 1rem;
    background-color: var(--color-light-black);
    margin: 2rem 0;
}


</style>