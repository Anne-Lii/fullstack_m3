<script>
  export default {
    name: 'App',
  };
</script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Startsidan</router-link>
        <router-link to="/fish">Fiskar</router-link>
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
  background-color: #a0d7fc;
  padding: 10px;
  text-align: center;
  }
  nav a {
    margin: 0 50px;
    text-decoration: none;
    color: #000000;    
    font-size: 20px;
    font-weight: 600;
  }
</style>
