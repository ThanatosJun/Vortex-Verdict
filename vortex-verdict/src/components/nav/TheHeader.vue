<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark" data-bs-theme="dark">
            <div class="container-fluid d-flex justify-content-between">
                <div class="container d-flex justify-content-between">

                    <a class="navbar-brand d-flex flex-row align-items-center justify-content-center" href="/">
                        <img src="@/assets/logo1.png" width="50px" height="50px" alt="">
                        <p class="logo-title dotgothic16-regular">Vertex Verdict</p>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav">
                        <li class="nav-item d-flex justify-content-center">
                            <a class="nav-link active hover-border" href="/#about">
                                About
                            </a>
                        </li>

                        <li class="nav-item d-flex justify-content-center">
                            <a class="nav-link hover-border" href="/#partners">Partners</a>
                        </li>
                        <!-- Works with Dropdown -->
                        <li class="nav-item dropdown d-flex justify-content-center works-item">
                            <a href="/#works" class="nav-link dropdown-toggle hover-border" id="navbarDropdown"
                                data-scroll aria-expanded="false">
                                Works
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-list"><a href="/games" class="dropdown-item hover-border">Our
                                        Work</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item d-flex justify-content-center">
                            <a class="nav-link hover-border" href="/#recruit">Recruit</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const worksItem = document.querySelector('.works-item');

    function handleDropdown() {
        const isMobile = window.innerWidth <= 992;
        if (isMobile) {
            const worksItemLink = worksItem.querySelector('a');
            worksItemLink.classList.remove('dropdown-toggle');
            const worksItemMenu = worksItem.querySelector('ul');
            worksItemMenu.classList.remove('dropdown-menu');
        } else {
            const worksItemLink = worksItem.querySelector('a');
            worksItemLink.classList.add('dropdown-toggle');
            const worksItemMenu = worksItem.querySelector('ul');
            worksItemMenu.classList.add('dropdown-menu');
        }
    }

    // Ensure the dropdown behavior is correct on resize
    window.addEventListener('resize', handleDropdown);
    handleDropdown();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dr+Sugiyama&family=DotGothic16&family=Press+Start+2P&display=swap');

.press-start-2p-regular {
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
    font-style: normal;
}


.dotgothic16-regular {
    font-family: "DotGothic16", sans-serif;
    font-weight: 600;
    font-style: normal;
}

/* Header Style */
header {
    position: fixed;
    width: 100%;
    z-index: 200;
    height: 60px;
    top: 0;
}

.logo-title {
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 10px;
    color: #f8f9fa;
}

/* Hover Border Effect */
.hover-border {
    border-left: none;
    transition: border-left 0.3s ease;
}

.hover-border:hover {
    border-left: 1px solid rgba(248, 249, 250, 0.5);
}

/* Dropdown Position on Hover (Desktop) */
.works-item:hover .dropdown-menu {
    position: absolute;
    top: 100%;
    left: -40%;
    background-color: #140322;
    border-radius: 8px;
    list-style: none;
    display: block;
    animation: fadeInDropdown 0.3s ease forwards;
}

.works-item:hover .dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
}

@keyframes fadeInDropdown {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 992px) {
    .works-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .works-item ul {
        width: 100%;
        list-style: none;
        padding-left: 0;
    }

    .dropdown-item {
        width: 100%;
        padding: 10px 20px;
        text-decoration: none;
        display: block;
    }

    .hover-border {
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        transition: background-color 0.3s ease;
    }

    .nav-item .hover-border {
        font-size: 1.25rem;

    }

    .dropdown-list .dropdown-item {
        font-size: 1rem;
    }


    .hover-border:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
</style>