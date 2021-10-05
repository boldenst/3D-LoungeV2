<template>
    <div class="local-container">
    <button class="btn__full-guide">
        <p class="btn__full-guide-txt">Full Guide</p>
    </button>
    
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

    <button class="btn__num-one">
        <p class="btn__num-txt">1</p>
    </button>

    </div>
</template>

<style scoped>

.local-container {
    margin-top: 10rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.btn__full-guide {
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
    width: 10rem;
    padding: 0rem 2rem;
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
    border:solid .15rem var(--color-brand);
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
    height: 3rem;
    background-color: var(--color-light-gray);
    border-radius: .5rem;
    font-size: 1.2rem;
}

.btn__num-one:hover {
    background-color: var(--color-gray);
}

</style>