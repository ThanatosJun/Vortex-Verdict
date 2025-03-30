<template>
  <div class="d-flex justify-content-center align-items-center">
    <div v-if="game" class="container game-container shadow-lg position-relative">
      <div class="image-container mt-4 mb-4 mx-auto d-block">
        <img v-bind:src="game.image" class="game-image col-lg-12 shadow-lg" alt="game image">
      </div>
      <h2 class="game-title text-center mb-4">{{ game.name }}</h2>

      <div class="attribute-container mb-4">
        <div class="attribute-content col-lg-4 col-12">
          <h3 class="detail-title">評分</h3>
          <p class="game-info">{{ game.score }}</p>
        </div>
        <div class="attribute-content col-lg-4 col-12">
          <h3 class="detail-title">類別</h3>
          <p class="game-info">{{ game.category }}</p>
        </div>
        <div class="attribute-content col-lg-4 col-12">
          <h3 class="detail-title">公司</h3>
          <p class="game-info">{{ game.company }}</p>
        </div>
      </div>

      <div class="text-content">
        <h3 class="detail-title text-left">遊戲簡介</h3>
        <p class="game-info">{{ game.text }}</p>
      </div>
    </div>
    <div v-else class="container shadow-lg position-absolute top-50 start-50 translate-middle">
      <p class="text-center">載入中或找不到遊戲......</p>
    </div>
  </div>

  <div class="back-button">
    <button v-on:click="goToHome" class="btn btn-primary">返回遊戲列表</button>
  </div>
</template>


<!-- Action for JS -->
<script>
import gameDataJson from '@/assets/game_data/game_data.json'

export default {
  data() {
    return {
      game: null,
    };
  },
  async created() {
    // const gameName = "看門狗：自由軍團";
    const gameName = decodeURIComponent(this.$route.params.id)
    // const gameName = this.$route.params.id;
    try {
      this.game = gameDataJson.find((game) => game.name === gameName) || null;
    } catch (error) {
      console.error("載入遊戲資料時出錯:", error);
    }
  },
  methods: {
    goToHome() {
      this.$router.replace({ name: 'GameList' });
    }
  }
};
</script>

<!-- Style for css -->
<style scoped>
.game-container {
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 10px;
  padding: 1rem;
  margin: 60px auto;
  width: 75%;
}

.image-container {
  width: 100%;
  max-width: 1000px;
  box-shadow: 0rem 0rem 30rem 0rem #ffffff;
  border-radius: 20px;
}

.game-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 20px;
}

.game-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ebebeb;
}

.detail-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #f39c12;
}

.game-info {
  font-size: 1.25rem;
  color: #ecf0f1;
}

.attribute-container {
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  display: flex;
  gap: 25px;
}

.attribute-content {
  flex: 1;
  background-color: #34495e;
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow:
    inset 0 0rem 1rem rgb(140, 117, 243),
    0 0rem 1rem #ffffff;
  transition: all 0.3s ease-in-out;
}

.attribute-content:hover {
  background-color: #4f16ec;
  transform: translateY(-10px);
}

.attribute-content .game-info {
  font-size: 1.5rem;
  transition: font-size 0.3s ease-in-out;
}

.attribute-content:hover .game-info {
  font-size: 2rem;
}

.attribute-content h3 {
  color: #f39c12;
}

.attribute-content p {
  color: #ecf0f1;
}

.text-content {
  margin-top: 2rem;
}

.text-content h3 {
  color: #ebebeb;
}

.text-content p {
  color: #ecf0f1;
}

.back-button {
  position: relative;
  left: 12%;
  bottom: 30px;
}


@media (max-width: 767px) {
  .game-container {
    margin: 50px 0;
    padding: 1rem;
  }

  .attribute-container {
    display: block;
  }

  .attribute-container .col-lg-4 {
    margin-bottom: 1rem;
  }

}
</style>
