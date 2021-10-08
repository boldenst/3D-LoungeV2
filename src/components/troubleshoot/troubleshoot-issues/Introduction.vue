<template>
    <section class="issue-intro">
        <slot name="issue-heading">
            <h1 class="issue-heading">ISSUE HEADING</h1>
        </slot>
        <div class="issue-content">
            <div class="issue-content__desc">
                <div class="issue-content-desc__tags">
                    <slot name="issue-tags">
                        <p class="issue-content-desc-tags__tag main-tag">Tags:</p>
                        <p class="issue-content-desc-tags__tag">Tag,</p>
                        <p class="issue-content-desc-tags__tag">Tag,</p>
                        <p class="issue-content-desc-tags__tag">Tag</p>
                    </slot>

                </div>
                <div class="icons-seperator">
                    <slot name="issue-introdesc">
                        <p class="issue-content-desc_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commo labore et dolore magna aliqua.
                        </p>
                    </slot>

                    <div class="issue-content-desc__icons">
                        <router-link class="issue-content-desc-icons__icon" to="#"><img src="@/assets/icons/Share.svg"
                                alt=""></router-link>
                        <router-link class="issue-content-desc-icons__icon" to="#"><img src="@/assets/icons/Edit.svg"
                                alt=""></router-link>
                        <router-link class="issue-content-desc-icons__icon" to="#"><img src="@/assets/icons/Star.svg"
                                alt=""></router-link>
                    </div>
                </div>
            </div>
            <div class="issue-content__gallery">
                <slot name="issue-gallery">
                    <div class="issue-content-gallery__image-main"></div>
                    <div class="issue-content-gallery__image-second"></div>
                    <div class="issue-content-gallery__image-third"></div>
                </slot>

            </div>
        </div>
    </section>

</template>

<style scoped>


</style>