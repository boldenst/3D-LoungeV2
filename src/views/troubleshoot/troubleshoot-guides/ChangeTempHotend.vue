<template>
  <div id="issue1">
    <Breadcrumb></Breadcrumb>
    <Introduction>
      <template v-slot:issue-heading>
        <h1 class="issue-heading">Change Temperature on hot end</h1>
      </template>
      <template v-slot:issue-tags>
        <p class="issue-content-desc-tags__tag main-tag">Tags:</p>
        <p class="issue-content-desc-tags__tag">Temp,</p>
        <p class="issue-content-desc-tags__tag">Temperature,</p>
        <p class="issue-content-desc-tags__tag">Degrees</p>
      </template>
      <template v-slot:issue-introdesc>
        <p class="issue-content-desc_text">
          The temperature on your hot end affects the consistency of your filament exiting the nozzle. If the
          temperature is too low, the filament might not melt enough to exit the hot end. However, if it is too high,
          you
          might end up burning the filament.
        </p>
      </template>
      <template v-slot:issue-gallery>
        <div class="issue-content-gallery__image-main"></div>
        <div class="issue-content-gallery__image-second"></div>
        <div class="issue-content-gallery__image-third"></div>
      </template>
    </Introduction>
    <Explanations>
      <template v-slot:explanation-heading>
        <div class="explanations__question-icon">
          <p class="explanations__question-icon">
            ?
          </p>
        </div>
        <h2 class="explanations__caption-layout-heading">Which issues can it cause?</h2>
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
        <h2 class="explanations__caption-layout-heading">How to change the temperature</h2>
      </template>
      When you need to change the temperature of your hot end, you can do it while slicing, this is recommended if you
      know what temperature is needed in advance. But if the file has already been sliced, and you need to tune the
      temperature while the print is running, you can change it on your printer.
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