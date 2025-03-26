<template>
    <header>
        <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid d-flex justify-content-between">
                <div class="container d-flex justify-content-between">
                    <a class="navbar-brand" href="#">Vertex Verdict</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav">
                        <li class="nav-item hover-border">
                            <a class="nav-link active d-flex justify-content-center" href="#">Home
                                <span class="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item d-flex justify-content-center hover-border">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center hover-border">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>
header {
    z-index: 200;
    position: fixed;
    width: 100%;
    height: 5vh;
    top: 0;
}

.hover-border {
    border-left: none;
    transition: border-left 0.3s ease;
}
.hover-border:hover {
    border-left: 1px solid rgba(248, 249, 250, 0.5); /* similar to border-light */
}
</style>