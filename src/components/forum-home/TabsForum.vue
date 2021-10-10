<template>
  <article>
    <nav class="tabs tabs-forum">
      <div class="tabs-section__heading tabs-section__heading-forum">
        <img class="tabs-section__img" src="@/assets/icons/change-issue-style.svg" alt="">
        <h2 class="tabs-section__heading">Common issues</h2>
      </div>
      <ul class="tabs-ul tabs-ul-forum">
        <li class="tabs-li tabs-li-forum" v-for="(tab, index) in tabs" :key="index">
          <div class="btn-tab__grayline btn-tab__grayline-forum"></div>
          <div class="tabs-name tabs-name-forum" :class="{ 'is-active': tab.isActive }" @click="selectTab(tab)">
            {{ tab.name }}
            <div class="btn-tab__brandline btn-tab__brandline-forum"></div>
          </div>
        </li>
      </ul>
      <div class="tabs-section grid-area-info">
        <slot></slot>
      </div>
    </nav>
  </article>
</template>

<script>
  export default {
    data: () => {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<!-- https://www.youtube.com/watch?v=LBwraONGb9E -->