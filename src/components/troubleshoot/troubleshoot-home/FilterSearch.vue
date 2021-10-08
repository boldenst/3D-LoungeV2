<template>

    <div class="search-container">
        <button class="btn__filter">
            <p class="btn__filter-txt">Filter</p>
            <div class="btn__filter-arrow"></div>
        </button>
        <div class="search-field">

            <button class="btn-styling flex items-center justify-center px-3">
                <svg class="w-6 h-6 loop" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                    </path>
                </svg>
            </button>
            <input type="text" class="input-styling" placeholder="Search...">
        </div>
    </div>
</template>

<style scoped>
    .search-container {
        margin: 0rem 14vw 1rem 14vw;
        display: flex;

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
        margin-right: 1rem;
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
        outline: solid .15rem var(--color-brand);
        outline-offset: -.15rem;
    }

    .btn__filter:hover .btn__filter-arrow {
        border-bottom: solid .15rem var(--color-brand);
        border-right: solid .15rem var(--color-brand);
    }

    .search-field {
        display: flex;
    }

    .btn-styling {
        border-left: solid .15rem var(--color-brand);
        border-top: solid .15rem var(--color-brand);
        border-bottom: solid .15rem var(--color-brand);
        border-radius: 1rem 0 0 1rem;
        outline: none;
    }

    .input-styling {
        border-right: solid .15rem var(--color-brand);
        border-top: solid .15rem var(--color-brand);
        border-bottom: solid .15rem var(--color-brand);
        border-radius: 0 1rem 1rem 0;
    }

    .input-styling:focus {
        outline: none;
    }

    .loop {
        color: var(--color-brand);
    }
</style>