<template>
    <div class="container">
        <h2 class="text-light">404 - Not Found</h2>
        <p class="text-light">The page you are looking for does not exist. Maybe you can go <router-link class="link" to="/Vortex-Verdict">our home page</router-link>.</p>
    </div>
</template>
  
<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;
    text-align: center;
}

h2 {
    font-size: 2rem;
    color: #333;
}

p {
    font-size: 1.2rem;
    color: #666;
    margin-top: 20px;
}

</style>