<template>
    <div class="home">
        <div class="mainvisual-container">
            <img :src="img" alt="" class="mainvisual">
            <div class="mainText d-flex flex-column align-items-center gap-2">
                <h1 class="">Vortex Verdict</h1>
                <span class="">遊戲世界的漩渦，評價公正的對決!</span>
            </div>
        </div>
        <div class="container d-flex flex-column align-items-center">
            <h1 id="about" class="about-title">ABOUT</h1>
            <div class="about-content d-flex flex-column align-items-center gap-3">
                <p>成立於2025年3月19日</p>
                <h3 class="fw-bolder">Vortex Verdict 旋渦裁決｜遊戲評價的新標準</h3>
                <p class="text-center ">在遊戲世界裡，資訊就像漩渦，真假難辨、褒貶不一。Vortex Verdict 旋渦裁決，正是為了打破混沌而誕生——我們專注於專業、客觀且深度的遊戲評價，提供玩家最值得信賴的遊戲指引。</p>
                <h3 class="fw-bolder ">我們在做什麼？</h3>
                <p>我們不只是寫評論，我們做的是「裁決」。</p>
                <p class="text-center">從遊戲性、劇情、操作手感、美術風格、音樂設計到市場潛力，Vortex Verdict 採用獨家的「旋渦評分系統（Vortex Rating
                    System）」為每款遊戲進行科學化分析與玩家感受綜合評比，讓每一個分數都有數據、有溫度。</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import game_data from "@/assets/game_data/game_data.json"

const img = ref("");
const data = JSON.parse(JSON.stringify(game_data));
console.log(data[0])
img.value = data[2].image;



</script>

<style scoped>
.home {
    z-index: -1;
    width: 100%;
    height: 95vh;
    background-color: #fcfcfc;
}

.mainvisual-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.mainvisual {
    z-index: 0;
    position: sticky;
    width: 100%;
    height: calc(100vh - 60px);
    padding: 0;
    overflow: hidden;
    object-fit: cover;
    /* background-position: inherit; */
    /* object-position: center; */
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0));
    /* -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0)); */
}

.mainText {
    /* animation and shadow */
    color: #fcfcfc;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.mainText h1 {
    font-size: 4rem;
    text-shadow: 0px 0px 20px rgba(32, 32, 32, 1);
    filter: drop-shadow(0px 0px 20px rgba(32, 32, 32, 1));
}

.mainText span {
    font-size: 2rem;
    text-shadow: 0px 0px 20px rgba(32, 32, 32, 1);
    filter: drop-shadow(0px 0px 20px rgba(32, 32, 32, 1));
}

.about-title {
    font-family: 'Kanit', 'Noto Sans', 'Noto Sans TC', 'Noto Sans SC', Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    letter-spacing: 3px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.about-content {
    max-width: 800px;
}
</style>