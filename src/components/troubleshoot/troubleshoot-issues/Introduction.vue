<template>
    <section class="issue-intro">
        <slot name="issue-heading">
            <h1 class="issue-heading">ISSUE HEADING</h1>
            <div class="issue-content">
                <div class="issue-content__desc">
                    <div class="issue-content-desc__tags">
                        <p class="issue-content-desc-tags__tag main-tag">Tags:</p>
                        <p class="issue-content-desc-tags__tag">Tag,</p>
                        <p class="issue-content-desc-tags__tag">Tag,</p>
                        <p class="issue-content-desc-tags__tag">Tag</p>
                    </div>
                    <div class="icons-seperator">
                        <p class="issue-content-desc_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commo labore et dolore magna aliqua.
                        </p>
                        <div class="issue-content-desc_icons">
                            <router-link to="#"><img src="@/assets/Home.svg" alt=""></router-link>
                            <router-link to="#"><img src="@/assets/Home.svg" alt=""></router-link>
                            <router-link to="#"><img src="@/assets/Home.svg" alt=""></router-link>
                        </div>
                    </div>
                </div>
                <div class="issue-content__gallery">
                    <div class="issue-content-gallery__image-main"></div>
                    <div class="issue-content-gallery__image-second"></div>
                    <div class="issue-content-gallery__image-third"></div>
                </div>
            </div>
        </slot>
    </section>

</template>

<style scoped>


</style>