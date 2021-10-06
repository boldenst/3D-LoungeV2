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
        <p class="solutions">Increase temp <router-link to="/SignIn">Learn how...</router-link>
        </p>
        <p class="solutions">Increase extrusion <router-link to="/SignIn">Learn how...</router-link>
        </p>
      </template>
    </Causes>
    <Explanations></Explanations>
    <Explanations></Explanations>
    <Comments></Comments>

  </div>
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
    background-size: 120%;
    background-position: center;
  }

  .issue-content-gallery__image-second {
    background-image: url(../../../assets/issue1-2.png);
    background-size: 125%;
    background-position: center;
  }

  .issue-content-gallery__image-third {
    background-image: url(../../../assets/issue1-3.png);
    background-size: 115%;
    background-position: center;
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