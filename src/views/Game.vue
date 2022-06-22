<template>
  <h1 v-if="isPlaying === false">Check your NBA knowledge!</h1>
  <button @click="start" v-if="isPlaying === false">play</button>
  
  <div v-if="isPlaying === true">
    <GameBlock :game="game_luck" @reset_game="reset_game" />
  </div>
</template>

<script>
import axios from "axios";
import GameBlock from '../components/GameBlock.vue'

export default {
  components: {
    GameBlock
  },
  
  data() {
    return {
      isPlaying: false,
      total_pages: 0,
      games_count: 0,
      game_luck: null
    }
  },
  methods: {
    async start() {
      let team_id = Math.floor(Math.random() * 30) + 1;
      let season = Math.floor(Math.random() * 22) + 2000;
      let dataURL = "https://www.balldontlie.io/api/v1/games?per_page=100&team_ids[]=" + team_id + "&seasons[]=" +season;

      await axios.get(dataURL).then((response) => {
        this.games_count = response.data.data.length;
        this.game_luck = response.data.data[Math.floor(Math.random() * this.games_count)]
      });

      this.isPlaying = true;
    },
    reset_game(){
      this.isPlaying = false;
    }
  }
}
</script>

<style scoped>
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
</style>