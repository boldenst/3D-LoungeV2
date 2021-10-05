<template>
  <div id="issue1">
    <Breadcrumb></Breadcrumb>
    <Introduction></Introduction>
    <Causes></Causes>
    <Explanations></Explanations>
    <Explanations></Explanations>
    <Comments></Comments>

  </div>
</template>



<style scoped>
  #issue1 {

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

    