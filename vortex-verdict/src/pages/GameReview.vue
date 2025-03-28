<template>
    <div class="container mt-4">
      <h1>Vortex Verdict</h1>
  
      <!-- <a href="./games" class="btn btn-secondary mb-4">返回遊戲列表</a> -->
       <router-link to="/games" class="btn btn-secondary mb-4">返回遊戲列表</router-link>
  
      <div v-if="game" class="card">
        <div class="row g-0">
          <div class="col-md-4 p-3">
            <img :src="game.image" class="game-cover" :alt="game.name" />
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="badge bg-primary">{{ game.category }}</span>
              <div class="metascore-large" :class="getScoreClass(game.score)">
                {{ game.score }}
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{{ game.name }}</h2>
              <p class="card-text"><strong>開發商：</strong> {{ game.company }}</p>
              <p class="card-text"><strong>發行日期：</strong> {{ game.releaseDate || '未知' }}</p>
  
              <div class="mt-4">
                <h4>遊戲介紹</h4>
                <p>{{ game.description }}</p>
              </div>
  
              <div class="mt-4">
                <h4>遊戲特色</h4>
                <ul class="feature-list">
                  <li v-for="(feature, index) in game.features || defaultFeatures" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
  
              <a v-if="game.officialSite" :href="game.officialSite" target="_blank" class="btn btn-primary mt-3">
                前往官方網站
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else class="alert alert-warning">
        找不到該遊戲的資訊，請返回列表重新選擇。
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import data from '@/assets/game_data/game_data.json'

  const gameData = JSON.parse(JSON.stringify(data))

  const game = ref(null)
  const defaultFeatures = [
    '精美的遊戲畫面',
    '引人入勝的故事情節',
    '創新的遊戲玩法'
  ]
  
  const getGameIdFromUrl = () => {
    // const urlParams = new URLSearchParams(window.location.search)
    const urlObj = window.location.href.split('/')
    const gameId = urlObj[urlObj.length - 1]
    return gameId

  }
  
  const loadGameData = () => {
    const gameId = getGameIdFromUrl()

    if (!gameId) return
  
    const decodedId = decodeURIComponent(gameId)
    // Assume window.gameData is provided from an external script (e.g., game_data.js)
    const foundGame = gameData.find(g => g.name === decodedId)
    if (foundGame) {
      game.value = foundGame
      document.title = `${foundGame.name} - Vortex Verdict`
    }
  }
  
  const getScoreClass = (score) => {
    if (score >= 7) return 'green'
    if (score >= 5) return 'yellow'
    return 'red'
  }
  
  onMounted(() => {
    loadGameData()
  })
  </script>
  
  <style scoped>
  .game-cover {
    width: 100%;
    border-radius: 8px;
  }
  
  .metascore-large {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    font-size: 24px;
  }
  
  .green {
    background-color: #6c3;
  }
  
  .yellow {
    background-color: #fc3;
  }
  
  .red {
    background-color: #f00;
  }
  
  .feature-list {
    padding-left: 20px;
  }
  
  .feature-list li {
    margin-bottom: 8px;
  }
  </style>