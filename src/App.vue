<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/troubleshoot/issue-1">Issue1</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>

      <TopNav></TopNav>
  </div>
</template>
<style src="@/assets/css/style.css">
</style>

<style>


</style>

<script>
// @ is an alias to /src
import TopNav from '@/components/navigation/TopNav.vue'


export default {
  name: 'App',
  components: {
    TopNav
  }
}


</script>


