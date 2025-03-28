<template>
    <footer>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="footer-brand">Vertex Verdict</div>
                    <p class="footer-text">Creating amazing experiences and innovative verdicts for our gamers
                        worldwide.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div class="col-md-6 text-md-end">
                    <ul class="footer-links">
                        <li><a href="./#about">About</a></li>
                        <li><a href="./#works">Works</a></li>
                        <li><a href="./#recruit">Recruit</a></li>
                        <li><a href="./">Privacy</a></li>
                        <li><a href="./">Terms</a></li>
                    </ul>
                </div>
            </div>

            <div class="copyright text-center">
                © 2024 CompanyName. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    
}

.footer-brand {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.footer-text {
    font-size: 0.9rem;
    max-width: 300px;
}

.social-links {
    margin: 20px 0;
}

.social-link {
    color: #e9e9e9;
    margin-right: 20px;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #8a7b99;
}

.footer-links {
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer-links a {
    color: #e9e9e9;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #8a7b99;
}

.copyright {
    font-size: 0.85rem;
    padding-top: 20px;
    border-top: 1px solid #eee;
}
</style>
