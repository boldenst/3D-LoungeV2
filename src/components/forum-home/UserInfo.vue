<template>
    <div class="user-info">
            <div class="user-info__container">
                <img class="user-info__image" src="@/assets/icons/profile-picture.svg" alt="">
                <p class="user-info__text">3DPrintEnthus420</p>
            </div>
            <div class="user-stats">
                <div class="user-stats-style user-res">
                    <h2 class="user__heading">Responses</h2>
                    <div class="user__underline"></div>
                    <p class="user-counter user-counter__res">23</p>
                </div>
                <div class="user-stats-style user-q">
                    <h2 class="user__heading">Questions</h2>
                    <div class="user__underline"></div>
                    <p class="user-counter user-counter__q">71</p>
                </div>
                <div class="user-stats-style user-like">
                    <h2 class="user__heading">Likes</h2>
                    <div class="user__underline"></div>
                    <div class="like-container">
                        <p class="user-counter user-counter__like">157</p>
                        <img class="like-icon" src="@/assets/icons/Heart.svg" alt="heart">
                    </div>
                </div>
                <div class="user-stats-style user-point">
                    <h2 class="user__heading">Trouble Points</h2>
                    <div class="user__underline"></div>
                    <p class="user-counter user-counter__point">286</p>
                </div>
            </div>
    </div>
</template>

<style scoped>

.user-info {
    margin: 10rem 14vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
    "user user user info info info info info info info info info"
    ;
}

.user-info__container {
    display: flex;
    flex-direction: column;    
    grid-area: user;
    width: 100%;
    align-items: center;
}

.user-info__image {
    width: 12rem;
}

.user-info__text {
    padding: 1rem 0;
}

.user-stats {
    grid-area: info;
    width: 100%;
    grid-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
    "res res q q like like point point"
    ;
}

.user-res {
    grid-area: res;
}

.user-q {
    grid-area: q;
}

.user-like {
    grid-area: like;
}

.user-point {
    grid-area: point;
}

.user__heading {
    padding: 1rem 0;
}

.user__underline {
    width: 100%;
    height: .2rem;
    background-color: var(--color-brand);
}

.user-counter {
    font-size: 3rem;
    margin-top: 3.5rem;
}

.user-counter__res {
    color: var(--color-purple);
}

.user-counter__q {
    color: var(--color-blue);
}

.user-counter__like {
    color: var(--color-black);
}

.user-counter__point {
    color: var(--color-green);
}

.like-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.like-icon {
    margin-top: 3.5rem;
    margin-left: 1rem;
    width: 3rem;
}


</style>