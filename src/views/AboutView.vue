<template>
  <h1>NBA Stats</h1>
  <div class="about">
    <p>This website is a final project for PWI subject on my university. It uses data from an open source API - <a href="https://balldontlie.io">balldontlie</a>, It allows you to search for NBA players (by name) from 1979 up until current season. In Game tab you can draw a random game and try to guess what was the result.</p>
    <p>The whole site is build on Vue3 framework, code is publicly available on <a href="https://github.com/coddest/pwi-final">github</a>.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  p{
    max-width: 70%;
    font-size: x-large;
  }
  a{
    text-decoration: none;
  }
</style>