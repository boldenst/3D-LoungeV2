<template>
  <div id="issue1">
    <Description> </Description>
    <FilterSearch></FilterSearch>
    <CommonIssues></CommonIssues>
  </div>
</template>

<script>
// @ is an alias to /src
import Description from '@/components/troubleshoot/troubleshoot-home/Description.vue'
import FilterSearch from '@/components/troubleshoot/troubleshoot-home/FilterSearch.vue'
import CommonIssues from '@/components/troubleshoot/troubleshoot-home/CommonIssues'

export default {
  name: 'Troubleshoot',
  components: {
    Description,
    FilterSearch,
    CommonIssues
  }
}
</script>

    