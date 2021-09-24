<template>
<div class="intro-wrapper">
    <div class="intro-title-container flex flex-row justify-left pt-4">
        <img class="intro-title__icon h-8 mt-1 ml-1" src="https://image.flaticon.com/icons/png/512/786/786251.png" alt="icon">
        <div>
            <h1 class="intro-issue-title text-2xl">Layer Adhesion Issue</h1>
            <ul class="flex flex-row ml-3">
                <li class="font-bold mr-2">Tags:</li>
                <li><a href="">Mofo,</a></li>
                <li><a href="">Moms spaghetti,</a></li>
                <li><a href="">sticking</a></li>
            </ul>
        </div>
    </div>
    <p class="pt-8 pb-8 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="gallery">
        <div class="gallery-img-1">
        </div>
        <div class="gallery-img-2">
        </div>
        <div class="gallery-img-3">
        </div>
        <div class="gallery-img-4">
        </div>
        <div class="gallery-img-5">
        </div>
    </div>
    <div class="spacer mt-12"></div>
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

    .intro-issue-title {
        color: var(--blue-text-color);
        font-weight: 600;
    }


    /* SECTION */


    /* TITLE AND HEADER */





    /* TEXT AND SPACER */
    p {
        width: 100%;
    }


    /* GALLERY */
    .gallery {
        display: grid;
        height: 22rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 12rem 6rem;
        gap: 0.5rem;
        margin: 0px 0.5rem 0px 0.5rem;
        grid-template-areas: 
        "main main main main"
        "second second third third";
    }
    .gallery-img-1 { 
        grid-area: main;
        background-image: url(../../../assets/img-2.jpg); 
        background-size: cover;
        background-position: 30% 30%;
        height: 100%;
    }
    .gallery-img-2 { 
        grid-area: second; 
        background-image: url(../../../assets/issue1-2.png); 
        background-size: cover;
        height: 100%;
    }
    .gallery-img-3 { 
        grid-area: third; 
        background-image: url(../../../assets/issue1-3.png); 
        background-size: cover;
        height: 100%;

    }
    .gallery-img-4 { 
        grid-area: none; 
        display: none;
        background-image: url(../../../assets/issue1-4.png); 
        background-size: cover;
        height: 100%;
    }
    .gallery-img-5 {
        grid-area: none; 
        display: none;
        background-image: url(../../../assets/issue1-5.png); 
        background-size: cover;
        height: 100%;
    }

    @media only screen and (min-width: 1000px) {
      .intro-wrapper {
        background-color: #E2E2E2;   
    }

    .spacer {
        background-color: #9b9b9b;
        height: 0.1rem;
        width: 60%;
        margin: 5rem auto 2rem auto;
    }



    /* TEXT AND SPACER */
    p {
        width: 70%;
    }


    /* GALLERY */
    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        margin: 0;
        grid-template-areas: 
        "main main second third"
        "main main fourth fifth";
    }
        .gallery-img-4 { 
        grid-area: fourth; 
        display: block;
    }
    .gallery-img-5 {
        grid-area: fifth; 
        display: block;
    }
}

  

</style>