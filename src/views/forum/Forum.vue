<template>
  <div>
    <UserInfo></UserInfo>
    <Tabs>
      <Tab class="sub-grid issue-1__container grid-area-tab" name="Trending" selected="true">

      </Tab>
      <Tab class="sub-grid" name="Recent">

      </Tab>
      <Tab class="sub-grid" name="Most responses">

      </Tab>
      <Tab class="sub-grid" name="Unanswered">

      </Tab>
      <Tab class="sub-grid" name="Other">

      </Tab>
    </Tabs>
  </div>

</template>

<style scoped>
  .tabs {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "head head head head head head head head head head"
      "nav nav nav nav nav nav nav nav nav nav"
      "info info info info info info info info info info"
    ;
    margin: 0 14vw 5rem 14vw;
  }

  .tabs-section__heading {
    display: none;
  }

  .tabs-ul {
    display: flex;
    width: 100%;
  }


  .tabs-li {
    display: flex;
    align-items: center;
    color: white;
    height: 3rem;
    width: 100%;
    background-color: var(--color-light-black);
    position: relative;
    cursor: pointer;
    text-align: center;
  }

  .tabs-name {
    height: 3rem;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    transition: all .2s ease-in-out;
  }

  .btn-tab__brandline {
    display: none;
    position: absolute;
    width: 100%;
    height: .2rem;
    background-color: var(--color-brand);
    bottom: 0;
    right: 0;
    z-index: 1;
  }
</style>

<script>
  import UserInfo from '@/components/forum-home/UserInfo.vue'
  import Tab from '@/components/troubleshoot/troubleshoot-home/Tab.vue'
  import Tabs from '@/components/troubleshoot/troubleshoot-home/Tabs.vue'

  export default {
    name: 'SignIn',
    components: {
      UserInfo,
      Tab,
      Tabs
    }
  }
</script>