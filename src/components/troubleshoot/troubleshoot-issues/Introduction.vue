<template>
<div class="intro-wrapper">
    <div class="intro-title-container flex flex-row justify-center pt-4">
        <img class="intro-title__icon h-8 mt-1 ml-1" src="https://image.flaticon.com/icons/png/512/786/786251.png" alt="icon">
        <div>
            <h1 class="intro-issue-title text-2xl">Layer Adhesion Issue</h1>
            <ul class="flex flex-row ml-3">
                <li>Tags:</li>
                <li><a href="">Mofo</a></li>
                <li><a href="">Moms spaghetti</a></li>
                <li><a href="">sticking</a></li>
            </ul>
        </div>
    </div>
    <p class="pt-8 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="gallery">
        <div class="m-3">
            <img class="gallery-img-1" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery1">
        </div>
        <div class="m-3">
            <img class="gallery-img-2" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery2">
        </div>
        <div class="m-3">
            <img class="gallery-img-3" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery3">
        </div>
        <div class="m-3">
            <img class="gallery-img-4" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery4">
        </div>
        <div class="m-3">
            <img class="gallery-img-5" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery5">
        </div>
    </div>
    <div class="spacer w-5 h-1 mt-4 mb-4"></div>
</div>
</template>

<style scoped>

    .intro-wrapper {
        background-color: #E2E2E2;   
    }

    .spacer {
        background-color: var(--third-color);
    }

    /* DESKTOP VERSION */
    @media only screen and (min-width: 1200px) {

    /* SECTION */
    .content {
        margin-left: 279px;
        margin-right: 279px;
    }
    .content > * {
        margin-left: 137px;
        margin-right: 137px;
    }

    /* TITLE AND HEADER */
    .header1 {
        grid-template-columns: 1fr 2fr 2fr 2fr;
        grid-template-rows: repeat(2, 1fr);
    }
    .header1 h1 {
        font-size: 34px;
    }
    .header1 li {
        font-size: 20px;
    }
    .icon {
        width: 32px;
    }


    /* TEXT AND SPACER */
    p {
        margin-top: 74px;
        margin-right: 207px !important;
        margin-bottom: 58px;
        font-size: 20px;
    }
    .spacer {
        height: 111px;
        width: 536px;
        border-bottom: #A3A3A3 solid 3px; 
        margin: auto;
    }

    /* GALLERY */
    .gallery {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        margin: 0px 137px 0px 137px;
    }
    .gallery-img-1 { 
        grid-area: 1 / 1 / span 2 / span 2; 
    }
    .gallery-img-2 { 
        grid-area: 1 / 3 / 2 / 3; 
    }
    .gallery-img-3 { 
        grid-area: 2 / 3 / 2 / 3; 
    }
    .gallery-img-4 { 
        grid-area: 1 / 4 / 1 / 4; 
    }
    .gallery-img-5 {
        grid-area: 2 / 4 / 2 / 4; 
    }

    }/* Style end tag */

</style>