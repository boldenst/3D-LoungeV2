<template>
  <div id="issue1">
    <Breadcrumb></Breadcrumb>
    <Introduction>
      <template v-slot:issue-heading>
        <h1 class="issue-heading">Layer Adhesion Issues</h1>
      </template>
      <template v-slot:issue-tags>
        <p class="issue-content-desc-tags__tag main-tag">Tags:</p>
        <p class="issue-content-desc-tags__tag">Lines,</p>
        <p class="issue-content-desc-tags__tag">Breaks,</p>
        <p class="issue-content-desc-tags__tag">Seperates</p>
      </template>
      <template v-slot:issue-introdesc>
        <p class="issue-content-desc_text">
          Layer adhesion issues can cause a lot of issues with strength etc. ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commo labore et dolore magna aliqua.
        </p>
      </template>
      <template v-slot:issue-gallery>
        <div class="issue-content-gallery__image-main"></div>
        <div class="issue-content-gallery__image-second"></div>
        <div class="issue-content-gallery__image-third"></div>
      </template>
    </Introduction>
    <Causes>
      <template v-slot:causes>
        <p class="causes">Too low temp</p>
        <p class="causes">Underextrusion</p>
      </template>
      <template v-slot:solutions>
        <p class="solutions">Increase temp <router-link to="/troubleshoot/changetemphotend">Learn how...</router-link>
        </p>
        <p class="solutions">Increase extrusion <router-link to="/troubleshoot/changetemphotend">Learn how...</router-link>
        </p>
      </template>
    </Causes>
    <Explanations>
      <template v-slot:explanation-heading>
        <div class="explanations__question-icon">
          <p class="explanations__question-icon">
            ?
          </p>
        </div>
        <h2 class="explanations__caption-layout-heading">What is it?</h2>
      </template>
      Slot 1 ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo minima
      totam culpa amet cum sint consequuntur repellendus modi sed?
      <br> <br>
      Dolore recusandae incidunt pariatur nisi
      perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
      hic qui libero, et provident veniam dicta dolor.
    </Explanations>
    <Explanations>
      <template v-slot:explanation-heading>
        <div class="explanations__question-icon">
          <p class="explanations__question-icon">
            i
          </p>
        </div>
        <h2 class="explanations__caption-layout-heading">How to spot the issue</h2>
      </template>
      Slot 2 ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo minima
      totam culpa amet cum sint consequuntur repellendus modi sed?
      <br> <br>
      Dolore recusandae incidunt pariatur nisi
      perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
      hic qui libero, et provident veniam dicta dolor.
    </Explanations>

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
    </div>  </div>
</template>



<style scoped>
  * {
    font-family: 'Montserrat', sans-serif;
  }

  #issue1 {
    margin: 5rem 14vw;
  }

  .issue-content-gallery__image-main {
    background-image: url(../../../assets/issue1-1.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }


  .issue-content-gallery__image-second {
    background-image: url(../../../assets/issue1-2.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .issue-content-gallery__image-third {
    background-image: url(../../../assets/issue1-3.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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