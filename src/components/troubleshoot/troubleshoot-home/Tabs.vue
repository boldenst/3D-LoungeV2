<template>
  <article>
    <nav class="tabs">
      <div class="tabs-section__heading">
        <img class="tabs-section__img" src="@/assets/icons/change-issue-style.svg" alt="">
        <h2 class="tabs-section__heading">Common issues</h2>
      </div>
      <ul class="tabs-ul">
        <li class="tabs-li" v-for="(tab, index) in tabs" :key="index">
          <div class="btn-tab__grayline"></div>
          <div class="tabs-name" :class="{ 'is-active': tab.isActive }" @click="selectTab(tab)">
            {{ tab.name }}
            <div class="btn-tab__brandline"></div>
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