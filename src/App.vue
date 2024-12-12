<script>
  export default {
    name: 'App',
  };
</script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Start</router-link>
        <router-link to="/fish">Fish</router-link>
        <router-link to="/info">Info</router-link> 
        
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
  nav {
  background-color: #f4f4f4;
  padding: 10px;
  }
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #000000;
  }
</style>
