<template>
<div class="content">
    <div class="header1">
        <img class="icon" src="https://image.flaticon.com/icons/png/512/786/786251.png" alt="icon">
        <h1 class="issue-title">Layer Adhesion Issue</h1>
        <ul class="tags">
            <li>Tags:</li>
            <li><a href="">Mofo</a></li>
            <li><a href="">Moms spaghetti</a></li>
            <li><a href="">sticking</a></li>
        </ul>
    </div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="gallery">
        <img class="gallery-img-1" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery1">
        <img class="gallery-img-2" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery2">
        <img class="gallery-img-3" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery3">
        <img class="gallery-img-4" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery4">
        <img class="gallery-img-5" src="https://images.unsplash.com/photo-1509243271451-2b84555736ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="gallery5">
    </div>
    <div class="spacer"></div>
</div>
</template>

<style scoped>

    * {
        box-sizing: border-box;
        margin: 0;
    }
    .content {
        margin-left: 25px;
        margin-right: 25px;
        background-color: #E2E2E2;   
    }

    /* TITLE AND HEADER */
    .header1 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    .header1 h1 {
        font-size: 21px;
    }
    .icon { 
        grid-area: 1 / 1 / 3 / 2; 
        object-fit: cover;
        width: 20px;
        margin: auto;
    }
    .issue-title { 
        grid-area: 1 / 2 / 2 / 5;
    }

    /* tags */
    .tags { 
        grid-area: 2 / 2 / 3 / 5;
        padding: 0; 
    }
    .tags li {
        display: inline;
        font-size: 12px;
    }
    li:first-of-type {
        font-weight: bold;
    } 
    
    /* GALLERY */
    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    .gallery img {
        object-fit: cover;
        width: 100%;
    }
    .gallery-img-1 { 
        grid-area: 1 / 1 / 3 / 4; 
    }
    .gallery-img-2 { 
        grid-area: 3 / 1 / 5 / 2; 
    }
    .gallery-img-3 { 
        grid-area: 3 / 2 / 5 / 3; 
    }
    .gallery-img-4 { 
        grid-area: 4 / 1 / 4 / 2; 
    }
    .gallery-img-5 {
        grid-area: 4 / 2 / 4 / 3; 
    }

    /* TEXT AND SPACER */
    p {
        margin: 14px 11px 14px 11px;
    }
    .spacer {
        height: 81px;
        width: 146px;
        border-bottom: #A3A3A3 solid 3px; 
        margin: auto;
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