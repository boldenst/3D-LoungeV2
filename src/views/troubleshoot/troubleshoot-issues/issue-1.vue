<template>
  <div id="issue1">

    <Introduction>
      <template>
<!-- ISSUE HEADING -->
        SLOT HEADING ISSasdsdaUE
      </template>
      <template v-slot:tags>
<!-- ISSUE TAGS -->
        <li><a href="">tag,</a></li>
        <li><a href="">tag,</a></li>
        <li><a href="">tag</a></li>
      </template>
      <template v-slot:intro>
<!-- ISSUE DESCRIPTION -->
        <p class="pt-8 pb-8 text-left">
          Intro ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </template>
      <template v-slot:gallery> 
<!-- BILLEDER I INTRO SKIFTES VIA DISSE CLASSES I SCOPED STYLING PÅ DENNE SIDE -->
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
      </template>

    </Introduction>
    <Causes>
      <template v-slot:causes>
<!-- ISSUE CAUSES -->
        <p class="causes font-semibold text-left">- Slot causes</p>
        <p class="causes font-semibold text-left">- Slot causes</p>
      </template>
      <template v-slot:solutions>
<!-- ISSUE SOLUTIONS -->
        <p class="solution font-semibold text-left">- Slot solutions <a class="underline cursor-pointer" href="">Learn
            how...</a></p>
        <p class="solution font-semibold text-left">- Slot solutions <a class="underline cursor-pointer" href="">Learn
            how...</a></p>
      </template>
    </Causes>
    <Explanations>
      <template v-slot:explanation-first>
<!-- ISSUE FIRST EXPLANATION "WHAT IS IT" -->
        <p class="main-text explanation-text">
          SLOT FORKLARING 1 ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo
          minima
          totam culpa amet cum sint consequuntur repellendus modi sed?
          <br> <br>
          Dolore recusandae incidunt pariatur nisi
          perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
          hic qui libero, et provident veniam dicta dolor.
        </p>
      </template>
      <template v-slot:explanation-second>
<!-- ISSUE FIRST EXPLANATION "How to spot" -->
        <p class="main-text explanation-text">
          SLOT FORKLARING 2 ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, omnis odio eum laborum quo
          minima
          totam culpa amet cum sint consequuntur repellendus modi sed?
          <br> <br>
          Dolore recusandae incidunt pariatur nisi
          perferendis dicta corporis optio facilis at laudantium? Asperiores fugit blanditiis doloremque suscipit,
          hic qui libero, et provident veniam dicta dolor.
        </p>
      </template>

    </Explanations>
    <Comments></Comments>

  </div>
</template>



<style scoped>
  #issue1 {
    margin: 0.5rem 1.5rem;
    background-color: var(--secondary-color);
    overflow-x: hidden;
    padding: 0.4rem;
  }

    .gallery-img-1 { 
        background-image: url(../../../assets/img-2.jpg); 
    }
    .gallery-img-2 { 
        background-image: url(../../../assets/issue1-2.png); 
    }
    .gallery-img-3 { 
        background-image: url(../../../assets/issue1-3.png); 
    }
    .gallery-img-4 { 
        background-image: url(../../../assets/issue1-4.png); 
    }
    .gallery-img-5 {
        background-image: url(../../../assets/issue1-5.png); 
    }

  @media only screen and (min-width: 1000px) {
    #issue1 {
      margin: 0.5rem 13vw;
      padding: 2rem 8rem;
    }
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