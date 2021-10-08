<template>
        <div class="local-container">
        <div class="issue-selector">
            <div class="issue-heading">
                <img src="@/assets/icons/change-issue-style.svg" alt="">
                <h2 class="issue-heading__heading">Common issues</h2>
            </div>
            <div class="issue-selector__container">
                <nav class="issue-nav">
                    <ul class="issue-list">
                        <li v-for="tab in tabs" :key="tab" class="issue-link">
                            <a class="btn__gray-ver" :class="{ active: tab === selected }" @click="setTab(tab)">
                                {{ tab }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        tabs: {
            type: Array,
            required: true,
        }
    },
    methods: {
        setTab(tab) {
            this.$emit('selected', tab);
        }
    }
}

</script>

<style scoped>
    .issue-selector {
        display: flex;
        flex-direction: column;
        width: 70vw; /* CHANGE HERE */
    }

    .issue-heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--color-brand);
        width: 100%;
        padding: 0 1rem;
        height: 4rem;
        border-radius: 1rem 1rem 0 0;
    }

    .issue-heading__heading {
        font-size: 2rem;
        font-weight: bold;
        margin-left: 1rem;
        color: var(--color-white);
    }

    .issue-selector__container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: auto;
        grid-template-areas: 
        "btn btn info info info info img img img img"
        ;
    }

    .issue-nav {
        grid-area: btn;
        width: 100%;
    }

</style>
