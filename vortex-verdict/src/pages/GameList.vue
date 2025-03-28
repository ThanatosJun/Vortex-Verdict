<template>
    <div class="container mt-4">
      <h1>Vortex Verdict</h1>
  
      <!-- 搜尋 -->
      <div class="row mb-3">
        <div class="col-md-12">
          <input v-model="query" type="text" class="form-control" placeholder="搜尋遊戲...">
        </div>
      </div>
  
      <!-- 篩選 -->
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">公司篩選</div>
            <div class="card-body">
              <div class="row">
                <div v-for="company in uniqueCompanies" :key="company" class="col-md-6 col-6">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      :id="'company-' + company" 
                      :value="company" 
                      v-model="selectedCompanies"
                    >
                    <label class="form-check-label" :for="'company-' + company">
                      {{ company }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">類別篩選</div>
            <div class="card-body">
              <div class="row">
                <div v-for="category in uniqueCategories" :key="category" class="col-md-6 col-6">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      :id="'category-' + category" 
                      :value="category" 
                      v-model="selectedCategories"
                    >
                    <label class="form-check-label" :for="'category-' + category">
                      {{ category }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 排序 -->
      <div class="row mb-4">
        <div class="col-md-12">
          <select v-model="sortOrder" class="form-select">
            <option value="highest">最高評分</option>
            <option value="lowest">最低評分</option>
            <option value="name">遊戲名稱</option>
          </select>
        </div>
      </div>
  
      <!-- 遊戲卡片列表 -->
      <div class="row">
        <div v-for="game in displayedResults" :key="game.name" class="col-md-6 mb-4">
          <div class="card">
            <img :src="game.image" class="card-cover" :alt="game.name">
  
            <div class="card-body">
              <h5 class="card-title">{{ game.name }}</h5>
              <p class="card-text">Category: {{ game.category }}</p>
              <p class="card-text">Company: {{ game.company }}</p>
              <router-link :to="{ name: 'GameReview', params: { id: game.name }}" class="btn btn-primary">
                View more
              </router-link>

              <div class="metascore" :class="getScoreClass(game.score)">
                {{ game.score }}
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 加載更多按鈕 -->
      <div class="text-center mt-5 mb-4">
        <button class="btn btn-dark" v-if="itemsToShow < filteredResults.length" @click="loadMore">
          載入更多
        </button>
      </div>
  
      <!-- 返回頂部按鈕 -->
      <button class="back-to-top" :class="{ show: showBackToTop }" @click="scrollToTop">▲</button>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  // import { useRouter } from 'vue-router'
  import gameDataJson from '@/assets/game_data/game_data.json'
  
  export default {
    name: 'GameList',
    setup() {
      // const router = useRouter()
      const query = ref("")
      const sortOrder = ref("highest")
      const itemsToShow = ref(6)
      const showBackToTop = ref(false)
      const selectedCompanies = ref([])
      const selectedCategories = ref([])
  
      // 使用導入的 JSON 數據初始化 gameData
      const gameData = ref(gameDataJson)
  
      // Get unique companies and categories
      const uniqueCompanies = computed(() => {
        return [...new Set(gameData.value.map(game => game.company))]
      })
  
      const uniqueCategories = [
        "MOBA", "3D", "射擊", "策略", "角色扮演", "冒險", "生活模擬", 
        "競速", "平台", "動作冒險", "益智", "動作角色扮演", 
        "第三人稱射擊", "開放世界", "解謎", "2D像素", "恐怖", 
        "格鬥", "動作"
      ]
  
      // Filtered results based on search, companies, and categories
      const filteredResults = computed(() => {
        return gameData.value.filter(game => {
          const matchesQuery = 
            game.name.toLowerCase().includes(query.value.toLowerCase()) ||
            game.category.toLowerCase().includes(query.value.toLowerCase()) ||
            game.company.toLowerCase().includes(query.value.toLowerCase())
          
          const matchesCompanies = selectedCompanies.value.length === 0 || 
            selectedCompanies.value.includes(game.company)
          
            const matchesCategories = selectedCategories.value.length === 0 || 
              game.category.split('、').some(category => 
                selectedCategories.value.includes(category.trim())
              );
  
          return matchesQuery && matchesCompanies && matchesCategories
        })
      })
  
      const sortedResults = computed(() => {
        return filteredResults.value.slice().sort((a, b) => {
          switch (sortOrder.value) {
            case "highest":
              return b.score - a.score
            case "lowest":
              return a.score - b.score
            case "name":
              return a.name.localeCompare(b.name, 'zh-TW')
            default:
              return 0
          }
        })
      })
  
      const displayedResults = computed(() => sortedResults.value.slice(0, itemsToShow.value))
  
      const getScoreClass = (score) => {
        if (score >= 7) return "green"
        if (score >= 5) return "yellow"
        return "red"
      }
  
      const loadMore = () => {
        itemsToShow.value += 6
      }
  
      const handleScroll = () => {
        showBackToTop.value = window.scrollY > 300
      }
  
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
  
      // Reset items to show when filters or search change
      watch([query, selectedCompanies, selectedCategories], () => {
        itemsToShow.value = 6
      })
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll)
      })
  
      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
      })
  
      return {
        query,
        sortOrder,
        filteredResults,
        sortedResults,
        displayedResults,
        itemsToShow,
        loadMore,
        showBackToTop,
        scrollToTop,
        getScoreClass,
        selectedCompanies,
        selectedCategories,
        uniqueCompanies,
        uniqueCategories
      }
    }
  }
  </script>
  
  <style scoped>
  body {
      background-color: rgba(5, 0, 10, 0.95); 
      color: #e9e9e9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
      min-height: 100vh;
      padding-bottom: 40px;
  }
  
  
  h1 {
      color: #e9e9e9;
      font-weight: 100;
      text-transform: uppercase;
      margin-top: 30px;
      margin-bottom: 30px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      border-bottom: 3px solid #5a4a72;
      padding-bottom: 15px;
      text-align: center;
  }
  
  .form-control {
      background-color: rgba(255, 255, 255, 0);
      border: 2px solid #5a4a72;
      font-weight: bold;
      color: #e9e9e9;
      border-radius: 15px;
      padding: 6px 10px;
      transition: all 0.3s;
      margin-bottom: 10px;
  }
  
  .form-control:focus {
      background-color: rgba(255, 255, 255, 0.15);
      border-color: #8a7b99;
      color: white;
      box-shadow: 0 0 10px rgba(138, 123, 153, 0.5);
  }
  
  .form-control::placeholder {
      color: #aaaaaa;
  }
  
  .form-select {
      background-color: rgba(255, 255, 255, 0);
      border: 2px solid #5a4a72;
      color: #e9e9e9;
      border-radius: 15px;
      padding: 6px 10px;
      font-weight: bold;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23aaaaaa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
      transition: all 0.3s;
      margin-bottom: 10px;
  }
  
  .form-select:focus {
      background-color: rgba(255, 255, 255, 0.15);
      border-color: #8a7b99;
      color: rgb(29, 6, 31);
      box-shadow: 0 0 10px rgba(138, 123, 153, 0.5);
  }
  
  .card {
      display: flex;
      background: rgba(51, 51, 51, 0.85);
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
      transition: all 0.3s;
      border: 1px solid #666666;
      height: 500px;
      margin-bottom: 25px;
      color: #e9e9e9;
      position: relative;
      overflow: hidden;
  }
  
  .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
      border-color: #5a4a72;
      background: rgba(59, 41, 76, 0.9);
  }
  
  .card:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5px;
      height: 100%;
      background: linear-gradient(to bottom, #5a4a72, #8a7b99);
      transition: width 0.3s;
  }
  
  .card:hover:before {
      width: 8px;
  }
  
  .card-cover {
      width: 130px;
      height: 150px;
      border-radius: 10px;
      object-fit: cover;
      margin-right: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      border: 2px solid #666666;
      transition: all 0.3s;
  }
  
  .card:hover .card-cover {
      border-color: #5a4a72;
      transform: scale(1.05);
  }
  
  .card-body {
      flex-grow: 1;
      position: relative;
  }
  
  .card-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 15px;
      color: #e9e9e9;
      border-bottom: 1px solid #666666;
      padding-bottom: 10px;
  }
  
  .card-text {
      font-size: 0.95rem;
      color: #aaaaaa;
      margin-bottom: 8px;
  }
  
  .btn-primary {
      position: absolute;
      border-radius: 12px;
      background-color: #5a4a72;
      border: none;
      padding: 8px 15px;
      bottom: 20px;
      font-weight: bold;
      letter-spacing: 0.5px;
      transition: all 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      margin-right: 50px;
  }
  
  .btn-primary:hover {
      background-color: #8a7b99;
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
  
  .metascore {
      position: absolute;
      font-size: 16px;
      font-weight: bold;
      padding: 8px 12px;
      border-radius: 8px;
      color: white;
      right: 20px;
      bottom: 20px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.3s;
  }
  
  .card:hover .metascore {
      transform: scale(1.1);
  }
  
  .metascore.green { 
      background-color: #4caf50; 
  }  
  
  .metascore.yellow { 
      background-color: #ffa000; 
  } 
  
  .metascore.red { 
      background-color: #d32f2f; 
  } 
  
  .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      display: none;
      background-color: #5a4a72;
      color: white;
      border: none;
      border-radius: 50%;
      padding: 15px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
      z-index: 1000;
  }
  
  .back-to-top.show {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .back-to-top:hover {
      background-color: #8a7b99;
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }
  
  .btn-dark {
      background-color: #333333;
      border: 2px solid #5a4a72;
      color: #e9e9e9;
      font-weight: 600;
      padding: 10px 25px;
      border-radius: 15px;
      transition: all 0.3s;
  }
  
  .btn-dark:hover {
      background-color: #5a4a72;
      border-color: #8a7b99;
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
  }
  
  .col-md-6 {
      animation: fadeIn 0.5s ease-out forwards;
  }
  
  .col-md-6:nth-child(2n) {
      animation-delay: 0.2s;
  }
  
  .col-md-6:nth-child(3n) {
      animation-delay: 0.3s;
  }
  
  /* rwd */
  @media (max-width: 767px) {
      .card {
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 25px 15px;
      }
  
      .card-cover {
          margin-right: 0;
          margin-bottom: 20px;
          width: 150px;
          height: 170px;
      }
  
      .metascore {
          position: static;
          display: inline-block;
      }
  
      .btn-primary {
          position: static;
          display: inline-block;
      }
  
      .card:before {
          width: 100%;
          height: 5px;
          top: auto;
          bottom: 0;
          background: linear-gradient(to right, #5a4a72, #8a7b99);
      }
  
      .card:hover:before {
          height: 8px;
          width: 100%;
      }
  }
  </style> 