<template>
    <div>
        <slot name="forum-router-link">

            <router-link to="">
                <div class="forum-topic">
                    <div class="forum-topic__icon">
                        <p>?</p>
                    </div>
                    <div class="forum-topic__container">
                        <p to="#" class="forum-topic__name">Topic Name</p>
                        <div class="forum-topic__info-container">
                            <img class="forum-topic__profile-pic" src="@/assets/icons/profile-picture.svg" alt="">
                            <p class="forum-topic__user">Added by <strong class="forum-topic-user__strong">User</strong>
                            </p>
                            <p class="forum-topic__responses">xx <strong
                                    class="forum-topic-responses__strong">Responses</strong>
                            </p>
                            <p class="forum-topic-rating">Positive Rating</p>
                            <p class="forum-topic__likes">xxx <img class="forum-topic__likes-img"
                                    src="@/assets/icons/Heart.svg" alt=""></p>
                        </div>

                    </div>
                </div>
            </router-link>
        </slot>

    </div>

</template>

<style>
    .forum-topic {
        display: flex;
        margin: 0;
        border-bottom: 2px solid var(--color-light-gray);
        width: 100%;
        padding: 1rem;
        align-items: center;
        background-color: var(--color-white);
    }

    .forum-topic:hover {
        display: flex;
        margin: 0;
        border-bottom: 2px solid var(--color-light-gray);
        width: 100%;
        padding: 1rem;
        align-items: center;
        background-color: var(--color-light);
    }

    .forum-topic__icon {
        background-color: var(--color-brand);
        color: var(--color-white);
        height: 3.5rem;
        width: 3.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.7rem;
        font-size: 2rem;
        font-weight: 600;
    }

    .forum-topic__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .forum-topic__name {
        color: var(--color-brand);
        font-weight: 700;
        text-align: left;
        margin-left: 2rem;
        font-size: 1.4rem;
    }

    .forum-topic__info-container {
        display: flex;
        margin-left: 2rem;
        align-items: center;
    }

    .forum-topic__profile-pic {
        width: 1.6rem;
    }

    .forum-topic__user,
    .forum-topic__responses,
    .forum-topic-rating {
        display: block;
        padding: 0 1.3rem;
        border-right: 1px solid var(--color-gray);
    }

    .forum-topic__likes {
        display: flex;
        padding: 0 1.3rem;
        align-items: center;
    }

    .forum-topic-user__strong {
        color: var(--color-brand);
    }

    .forum-topic-responses__strong {
        color: var(--color-purple);
    }

    .forum-topic-rating {
        font-weight: bold;
        color: var(--color-green);
    }



    .forum-topic__likes-img {
        width: 1.5rem;
        margin-left: 0.7rem;
    }
</style>