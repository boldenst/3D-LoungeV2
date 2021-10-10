<template>
  <div id="issue1">
    <Breadcrumb></Breadcrumb>
    <Introduction>
      <template v-slot:issue-heading>
        <h1 class="issue-heading">How do i change my nozzle</h1>
      </template>
      <template v-slot:issue-tags>
        <br>
      </template>
      <template v-slot:issue-introdesc>
        <p class="issue-content-desc_text">
          I am having some issues with swapping my nozzle, as you can see in the picture, it seems to be stuck. Do i need to do it while it is heated or should it be cold? 
        </p>
      </template>
      <template v-slot:issue-gallery>
        <div class="forumpic"></div>
      </template>
    </Introduction>
    <div class="comment-container-related">
    <Comments class="comments-forum"></Comments>
    <div class="relatedposts">
      <h3 class="relatedposts-heading">Related articles:</h3>
      <div class="relatedposts-article">
        <p>How to set up your printer</p>
        <img src="@/assets/icons/forward-arrow.svg" alt="">
      </div>
            <div class="relatedposts-article">
        <p>Get rid of warping</p>
        <img src="@/assets/icons/forward-arrow.svg" alt="">
      </div>
            <div class="relatedposts-article">
        <p>How to level your bed</p>
        <img src="@/assets/icons/forward-arrow.svg" alt="">
      </div>
            <div class="relatedposts-article">
        <p>Prevent spaghetti</p>
        <img src="@/assets/icons/forward-arrow.svg" alt="">
      </div>
            <div class="relatedposts-article">
        <p>Reduce stringing</p>
        <img src="@/assets/icons/forward-arrow.svg" alt="">
      </div>
    </div>

    </div>
  </div>
</template>



<style scoped>
  * {
    font-family: 'Montserrat', sans-serif;
  }

  #issue1 {
    margin: 5rem 14vw;
  }

  .issue-content__gallery {
  display: flex;
  width: 100%;
  height: 25rem;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
  '. main main'
  '. main main';
  }
  .issue-content__gallery {
        background-image: url(../../assets/Nozzles.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .issue-content-gallery__image-main {
    background-image: url(../../assets/Nozzles.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .forumpic {
    background-image: url(../../assets/Nozzles.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 1/3;
  }

</style>

<script>
  // @ is an alias to /src
  import Introduction from '@/components/troubleshoot/troubleshoot-issues/Introduction.vue'
  import Causes from '@/components/troubleshoot/troubleshoot-issues/Causes.vue'
  import Explanations from '@/components/troubleshoot/troubleshoot-issues/Explanations.vue'
  import Comments from '@/components/troubleshoot/troubleshoot-issues/Comments.vue'

  export default {
    name: 'App',
    components: {
      Introduction,
      Causes,
      Explanations,
      Comments
    }
  }
</script>