<template>
  <h1>What was the score of this game?</h1>
  <h2>{{game.date.slice(0,10)}}</h2>
  <h2>{{game.home_team.full_name}} vs {{game.visitor_team.full_name}}</h2>
  <input id="home_team_input" type="number"> <input id="visitor_team_input" type="number"><p></p>
  <button v-if="show !== true" @click="show_results">Check!</button>

  <div id="resultsDiv" v-if="show === true">
    {{game.home_team_score}} - {{game.visitor_team_score}} <p></p>
    <button @click="reset_game">Reset</button>
  </div>
</template>

<script>
import { resetTracking } from '@vue/reactivity';

export default {
    props: ['game'],
    data() {
        return {
            show: false
        }
    },
    methods: {
        show_results(){
            this.show = true;
        },
        reset_game(){
            this.$emit('reset_game')
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
    input{
        width: 60px;
        height: 50px;
        font-size: 25px;
    }
    #resultsDiv{
        font-size: 35px;
    }
</style>