<template>
  <div id="issue1">
    <Description> </Description>
    <FilterSearch></FilterSearch>
    <IssueNav :tabs="['Issue1', 'Issue2', 'Issue3']" :selected="selected" @selected="setSelected">
        <Tab :isSelected="selected === 'Issue1'">
            <h2>Issue1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nostrum?</p>
        </Tab>
        <Tab :isSelected="selected === 'Issue2'">
            <h2>Issue2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nostrum?</p>
        </Tab>
        <Tab :isSelected="selected === 'Issue3'">
            <h2>Issue3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nostrum?</p>
        </Tab>
    </IssueNav>
  </div>
</template>

<script>
// @ is an alias to /src
import Description from '@/components/troubleshoot/troubleshoot-home/Description.vue'
import FilterSearch from '@/components/troubleshoot/troubleshoot-home/FilterSearch.vue'
import IssueNav from '@/components/troubleshoot/troubleshoot-home/IssueNav.vue'
import IssueTab from '@/components/troubleshoot/troubleshoot-home/IssueTab.vue'

export default {
  name: 'Troubleshoot',
  components: {
    Description,
    FilterSearch,
    IssueNav,
    IssueTab
  },
  data() {
    return {
      selected: 'Issue1'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
}
</script>

<style scoped>

h2 {
  font-size: 1.5rem;
  color: green;
}

</style>