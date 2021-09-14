<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/troubleshoot/issue-1">Issue1</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
      <BottomNav></BottomNav>
      <TopNav></TopNav>
      <Explanations></Explanations>
    
  </div>
</template>

<style>

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

:root {
    --blue-color: #50b596;
    --blue-text-color: #25686D;
    --primary-color: #f6f6f6;
    --secondary-color: #e2e2e2; 
    --third-color: #0d0d0d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;                                                                                                                                                                                        
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

<script>
// @ is an alias to /src
import BottomNav from '@/components/navigation/BottomNav.vue'
import TopNav from '@/components/navigation/TopNav.vue'


export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  }
}


</script>


