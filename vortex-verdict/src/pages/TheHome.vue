<template>
    <div class="home">
        <div class="mainvisual-container">
            <!-- <img :src="img" alt="bg-image" class="mainvisual"> -->
            <img src="@/assets/home/door.gif" alt="bg-image" class="mainvisual">
            <div class="mainText d-flex flex-column align-items-center gap-2">
                <h1 class="">Vortex Verdict</h1>
                <span class="text-center">遊戲世界的漩渦，評價公正的對決!</span>
            </div>
        </div>
        <div id="about" class="container d-flex flex-column align-items-center py-5">
            <h1 class="about-title">ABOUT</h1>
            <div class="about-content d-flex flex-column align-items-center gap-3">
                <p>成立於2025年3月19日</p>
                <h3 class="fw-bolder">Vortex Verdict 旋渦裁決｜遊戲評價的新標準</h3>
                <p class="text-center ">在遊戲世界裡，資訊就像漩渦，真假難辨、褒貶不一。Vortex Verdict
                    旋渦裁決，正是為了打破混沌而誕生——我們專注於專業、客觀且深度的遊戲評價，提供玩家最值得信賴的遊戲指引。</p>
                <h3 class="fw-bolder ">我們在做什麼？</h3>
                <p>我們不只是寫評論，我們做的是「裁決」。</p>
                <p class="text-center">從遊戲性、劇情、操作手感、美術風格、音樂設計到市場潛力，Vortex Verdict 採用獨家的「旋渦評分系統（Vortex Rating
                    System）」為每款遊戲進行科學化分析與玩家感受綜合評比，讓每一個分數都有數據、有溫度。</p>
                <p class="text-center fw-bold">「我們的使命是為玩家提供最真實、最客觀的遊戲評價，讓每一位玩家都能在遊戲的漩渦中找到屬於自己的裁決。」</p>
            </div>
        </div>

        <div class="pen my-5">
            <div class="stage">
                <a v-for="(image, index) in imgList" :key="index" :href="image.link" class="element" loading="lazy"
                    :class="{ active: activeIndex === index, inactive: activeIndex !== null && activeIndex !== index }"
                    :style="{ backgroundImage: `url(${image.src})` }" @mouseover="setActive(index)"
                    @mouseleave="clearActive">
                    <div>{{ image.text }}</div>
                </a>
            </div>
        </div>

        <div id="works" class="container-fluid work-container py-5">
            <h1 class="about-title">WORKS</h1>

            <div class="wrap d-flex flex-column align-items-center gap-3 py-1">
                <div class="work1 d-block">
                    <div class="dot"></div>
                    <div class="d-flex flex-column flex-md-row-reverse m-3 justify-content-md-center">
                        <img src="@/assets/home/assassins.jpg" alt="" class="img-fluid work-img">
                        <div class="work-box">
                            <h3 class="text-black fw-bolder">遊戲評價</h3>
                            <p class="text-center text-dark fw-bold">您可以輕鬆探索並尋找感興趣的遊戲評價<br>同時直接進行洽談並獲取您需要的資訊</p> 
                            <a href=""
                                class="text-decoration-none text-light">
                                <p class="work-btn mb-3">Work 總覽</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work2 d-block">
                    <div class="dot"></div>
                    <div class="d-flex flex-column flex-md-row m-3 justify-content-md-center">
                        <img src="https://www.capcom.com.tw/assets/img/work2.jpg" alt="" class="img-fluid work-img">
                        <div class="work-box">
                            <h3 class="text-black fw-bolder">遊戲評價</h3>
                            <p class="text-center text-dark fw-bold">由開發團隊與日本團隊攜手合作<br>
                                共同進行遊戲專業評論</p>
                            <a href="#recruit" class="text-decoration-none text-light">
                                <p class="work-btn mb-3">加入我們</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="recruit"
            class="container-fluid text-light d-flex flex-column align-items-center justify-content-center py-5">
            <h1 class="about-title">Recruit</h1>
            <p class="text-center recruit-text">
                漩渦裁決致力於以遊戲評價為娛樂文化創造價值，
                <br>
                隨時歡迎擁有遊戲熱忱的夥伴加入我們。
            </p>

            <div class="mt-4 d-flex flex-column w-100 align-items-center">
                <h3 class="fw-bolder mb-3">福利制度</h3>
                <table class="table custom-table">
                    <tbody>
                        <tr>
                            <th scope="row">休閒</th>
                            <td>員工國內外旅遊、年度健康檢查、慶生餐會</td>
                        </tr>
                        <tr>
                            <th scope="row">獎金</th>
                            <td>三節禮金、久任獎金</td>
                        </tr>
                        <tr>
                            <th scope="row">補助</th>
                            <td>婚喪喜慶補助、生育補助、社團活動補助</td>
                        </tr>
                        <tr>
                            <th scope="row">保險</th>
                            <td>勞保、健保、勞退新制、團體保險</td>
                        </tr>
                        <tr>
                            <th scope="row">出勤時間</th>
                            <td>9:00~17:30<span class="highlight-text">（每天工時7.5小時、上下班時間彈性30分鐘）</span></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">優於勞基法之休假制度</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <a href="#">
                <button class="work-btn text-light m-4 ">BACK to TOP</button>
            </a>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import game_data from "@/assets/game_data/game_data.json"

