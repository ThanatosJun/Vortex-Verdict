"use strict";(self["webpackChunkvortex_verdict"]=self["webpackChunkvortex_verdict"]||[]).push([[824],{824:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var s=a(6768),c=a(4232),l=a(5130);const o={class:"d-flex justify-content-center align-items-center"},n={class:"container game-container shadow-lg position-relative"},i={class:"image-container mt-4 mb-4 mx-auto d-block"},r=["src"],m={class:"game-title text-center mb-4"},d={class:"attribute-container mb-4"},g={class:"attribute-content col-lg-4 col-12"},k={class:"game-info"},u={class:"attribute-content col-lg-4 col-12"},v={class:"game-info"},L={class:"attribute-content col-lg-4 col-12"},b={class:"game-info"},p={class:"text-content"},h={class:"game-info"},f={class:"container shadow-lg position-absolute top-50 start-50 translate-middle"},x={class:"back-button"};function _(t,e,a,_,y,w){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",o,[(0,s.bo)((0,s.Lk)("div",n,[(0,s.Lk)("div",i,[(0,s.Lk)("img",{src:y.game.image,class:"game-image col-lg-12 shadow-lg",alt:"game image"},null,8,r)]),(0,s.Lk)("h2",m,(0,c.v_)(y.game.name),1),(0,s.Lk)("div",d,[(0,s.Lk)("div",g,[e[1]||(e[1]=(0,s.Lk)("h3",{class:"detail-title"},"評分",-1)),(0,s.Lk)("p",k,(0,c.v_)(y.game.score),1)]),(0,s.Lk)("div",u,[e[2]||(e[2]=(0,s.Lk)("h3",{class:"detail-title"},"類別",-1)),(0,s.Lk)("p",v,(0,c.v_)(y.game.category),1)]),(0,s.Lk)("div",L,[e[3]||(e[3]=(0,s.Lk)("h3",{class:"detail-title"},"公司",-1)),(0,s.Lk)("p",b,(0,c.v_)(y.game.company),1)])]),(0,s.Lk)("div",p,[e[4]||(e[4]=(0,s.Lk)("h3",{class:"detail-title text-left"},"遊戲簡介",-1)),(0,s.Lk)("p",h,(0,c.v_)(y.game.text),1)])],512),[[l.aG,y.game]]),(0,s.bo)((0,s.Lk)("div",f,e[5]||(e[5]=[(0,s.Lk)("p",{class:"text-center"},"載入中或找不到遊戲......",-1)]),512),[[l.aG,!y.game]])]),(0,s.Lk)("div",x,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>w.goToHome&&w.goToHome(...t)),class:"btn btn-primary"},"返回遊戲列表")])])}a(8111),a(116);var y=a(1823),w={data(){return{game:null}},async created(){const t=decodeURIComponent(this.$route.params.id);try{this.game=y.find((e=>e.name===t))||null}catch(e){console.error("載入遊戲資料時出錯:",e)}},methods:{goToHome(){this.$router.replace({name:"GameList"})}}},C=a(1241);const G=(0,C.A)(w,[["render",_],["__scopeId","data-v-df92d1d4"]]);var H=G}}]);
//# sourceMappingURL=824.f4ec0786.js.map