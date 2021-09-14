<template>
  <div id="issue1">
    
    <Introduction> </Introduction>
    <Causes></Causes>
    <Explanations></Explanations>
    <Comments></Comments>

  </div>
</template>



<style>


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

    