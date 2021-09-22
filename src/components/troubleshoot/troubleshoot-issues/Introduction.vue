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
        <div class="gallery-img-1">
            <img class="" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery1">
        </div>
        <div class="gallery-img-2">
            <img class="" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery2">
        </div>
        <div class="gallery-img-3">
            <img class="" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery3">
        </div>
        <div class="gallery-img-4">
            <img class="" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery4">
        </div>
        <div class="gallery-img-5">
            <img class="" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery5">
        </div>
    </div>
    <div class="spacer mt-3"></div>
</div>
</template>

<style scoped>

    .intro-wrapper {
        background-color: #E2E2E2;   
    }

    .spacer {
        background-color: var(--third-color);
        height: 0.1rem;
        width: 80%;
        margin: 0 auto;
    }

    /* DESKTOP VERSION */

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
        width: 100%;
    }


    /* GALLERY */
    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        margin: 0px 0.5rem 0px 0.5rem;
        grid-template-areas: 
        "main main main main"
        "second second third third";
    }
    .gallery-img-1 { 
        grid-area: main; 
    }
    .gallery-img-2 { 
        grid-area: second; 
    }
    .gallery-img-3 { 
        grid-area: third; 
    }
    .gallery-img-4 { 
        grid-area: none; 
        display: none;
    }
    .gallery-img-5 {
        grid-area: none; 
        display: none;
    }

  

</style>