const img = ref("");
const data = JSON.parse(JSON.stringify(game_data));
img.value = data[2].image;


// resolve image path
const imgList = ref([
    { src: new URL('@/assets/home/capcom_logo.jpg', import.meta.url).href, text: "Capcom", link: "https://www.capcom.com.tw/#works" },
    { src: new URL('@/assets/home/hoyoverse.png', import.meta.url).href, text: "Hoyoverse", link: "https://www.hoyoverse.com/zh-tw/" },
    { src: new URL('@/assets/home/minecraft.jpg', import.meta.url).href, text: "Minecraft", link: "https://www.minecraft.com/" },
    { src: new URL('@/assets/home/ubisoft_logo.png', import.meta.url).href, text: "Ubisoft", link: "https://www.ubisoft.com/zh-tw/" },
    { src: new URL('@/assets/home/nintendo.png', import.meta.url).href, text: "Nintendo", link: "https://www.nintendo.com" },
    { src: new URL('@/assets/home/riot.png', import.meta.url).href, text: "Riot", link: "https://www.riot.com" }
]);

const activeIndex = ref(null)

const setActive = (index) => {
    activeIndex.value = index
}

const clearActive = () => {
    activeIndex.value = null
}


</script>

<style scoped>
.home {
    z-index: -1;
    width: 100%;
    height: 100%;
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

.pen {
    position: relative;
    width: 100%;
    height: 56vh;
    min-height: 240px;
    max-height: 56vh;
}

.stage {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.element {
    flex: 1;
    width: 15%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: flex 0.3s ease-in-out, opacity 0.5s ease-in-out;
}

.element div {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    opacity: 0;
    transition: opacity 0.3s;
}

.element.active {
    flex: 1.9;
    opacity: 1;
}

.element.active div {
    opacity: 1;
}

.element.inactive {
    opacity: 0.4;
}

.work-container {
    /* position: relative; */
    background-color: #5a4a72;
    overflow: hidden;
}

.work-btn {
    font-family: 'Kanit', 'Noto Sans', 'Noto Sans TC', 'Noto Sans SC', Helvetica, sans-serif;
    font-weight: 800;
    text-align: center;
    letter-spacing: 2px;
    padding: 10px 40px;
    background-color: #5a4a72;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
}

.work-btn:hover {
    background-color: #7a6b8c;
    transform: scale(1.05);
}

.work-btn:active {
    transform: scale(0.95);
}

.work1,
.work2 {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
}

.block {
    position: absolute;
    width: 100%;
    margin-bottom: 2em;
}

.wrap {
    position: relative;
    margin: 0 auto;
    width: 92%;
    height: auto;
    max-width: 1000px;
}

.work1 .dot {
    z-index: 0;
    width: 100%;
    height: 70%;
    left: -4em;
    bottom: 1em;
    background-position: left bottom;

}

.dot {
    position: absolute;
    background-image: radial-gradient(rgb(255, 255, 255) 11.2%, transparent 15.2%);
    background-position: center center;
    background-size: 16px 16px;
    background-color: rgba(255, 255, 255, 0);
}

.work2 .dot {
    z-index: 0;
    width: 100%;
    height: 70%;
    right: -4em;
    bottom: 1em;
    background-position: right bottom;
}

.work-box {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-content: space-between;
}

.recruit-text {
    font-size: 1.25rem;
    font-weight: 500;
}

.custom-table th {
    background-color: #FFD700;
    color: black;
    text-align: center;
    vertical-align: middle;
    width: 120px;
    height: 50px;
}

.custom-table td {
    font-weight: 700;
    text-align: center;
    background-color: #F5F5F5;
    padding: 5px 1em;
}

.custom-table {
    border-collapse: separate;
    border-spacing: 6px 10px;
    width: 100%;
    max-width: 800px;
    line-height: 1.2em;
}

.custom-table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

.highlight-text {
    font-weight: bold;
    color: #555;
}

@media screen and (min-width: 0px) and (max-width: 768px) {

    .pen {
        /* width: 1600px; */
        height: 240px;
    }

    .stage {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    .stage::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari, and Opera */
    }

    .element {
        flex: none;
        width: 300px;
        scroll-snap-align: center;
    }

    .element.active,
    .element.inactive {
        flex: none;
        opacity: 1;
    }

    .work1 .dot {
        display: none;
    }

    .work2 .dot {
        display: none;
    }

    .work-box {
        padding: 20px;
    }

    .recruit-text {
        font-size: 1rem;
    }
}

@media screen and (min-width: 768px) {
    .work-img {
        z-index: 1;
        width: 60%;
        max-width: 600px;
        height: auto;
        margin-top: 50px;
    }

    .work-box {
        width: 32vw;
        max-width: 380px;
        height: 28vw;
        max-height: 300px;
    }

}
</style>