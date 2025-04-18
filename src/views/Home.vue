<template>
    <body>
    
    <header>
        <nav class="header_nav">
            <div class="header_nav_container">
                <div class="header_logo-container">
                    <router-link :to="{name: 'home'}">
                        <img src="../assets/img/KambaBalanganayi.svg" alt="Website logo, Kamba Balanganayi in Londrina Solid" class="header_logo">
                    </router-link>
                </div>
                <div class="header_icon">
                    <button ref="nav-on" id="nav-on">
                        <div class="icon-container">
                            <svg class="icon" viewBox="0 0 24 24">
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <line x1="2" y1="6" x2="22" y2="6" />
                            <line x1="2" y1="18" x2="22" y2="18" />
                            <line class="line-1" x1="18" y1="6" x2="6" y2="18" />
                            <line class="line-2" x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>                      
                    </button>

                </div>
            </div>
            <ul ref="nav-menu" id="nav-menu">
                <div class="nav-off-container">
                    <button ref="nav-off" id="nav-off">X</button>
                </div>
                <router-link :to="{name: 'home'}">Home</router-link>
                <router-link :to="{name: 'street'}">Street</router-link>
                <router-link :to="{name: 'portraits'}">Portraits</router-link>
                <router-link :to="{name: 'landscape'}">Landscape</router-link>
                <a href="#section-about">About</a>
                <a href="#section-contact">Contact</a>
                <div class="social-icons-container">
                    <a href="https://github.com/KambaBalanganayi" class="tooltip">
                        <i class="fab fa-github"></i>
                        <span class="tooltiptext">Github</span>
                    </a>
                    <a href=https://www.instagram.com/kam.nayi/  class="tooltip">
                        <i class="fab fa-instagram"></i>
                        <span class="tooltiptext">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kambabalanganayi/"  class="tooltip">
                        <i class="fab fa-linkedin"></i>
                        <span class="tooltiptext">LinkedIn</span>
                    </a>
                </div>
            </ul>
        </nav>
    </header>

    <section class="section hero">
        <video src="../assets/video/compressed/PortfolioMix1.mp4" loop muted autoplay playback="1.25" poster=""></video>
    </section>

    <section class="section-photos">
        <article class="main-container">
            <div class="grid_layout">
                <div class="grid-item" id="image1">
                    <img loading="lazy" src="../assets/img/portraits/compressed/4.jpg" alt="" class="grid-item">
                </div>
                <div class="grid-item" id="image2">
                    <img loading="lazy" src="../assets/img/portraits/compressed/6.jpg" alt=""  class="grid-item">
                </div>
                <div class="grid-item" id="image3">
                    <img loading="lazy" src="../assets/img/street/compressed/10.jpg" alt="" id="image3" class="grid-item">
                </div>
                <div class="grid-item" id="image4">
                    <img loading="lazy" src="../assets/img/street/compressed/6.jpg" alt="" id="image4" class="grid-item">
                </div>
                <div  id="image5" class="grid-item">
                    <video src="../assets/video/compressed/PortfolioMix4.mp4" alt="" width="150%" loop autoplay muted></video>
                </div>
                <div class="grid-item" id="image6">
                    <img loading="lazy" src="../assets/img/street/compressed/15.jpg" alt="" id="image6" class="grid-item">
                </div>
                <div class="grid-item" id="image7">
                    <img loading="lazy" src="../assets/img/portraits/compressed/1.jpg" alt="" id="image7" class="grid-item">
                </div>
                <div class="grid-item" id="image8">
                    <img loading="lazy" src="../assets/img/portraits/compressed/8.jpg" alt="" id="image8" class="grid-item">
                </div>
                <div class="grid-item" id="image9">
                    <img loading="lazy" src="../assets/img/street/compressed/9.jpg" alt="" id="image9" class="grid-item">
                </div>
                <div class="grid-item" id="image10">
                    <img loading="lazy" src="../assets/img/landscape/compressed/7.jpg" alt="" id="image10" class="grid-item">
                </div>
                <div class="grid-item" id="image11">
                    <img loading="lazy" src="../assets/img/portraits/compressed/10.jpg" alt="" id="image11" class="grid-item">
                </div>
                <div class="grid-item" id="image12">
                    <img loading="lazy" src="../assets/img/street/compressed/24.jpg" alt="" id="image12" class="grid-item">
                </div>
                <div class="grid-item" id="image13">
                    <img loading="lazy" src="../assets/img/landscape/compressed/9.jpg" alt="" id="image13" class="grid-item">
                </div>
                <div  id="image14" class="grid-item">
                    <video src="../assets/img/street/compressed/21_1.mp4" alt="" loop muted autoplay width="150%"></video>
                </div>
                <div class="grid-item" id="image15">
                    <img loading="lazy" src="../assets/img/landscape/compressed/17.jpg" alt="" id="image15" class="grid-item">
                </div>
                <div class="grid-item" id="image16">
                    <img loading="lazy" src="../assets/img/street/compressed/25.jpg" alt="" id="image16" class="grid-item">
                </div>
                <div class="grid-item" id="image17">
                    <img loading="lazy" src="../assets/img/street/compressed/7.jpg" alt="" id="image17" class="grid-item">
                </div>
                <div class="grid-item" id="image18">
                    <img loading="lazy" src="../assets/img/street/compressed/19.jpg" alt="" id="image18" class="grid-item">
                </div>
                <div class="grid-item" id="image19">
                    <img loading="lazy" src="../assets/img/landscape/compressed/15.jpg" alt="" id="image19" class="grid-item">
                </div>
                <div class="grid-item" id="image20">
                    <img loading="lazy" src="../assets/img/portraits/compressed/23.jpg" alt="" id="image20" class="grid-item">
                </div>
                <div class="grid-item" id="image21">
                    <img loading="lazy" src="../assets/img/street/compressed/8.jpg" alt="" id="image21" class="grid-item">
                </div>
            </div>
        </article>
    </section>

    <section class="section-about" id="section-about">
    
        <article class="about-content">

            <h1 class="about-title-text">ABOUT</h1>
            <div class="about-title-content">
                <p class="about-title-paragraph">- Whether it's a busy city street or a quiet country road, I'm usually on the lookout for the perfect shot to tell a story.</p>

                <p class="about-title-paragraph">- I get to know my subjects and bring out their personalities in front of the camera. I create images that reflect who they are.</p>

                <p class="about-title-paragraph">- Dramatic mountain ranges or peaceful beaches at sunset, I get inspired by incredible and mundane landscapes.</p>

                <p class="about-title-paragraph">- Whether it be on stills or in motion, my work with a camera is a passion I love to share.</p>
            </div>
        </article>
        
    </section>


    <section class="section-contact" id="section-contact">
        <article class="contact-container">
            <div class="contact-title">
                <h1 class="contact-title-text">CONTACT ME</h1>
            </div>
            
        </article>
        <article class="contact-content">
            <div class="contact-content-text">
                <div class="contact-title-context">
                    <h2>CONTACT ME</h2>
                    <a href="mailto:kamba.balanganayi@gmail.com">kamba.balanganayi@gmail.com</a>
                </div>
                <div class="contact-title-context">
                    <h2>REQUEST A PRINT</h2>
                    <a href="mailto:9shadoweavers@gmail.com">9shadoweavers@gmail.com</a>
                </div>
            </div>
        </article>
    </section>

    <footer class="section-footer">
        <section class="footer-container">
            <div class="column">
                <a href="#">TERMS</a>
            </div>
            <div class="column">
                &copy; 2023 Kamba Balanganayi
            </div>
            <div class="column">
                <a href="https://www.instagram.com/kb.stills/">INSTAGRAM</a>
            </div>
        </section>
    </footer>
</body>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  mounted() {
    const navOn = document.getElementById('nav-on');
    const navOff = document.getElementById('nav-off');
    const navMenu = document.getElementById('nav-menu');

    navOn.addEventListener('click', () => {
      navMenu.classList.add('show');
    });

    navOff.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  }
}

</script>
