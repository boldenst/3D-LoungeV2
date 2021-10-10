<template>
    <div class="cause">
    <section class="cause-solutions">
        <div class="causes-container">
            <div class="causes-container__heading-flex">
                <img src="@/assets/icons/warning-black.svg" alt="">
                <h2 class="causes-heading">Possible causes</h2>
            </div>
            
            <slot name="causes">
                <p class="causes">Cause 1</p>
                <p class="causes">Cause 2</p>
            </slot>
        </div>
        <div class="solutions-container">
            <div class="solutions-container__heading-flex">
                <img src="@/assets/icons/fix-black.svg" alt="">
                <h2 class="solutions-heading">Possible solutions</h2>
            </div>            
            <slot name="solutions">
                <p class="solutions">Solution 1 <router-link to="/SignIn">Learn how...</router-link></p>
                <p class="solutions">Solution 2 <router-link to="/SignIn">Learn how...</router-link></p>
            </slot>
        </div>
        

    </section>
    <router-link class="causes-forum-link" to="/forum">Didn't find your answer? - Check the Forum</router-link>
    </div>
</template>

<style scoped>

</style>