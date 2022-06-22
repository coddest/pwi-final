<template>
  <nav>
    <router-link to="/">Stats</router-link>
    <router-link to="/Game">Game</router-link>
    <router-link to="/About">About</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  padding: 30px;
  border-bottom: solid 1px;
  display: flex;
  justify-content: center;
}

nav a {
  padding: 20px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 25px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #303bb5;
}
</style>