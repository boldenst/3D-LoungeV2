<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/troubleshoot/issue-1">Issue1</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>

      <TopNav></TopNav>
      <Footer> </Footer>

      
  </div>
</template>
<style defer src="@/assets/css/style.css">
</style>

<script>
// @ is an alias to /src
import TopNav from '@/components/navigation/TopNav.vue'
import Footer from '@/components/navigation/Footer.vue'



export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  }
}

</script>