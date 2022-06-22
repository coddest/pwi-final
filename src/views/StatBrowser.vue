<template>
  <h1>Find the player!</h1>
  <input type="text" name="types_input" id="types_input" />
  <button id="getButton" @click="getData">Search</button>
  <div v-if="isNotEmpty !== 0" class="resultsDiv">
    <div v-for="player in info" :key="player" class="pill" @click="toggleModal(player)">
      <h2>({{ player.id }}) {{ player.first_name }} {{ player.last_name }}</h2>
      <h2>{{ player.team.full_name }}</h2>
    </div>
  </div>
  <div v-if="isNotEmpty === 0">
    <h2>No results</h2>
  </div>
  <div v-if="showDetails === true">
    <DetailsModal :player=ModalInfo @closeModal="toggleModal" />
  </div>
</template>

<script>
import axios from "axios";
import DetailsModal from "../components/DetailsModal.vue";

export default {
  name: "StatBrowser",
  components: {
    DetailsModal,
  },
  data() {
    return {
      info: null,
      isNotEmpty: 0,
      total_pages: 0,
      showDetails: false,
      ModalInfo: null
    };
  },
  methods: {
    getData() {
      let type_input = document.getElementById("types_input").value;
      if (type_input == "") {
        alert("Due to the server limitations the result is to big to execute, please narrow the search");
        this.isNotEmpty = 0;
        return;
      }
      let playerNameURL = "https://www.balldontlie.io/api/v1/players?per_page=100&page=1&search=" + type_input;
      axios.get(playerNameURL).then((response) => {
        this.isNotEmpty = response.data.meta.total_count;
        this.total_pages = response.data.meta.total_pages;
        this.info = response.data.data;
      });
      for (let i = 2; i < this.total_pages; i++) {
        axios.get("https://www.balldontlie.io/api/v1/players?per_page=100&page=" + i + "&search=" + type_input)
        .then((response) => {
          info.push(response.data.data);
          });
      }
    },
    toggleModal(player) {
      this.ModalInfo = player;
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
button {
  height: 64px;
  font-size: 22px;
  cursor: pointer;
}
#getButton {
  border-radius: 0px 20px 20px 0px;
}

.resultsDiv {
  display: flex;
  flex-wrap: wrap;
}
.pill {
  width: 400px;
  margin: 10px auto;
  background: white;
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
  cursor: pointer;
}
input {
  justify-content: center;
  padding: 0 30px;
  font-size: 22px;
  max-width: 160px;
  height: 60px;
  border-radius: 20px 0px 0px 20px;
}
</style>