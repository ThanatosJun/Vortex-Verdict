"use strict";(self["webpackChunkvortex_verdict"]=self["webpackChunkvortex_verdict"]||[]).push([[580],{580:function(e,s,l){l.r(s),l.d(s,{default:function(){return U}});var o=l(6768),a=l(5130),c=l(4232);const r={class:"container mt-4"},t={class:"row mb-3"},d={class:"col-md-12"},n={class:"row mb-4"},i={class:"col-md-6"},u={class:"card"},v={class:"card-body"},m={class:"row"},k={class:"form-check"},p=["id","value"],L=["for"],h={class:"col-md-6"},w={class:"card"},C={class:"card-body"},b={class:"row"},y={class:"form-check"},f=["id","value"],g=["for"],E={class:"row mb-4"},T={class:"col-md-12"},R={class:"row"},_={class:"card"},K=["src","alt"],x={class:"card-body"},V={class:"card-title"},X={class:"card-text"},q={class:"card-text"},W={class:"text-center mt-5 mb-4"};function S(e,s,l,S,B,F){const I=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",r,[s[10]||(s[10]=(0,o.Lk)("h1",null,"Vortex Verdict",-1)),(0,o.Lk)("div",t,[(0,o.Lk)("div",d,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>S.query=e),type:"text",class:"form-control",placeholder:"搜尋遊戲..."},null,512),[[a.Jo,S.query]])])]),(0,o.Lk)("div",n,[(0,o.Lk)("div",i,[(0,o.Lk)("div",u,[s[6]||(s[6]=(0,o.Lk)("div",{class:"card-header"},"公司篩選",-1)),(0,o.Lk)("div",v,[(0,o.Lk)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(S.uniqueCompanies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"col-md-6 col-6"},[(0,o.Lk)("div",k,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox",id:"company-"+e,value:e,"onUpdate:modelValue":s[1]||(s[1]=e=>S.selectedCompanies=e)},null,8,p),[[a.lH,S.selectedCompanies]]),(0,o.Lk)("label",{class:"form-check-label",for:"company-"+e},(0,c.v_)(e),9,L)])])))),128))])])])]),(0,o.Lk)("div",h,[(0,o.Lk)("div",w,[s[7]||(s[7]=(0,o.Lk)("div",{class:"card-header"},"類別篩選",-1)),(0,o.Lk)("div",C,[(0,o.Lk)("div",b,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(S.uniqueCategories,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"col-md-6 col-6"},[(0,o.Lk)("div",y,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox",id:"category-"+e,value:e,"onUpdate:modelValue":s[2]||(s[2]=e=>S.selectedCategories=e)},null,8,f),[[a.lH,S.selectedCategories]]),(0,o.Lk)("label",{class:"form-check-label",for:"category-"+e},(0,c.v_)(e),9,g)])])))),128))])])])])]),(0,o.Lk)("div",E,[(0,o.Lk)("div",T,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>S.sortOrder=e),class:"form-select"},s[8]||(s[8]=[(0,o.Lk)("option",{value:"highest"},"最高評分",-1),(0,o.Lk)("option",{value:"lowest"},"最低評分",-1),(0,o.Lk)("option",{value:"name"},"遊戲名稱",-1)]),512),[[a.u1,S.sortOrder]])])]),(0,o.Lk)("div",R,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(S.displayedResults,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.name,class:"col-md-6 mb-4"},[(0,o.Lk)("div",_,[(0,o.Lk)("img",{src:e.image,class:"card-cover",alt:e.name},null,8,K),(0,o.Lk)("div",x,[(0,o.Lk)("h5",V,(0,c.v_)(e.name),1),(0,o.Lk)("p",X,"Category: "+(0,c.v_)(e.category),1),(0,o.Lk)("p",q,"Company: "+(0,c.v_)(e.company),1),(0,o.bF)(I,{to:{name:"GameReview",params:{id:e.name}},class:"btn btn-primary"},{default:(0,o.k6)((()=>s[9]||(s[9]=[(0,o.eW)(" View more ")]))),_:2},1032,["to"]),(0,o.Lk)("div",{class:(0,c.C4)(["metascore",S.getScoreClass(e.score)])},(0,c.v_)(e.score),3)])])])))),128))]),(0,o.Lk)("div",W,[S.itemsToShow<S.filteredResults.length?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"btn btn-dark",onClick:s[4]||(s[4]=(...e)=>S.loadMore&&S.loadMore(...e))}," 載入更多 ")):(0,o.Q3)("",!0)]),(0,o.Lk)("button",{class:(0,c.C4)(["back-to-top",{show:S.showBackToTop}]),onClick:s[5]||(s[5]=(...e)=>S.scrollToTop&&S.scrollToTop(...e))},"▲",2)])}l(8111),l(2489),l(1701),l(3579),l(7642),l(8004),l(3853),l(5876),l(2475),l(5024),l(1698);var B=l(144),F=l(1823),I={name:"GameList",setup(){const e=(0,B.KR)(""),s=(0,B.KR)("highest"),l=(0,B.KR)(6),a=(0,B.KR)(!1),c=(0,B.KR)([]),r=(0,B.KR)([]),t=(0,B.KR)(F),d=(0,o.EW)((()=>[...new Set(t.value.map((e=>e.company)))])),n=["MOBA","3D","射擊","策略","角色扮演","冒險","生活模擬","競速","平台","動作冒險","益智","動作角色扮演","第三人稱射擊","開放世界","解謎","2D像素","恐怖","格鬥","動作"],i=(0,o.EW)((()=>t.value.filter((s=>{const l=s.name.toLowerCase().includes(e.value.toLowerCase())||s.category.toLowerCase().includes(e.value.toLowerCase())||s.company.toLowerCase().includes(e.value.toLowerCase()),o=0===c.value.length||c.value.includes(s.company),a=0===r.value.length||s.category.split("、").some((e=>r.value.includes(e.trim())));return l&&o&&a})))),u=(0,o.EW)((()=>i.value.slice().sort(((e,l)=>{switch(s.value){case"highest":return l.score-e.score;case"lowest":return e.score-l.score;case"name":return e.name.localeCompare(l.name,"zh-TW");default:return 0}})))),v=(0,o.EW)((()=>u.value.slice(0,l.value))),m=e=>e>=7?"green":e>=5?"yellow":"red",k=()=>{l.value+=6},p=()=>{a.value=window.scrollY>300},L=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,o.wB)([e,c,r],(()=>{l.value=6})),(0,o.sV)((()=>{window.addEventListener("scroll",p)})),(0,o.hi)((()=>{window.removeEventListener("scroll",p)})),{query:e,sortOrder:s,filteredResults:i,sortedResults:u,displayedResults:v,itemsToShow:l,loadMore:k,showBackToTop:a,scrollToTop:L,getScoreClass:m,selectedCompanies:c,selectedCategories:r,uniqueCompanies:d,uniqueCategories:n}}},M=l(1241);const O=(0,M.A)(I,[["render",S],["__scopeId","data-v-5fa580b2"]]);var U=O}}]);
//# sourceMappingURL=580.8573b1c9.js.map